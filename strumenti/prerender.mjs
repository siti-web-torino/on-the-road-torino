// Scrive in index.html i blocchi generati da DATI (js/main.js), così menu, orari e telefono
// si leggono anche senza JavaScript. Aggiorna anche <head> e sitemap.xml.
// Da lanciare dopo ogni modifica a DATI:  node strumenti/prerender.mjs
// Non è una build: il sito si pubblica così com'è e funziona anche senza questo passaggio.
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const modulo = { exports: {} };
vm.runInNewContext(readFileSync("js/main.js", "utf8"), { module: modulo });
const { DATI, SITO } = modulo.exports;

let html = readFileSync("index.html", "utf8");

const sostituisci = (regex, nuovo, cosa) => {
  if (!regex.test(html)) throw new Error(`Non trovato in index.html: ${cosa}`);
  regex.lastIndex = 0;
  html = html.replace(regex, nuovo);
};

for (const nome of Object.keys(SITO.BLOCCHI)) {
  sostituisci(
    new RegExp(`(data-blocco="${nome}"[^>]*>)<!--i-->[\\s\\S]*?<!--f-->`),
    (_, apertura) => `${apertura}<!--i-->${SITO.BLOCCHI[nome]()}<!--f-->`,
    `blocco ${nome}`,
  );
}

sostituisci(/<!--testa:i-->[\s\S]*?<!--testa:f-->/, () => `<!--testa:i-->\n  ${SITO.testa()}\n  <!--testa:f-->`, "testa");
sostituisci(/data-impronta="[^"]*"/, () => `data-impronta="${SITO.impronta(SITO.tuttiIBlocchi())}"`, "impronta");
sostituisci(/(data-azione="chiama" href=")[^"]*"/g, (_, a) => `${a}tel:${DATI.telefono.numero}"`, "link Chiama");
sostituisci(/(data-azione="mappa" href=")[^"]*"/g, (_, a) => `${a}${DATI.mappa}"`, "link Come arrivare");
sostituisci(/(data-campo="telefono"[^>]*>)[^<]*/g, (_, a) => `${a}${DATI.telefono.testo}`, "telefono");

writeFileSync("index.html", html);

const oggi = new Date().toISOString().slice(0, 10);
writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DATI.url}</loc>
    <lastmod>${oggi}</lastmod>
  </url>
</urlset>
`);

console.log(`index.html aggiornato: ${Object.keys(SITO.BLOCCHI).length} blocchi. sitemap.xml: ${oggi}`);
