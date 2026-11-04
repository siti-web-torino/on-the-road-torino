// Screenshot a 390/768/1280 (prima schermata + pagina intera) via Chrome DevTools Protocol.
// Uso: node strumenti/anteprime.mjs  (server su http://localhost:8765)
import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const URL = process.argv[2] || "http://localhost:8765/";
const OUT = "docs/anteprime";
const PORT = 9333;
mkdirSync(OUT, { recursive: true });

const proc = spawn(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${process.cwd()}/strumenti/chrome-profilo`, "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let target;
for (let i = 0; i < 50 && !target; i++) {
  try { target = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find((t) => t.type === "page"); }
  catch { await sleep(200); }
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0; const attese = new Map(); const problemi = [];
ws.addEventListener("message", (e) => {
  const m = JSON.parse(e.data);
  if (m.id && attese.has(m.id)) { attese.get(m.id)(m.result); attese.delete(m.id); }
  if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") problemi.push("console: " + m.params.args.map((a) => a.value).join(" "));
  if (m.method === "Runtime.exceptionThrown") problemi.push("eccezione: " + m.params.exceptionDetails.text);
  if (m.method === "Network.responseReceived" && m.params.response.status >= 400) problemi.push(`${m.params.response.status} ${m.params.response.url}`);
});
const cmd = (method, params = {}) => new Promise((r) => { const i = ++id; attese.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });

await cmd("Runtime.enable"); await cmd("Network.enable"); await cmd("Page.enable");
const risultati = {};
for (const [w, h] of [[390, 844], [768, 1024], [1280, 800]]) {
  await cmd("Emulation.setDeviceMetricsOverride", { width: w, height: h, deviceScaleFactor: 1, mobile: w < 768 });
  await cmd("Page.navigate", { url: URL });
  await sleep(2500);
  const prima = await cmd("Page.captureScreenshot", { format: "png" });
  writeFileSync(`${OUT}/prima-schermata-${w}.png`, Buffer.from(prima.data, "base64"));
  const misure = (await cmd("Runtime.evaluate", { returnByValue: true, expression:
    "({alt: document.documentElement.scrollHeight, largo: document.documentElement.scrollWidth})" })).result.value;
  risultati[w] = misure;
  await cmd("Emulation.setDeviceMetricsOverride", { width: w, height: misure.alt, deviceScaleFactor: 1, mobile: w < 768 });
  await sleep(400);
  const tutta = await cmd("Page.captureScreenshot", { format: "png" });
  writeFileSync(`${OUT}/pagina-intera-${w}.png`, Buffer.from(tutta.data, "base64"));
}
console.log(JSON.stringify({ misure: risultati, problemi }, null, 1));
ws.close(); proc.kill();
process.exit(0);
