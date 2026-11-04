/* =====================================================================
   DATI DEL LOCALE: tutto quello che si cambia sta qui.
   Fonti: docs/fonti/DATI-CLIENTE.md (Google Maps, leggimenu.it) e
   docs/fonti/MENU.md, raccolti il 03/11/2026. NIENTE è confermato dal
   locale: elenco completo dei [DA CONFERMARE] nel README.
   ===================================================================== */
const DATI = {
  nome: "On the Road",
  indirizzo: "Via Monginevro 5, 10138 Torino",
  indirizzoDettaglio: { via: "Via Monginevro 5", cap: "10138", citta: "Torino", provincia: "TO", paese: "IT" },
  coordinate: { lat: 45.0652934, lng: 7.6535334 }, // Google Maps

  // Indirizzo del sito, con la barra finale. Da cambiare se arriva un dominio proprio:
  // va in canonical, Open Graph, dati strutturati e sitemap (poi: node strumenti/prerender.mjs).
  url: "https://on-the-road-torino.vercel.app/",

  // Testi per Google e per l'anteprima dei link. Togliere "Sito dimostrativo." al lancio (docs/LANCIO.md).
  seo: {
    titolo: "On the Road · Bar e caffetteria, Via Monginevro 5, Torino",
    descrizione: "Bar e caffetteria in Via Monginevro 5 a Torino: colazione al banco, aperitivo, spritz e cocktail, feste di laurea in sala privata. Menu con prezzi e orari. Sito dimostrativo.",
    descrizioneBreve: "Bar e caffetteria a Torino: colazione al banco, aperitivo, spritz e cocktail, feste di laurea in sala privata.",
    immagine: { src: "img/anteprima.jpg", w: 1200, h: 630, alt: "Logo di On the Road con le foto di un cocktail e di un tagliere" },
  },

  // Google Maps (link della scheda, usato per "Come arrivare"; mai iframe)
  mappa: "https://www.google.com/maps/place/On+the+Road/@45.0653699,7.6533656,20z/data=!4m6!3m5!1s0x47886d1e3e227cb3:0x8069fa16b4f0f83b!8m2!3d45.0652934!4d7.6535334!16s%2Fg%2F1td124dt",

  // DA CONFERMARE (Maps). Una directory riporta un altro numero: vedi RAPPORTO.
  telefono: { numero: "+39011266389", testo: "011 266389" },

  // Menu digitale del locale (è il "sito web" della scheda Maps)
  menuDigitale: "https://www.leggimenu.it/menu/ontheroad-",

  // Logo del locale (img-originali/logo-neon.png, usato com'è). null = solo il nome in testo.
  logo: { src: "img/logo.webp", alt: "On the Road, Bar & Cafe" },

  // DA CONFERMARE (Maps). 0 = domenica ... 6 = sabato. null = chiuso.
  // Se la chiusura è prima dell'apertura (es. "00:30") vuol dire dopo mezzanotte.
  orari: {
    0: ["09:00", "22:00"],
    1: ["06:30", "00:00"],
    2: ["06:30", "00:00"],
    3: ["06:30", "00:00"],
    4: ["06:30", "00:00"],
    5: ["06:30", "00:30"],
    6: ["06:30", "00:30"],
  },

  // DA CONFERMARE: le due fonti non coincidono. Non sceglierne una finché
  // il locale non risponde; allora lasciare solo quella giusta.
  aperitivo: [
    { fonte: "Google Maps", nome: "Happy hour", giorni: [0, 1, 2, 3, 4, 5, 6], ore: ["16:00", "23:30"] },
    { fonte: "il menu digitale del locale (leggimenu)", nome: "Formula di aperitivo", giorni: [0, 1, 2, 3, 4, 5, 6], ore: ["17:00", "20:30"] },
  ],
  // DA CONFERMARE (leggimenu). Contenuto e prezzo non noti.
  tagliere: { giorni: [1, 2, 3], ore: ["17:00", "20:30"] },

  // DA CONFERMARE (leggimenu, scheda evento). Due offerte: NON fonderle.
  sala: [
    "Musica e luci comprese nel prezzo, per massimo 3 ore.",
    "Ore in più: 50 € l'ora.",
    "Acconto per bloccare la sala: 100 €.",
    "Si può decorare la sala prima, d'accordo con lo staff.",
    "Torta portata da fuori: chiedono il ricettario. Taglio torta 1,50 € a persona, oppure ci si organizza da soli.",
  ],
  // Frase copiata dalla fonte: non riscriverla.
  dieciPersone: "Aperitivo per dieci persone a soli 100 euro, incluso due bottiglie di Prosecco. Ogni ospite aggiuntivo a soli 6 euro.",

  // DA CONFERMARE (Maps)
  accessibilita: "Ingresso e bagno accessibili in sedia a rotelle (secondo Google Maps).",
  accessibilitaSchema: ["Ingresso accessibile in sedia a rotelle", "Bagno accessibile in sedia a rotelle"],

  // Foto (originali in img-originali/, versioni ottimizzate in img/).
  // null = riquadro [FOTO DA INSERIRE] con la descrizione della foto che serve.
  foto: {
    cocktail: { src: "img/cocktail.webp", alt: "Tre drink su un tavolino all'aperto, uno con fragole e menta", w: 565, h: 627, subito: true },
    tagliere: { src: "img/tagliere.webp", alt: "Tagliere con fritti, salame, patatine, cous cous e salse, accanto a due calici di vino bianco", w: 531, h: 567, subito: true },
    buffet: { src: "img/buffet-aperitivo.webp", alt: "Un lungo banco di aperitivo con bruschette, pizzette, tramezzini, patate e bastoncini di carota", w: 673, h: 793 },
    sala: null,
  },
  fotoServe: {
    sala: "La sala privata, pronta per una festa",
  },

  // Menu: nomi e prezzi COME SCRITTI nella fonte (refusi compresi, vedi README).
  // conAperitivo: prezzo "con aperitivo" che la fonte dà per tutte le voci del gruppo.
  menu: [
    {
      id: "caffetteria", titolo: "Caffetteria",
      gruppi: [{
        voci: [
          ["Caffè", "1,20", "servizio al tavolo 1,30. Miscela di caffè torrefatto in grani"],
          ["Caffè Decaffeinato", "1,30", "servizio al tavolo 1,40"],
          ["Caffè Corretto", "2,00", "servizio al tavolo 2,20"],
          ["Caffè Macchiato Soia", "1,40", "servizio al tavolo 1,50"],
          ["Caffè Shakerato", "3,00", "con orzata"],
          ["Caffè Shakerato Corretto", "3,50"],
          ["Cappuccino", "1,50"],
          ["Cappuccino di Soia", "2,00"],
          ["Latte Bianco", "1,50", "con il miele 2,00"],
          ["Latte di Soia", "2,00", "con il miele 2,50"],
          ["Latte Macchiato", "2,20", "con il miele 2,70"],
          ["Orzo Piccolo", "1,40", "servizio al tavolo 1,50"],
          ["Orzo Grande", "1,60", "servizio al tavolo 1,70"],
          ["Ginseng Piccolo", "1,40", "servizio al tavolo 1,50"],
          ["Ginseng Grande", "1,60", "servizio al tavolo 1,70"],
          ["Marocchino", "2,50"],
          ["Thè Caldo", "2,50", "con il miele 3,00"],
          ["Cioccolata Calda", "3,00", "con panna 3,50"],
          ["Spremuta D'arancia", "3,50"],
          ["Brioches alla Nutella", "1,50"],
          ["Brioches Marmellata d'albicocca", "1,50"],
          ["Bioches al pistacchio", "1,50"],
          ["Brioches alla Crema", "1,50"],
          ["Brioches al Cioccolato", "1,50"],
          ["Fagottino ai tre cioccolati", "1,50"],
          ["Fagottino cioccolato vegano", "1,50"],
          ["Triangolino alla nutella", "1,50"],
          ["Triangolino crema di latte", "1,50"],
          ["Treccia di noci", "1,50"],
          ["Ogni aggiunta", "0,50"],
        ],
      }],
    },
    {
      id: "spritz", titolo: "Spritz",
      gruppi: [{
        conAperitivo: "8,00",
        voci: [
          ["Aperol Spritz", "5,00", "Aperol, spumante e top soda"],
          ["Campari Spritz", "6,00", "Campari, spumante e top di soda"],
          ["Misto", "6,00", "Aperol, Campari, spumante e top di soda"],
          ["Serenissimo", "6,00", "Select, spumante e top di soda"],
          ["Amaro del Capo Spritz", "6,00", "Amaro del capo, spumante e top di soda"],
          ["Passoà Spritz", "6,00", "Passoà, sciroppo frutti della passione, spumante e top di soda"],
          ["Hugo Spritz", "5,00", "Sciroppo di fiori di sambuco, spumante e top di soda"],
          ["Blue Curacao Spritz", "6,00", "Blu curaçao (liquore all'arancia), spumante e top di soda"],
          ["Violetta Spritz", "6,00", "Sciroppo alla violetta, spumante e top di soda"],
          ["Limoncello Spritz", "6,00", "Limoncello, spumante e top di soda"],
          ["Lampone Spritz", "6,00", "Sciroppo di lampone, spumante e top di soda"],
          ["Peach Aperol Spritz", "6,00", "Succo di pesca, aperol, spumante e top di soda"],
          ["Maracuja spritz", "6,00", "Sciroppo di maracuja, spumante e top di soda"],
          ["Mango spritz", "6,00", "Sciroppo al mango, spumante e top di soda"],
          ["Cynar spritz", "6,00", "Cynar, spumante e top di soda"],
        ],
      }],
    },
    {
      id: "cocktails", titolo: "Cocktails",
      gruppi: [
        {
          conAperitivo: "8,00",
          voci: [
            ["Calippo", "6,00", "Lime, jagermeister e ginger beer"],
            ["MOJTO", "6,00", "Rum, lime, zucchero di canna, menta"],
            ["Gin Fizz", "6,00", "Gin, succo di lime, sciroppo di zucchero e soda"],
            ["Gin Tonic", "6,00", "Gin e soda"],
            ["Gin Lemon", "6,00", "Gin e limonata. Possibilità di poter scegliere il gin; con aperitivo 8,00 gin base"],
            ["Cuba Libre", "6,00", "Rum bianco, lime e coca cola"],
            ["Albanian Drink", "6,00", "Raki, zucchero liquido, lime e albume d'uovo"],
            ["Negroni", "6,00", "Gin, campari bitter e vermouth rosso"],
            ["Negroni Sbagliato", "6,00", "Spumante, campari bitter e vermouth rosso"],
            ["Americano", "6,00", "Campari bitter, vermouth rosso e top di soda"],
            ["Tequila Sunrise", "6,00", "Succo d'arancia, tequila e sciroppo di granatina"],
            ["Midori Sour", "6,00", "Liquore al melone, succo lime e sciroppo di zucchero"],
            ["Whisky Sour", "6,00", "Bourbon, succo lime, sciroppo di zucchero e albume d'uovo"],
            ["Vino Bianco/Rosso", "3,50"],
            ["Prosecco", "3,50"],
          ],
        },
        {
          titolo: "Analcolici",
          voci: [
            ["Spritz analcolico", "6,00", "Succo d'arancia, acqua tonica e bitter rosso"],
            ["N°1", "5,00", "Crodino, sciroppo d'arancia e top di soda"],
            ["N°2", "5,00", "Sciroppo di lampone e acqua tonica"],
            ["N°3", "5,00", "Sweet and sour e acqua tonica"],
            ["N 4", "5,00", "Succo d'ananas, sciroppo alla maracuja e top di soda"],
          ],
        },
      ],
    },
    {
      id: "bevande", titolo: "Bevande / Birre",
      gruppi: [{
        conAperitivo: "8,00",
        voci: [
          ["Coca Cola", "3,50"],
          ["Coca Cola Zero", "3,50"],
          ["Fanta", "3,50"],
          ["Sprite", "3,00"],
          ["Lemonsoda", "3,00"],
          ["Acqua tonica", "3,50"],
          ["Esta thè alla pesca", "3,00"],
          ["Estathè alla limone", "3,00"],
          ["Ginger beer", "3,50"],
          ["Red Bull", "3,50"],
          ["Chinò", "3,50"],
          ["Campari soda", "3,50"],
          ["Crodino", "3,50"],
          ["Bitter rosso", "3,00"],
          ["Succhi", "3,50", "mirtillo, pesca, pera, ace, ananas, albicocca, mela verde"],
          ["Corona", "4,00", "33 cl"],
          ["Ichnusa non filtrata", "4,00", "33 cl"],
          ["Tennet's", "4,00", "33 cl"],
          ["Ceres", "4,00", "33 cl"],
          ["Messina", "4,00", "33 cl"],
          ["Beck's", "3,50", "33 cl"],
          ["Menabrea", "4,00", "33 cl"],
          ["Heineken", "4,00", "33 cl"],
          ["Heineken", "5,00", "66 cl"],
          ["Moretti", "4,00", "66 cl"],
        ],
      }],
    },
  ],
};

/* =====================================================================
   Da qui in poi non ci sono dati. Ogni blocco produce HTML da DATI.
   strumenti/prerender.mjs scrive gli stessi blocchi dentro index.html,
   così menu, orari e telefono si leggono anche senza JavaScript
   (motori di ricerca e crawler delle IA). Se index.html non è aggiornato
   rispetto a DATI, il browser rifà i blocchi e la pagina resta giusta.
   ===================================================================== */

const SITO = (function () {
  "use strict";

  const GIORNI = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
  const DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const SETTIMANA = [1, 2, 3, 4, 5, 6, 0];

  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const dc = (t = "da confermare") => `<span class="dc">${esc(t)}</span>`;
  const fuori = (testo, href) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(testo)}</a>`;
  const maiuscola = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const impronta = (t) => { let h = 0; for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0; return String(h); };

  // "HH:MM" -> minuti dalla mezzanotte
  const minuti = (s) => { const [h, m] = s.split(":").map(Number); return h * 60 + m; };
  // Intervallo in minuti; la chiusura dopo mezzanotte va oltre 1440
  const intervallo = ([a, c]) => {
    const ia = minuti(a); let ic = minuti(c);
    if (ic <= ia) ic += 1440;
    return [ia, ic];
  };
  const giorniTesto = (g) => {
    if (g.length === 7) return "tutti i giorni";
    if (g.length > 1 && g.every((x, i) => i === 0 || x === g[i - 1] + 1)) return `dal ${GIORNI[g[0]]} al ${GIORNI[g[g.length - 1]]}`;
    return g.map((x) => GIORNI[x]).join(", ");
  };
  // "lunedì-giovedì 06:30–00:00; venerdì e sabato 06:30–00:30; domenica 09:00–22:00"
  function orariTesto() {
    const gruppi = [];
    SETTIMANA.forEach((g) => {
      const o = DATI.orari[g] ? DATI.orari[g].join("–") : "chiuso";
      const ultimo = gruppi[gruppi.length - 1];
      if (ultimo && ultimo.o === o) ultimo.g.push(g); else gruppi.push({ o, g: [g] });
    });
    return gruppi.map(({ o, g }) => {
      const nomi = g.length === 1 ? GIORNI[g[0]] : g.length === 2 ? `${GIORNI[g[0]]} e ${GIORNI[g[1]]}` : `${GIORNI[g[0]]}-${GIORNI[g[g.length - 1]]}`;
      return `${nomi} ${o}`;
    }).join("; ");
  }

  const caffetteria = () => DATI.menu.find((c) => c.id === "caffetteria");
  const prezzoDi = (nome) => (caffetteria().gruppi[0].voci.find((v) => v[0] === nome) || [])[1];

  function listino(g) {
    const titolo = g.titolo ? `<h3 class="listino__gruppo">${esc(g.titolo)}</h3>` : "";
    const nota = g.conAperitivo ? `<p class="listino__nota">Ogni voce anche con aperitivo: <strong>${esc(g.conAperitivo)} €</strong> ${dc()}</p>` : "";
    const voci = g.voci.map(([nome, prezzo, d]) =>
      `<li class="listino__voce"><span class="listino__nome">${esc(nome)}</span><span class="listino__prezzo">${esc(prezzo)}</span>${d ? `<span class="listino__desc">${esc(d)}</span>` : ""}</li>`).join("");
    return `${titolo}${nota}<ul class="listino">${voci}</ul>`;
  }

  function schedeDrink() {
    const cat = DATI.menu.filter((c) => c.id !== "caffetteria");
    const bottoni = cat.map((c) => {
      const n = c.gruppi.reduce((t, g) => t + g.voci.length, 0);
      return `<button class="schede__bottone" type="button" id="scheda-${c.id}" role="tab" aria-controls="pannello-${c.id}" data-scheda="${c.id}">${esc(c.titolo)}<small>${n}</small></button>`;
    }).join("");
    const pannelli = cat.map((c) =>
      `<div class="schede__pannello" id="pannello-${c.id}" role="tabpanel" aria-labelledby="scheda-${c.id}" tabindex="0"><h3 class="schede__titolo">${esc(c.titolo)}</h3>${c.gruppi.map(listino).join("")}</div>`).join("");
    const fonte = `<p class="listino__fonte">Fonte: ${fuori("menu digitale del locale su leggimenu.it", DATI.menuDigitale)}. Questo sito non dà indicazioni sugli allergeni: chiedi al personale.</p>`;
    return `<div class="schede__lista" role="tablist" aria-label="Categorie dei drink">${bottoni}</div>${pannelli}${fonte}`;
  }

  function foto(k) {
    const f = DATI.foto[k];
    if (!f) {
      const d = esc(DATI.fotoServe[k] || "");
      return `<div class="foto foto--manca" role="img" aria-label="Foto da inserire: ${d}"><span class="foto__etichetta">[FOTO DA INSERIRE]</span><span class="foto__desc">${d}</span></div>`;
    }
    const carica = f.subito ? `fetchpriority="high"` : `loading="lazy"`;
    return `<div class="foto"><img src="${esc(f.src)}" alt="${esc(f.alt)}" width="${f.w}" height="${f.h}" decoding="async" ${carica}></div>`;
  }

  function domande() {
    const tel = `<a href="tel:${esc(DATI.telefono.numero)}">${esc(DATI.telefono.testo)}</a>`;
    const fasce = DATI.aperitivo.map((f) => `${f.fonte}: ${f.nome.toLowerCase()} ${f.ore.join("–")}, ${giorniTesto(f.giorni)}`).join(". ");
    return [
      [`Dove si trova ${DATI.nome}?`, `${esc(DATI.nome)} è in ${esc(DATI.indirizzo)}. ${fuori("Indicazioni su Google Maps", DATI.mappa)}. Telefono ${tel} ${dc()}`],
      ["Che orari fa?", `${esc(maiuscola(orariTesto()))}. ${dc()}`],
      ["Quanto costa l'aperitivo?", `Nel menu ogni spritz, cocktail, birra e bibita ha il prezzo «con aperitivo» di 8,00 €. Cosa comprende: ${dc()}`],
      ["A che ora è l'aperitivo?", `Le fonti non coincidono. ${esc(fasce)}. ${dc()}`],
      ["Quanto costa la colazione?", `Caffè ${esc(prezzoDi("Caffè"))} €, cappuccino ${esc(prezzoDi("Cappuccino"))} €, brioche ${esc(prezzoDi("Brioches alla Crema"))} €. ${dc()}`],
      ["Si possono fare feste di laurea?", `Sì, secondo il menu digitale del locale: aperitivo di laurea con apericena a buffet o al tavolo, in sala privata. Per chiedere: telefono ${tel} o al bancone. ${dc()}`],
    ].map(([d, r]) => `<details class="domanda"><summary>${esc(d)}</summary><p>${r}</p></details>`).join("");
  }

  // Tutto ciò che vive nella pagina: nome del blocco -> HTML
  const BLOCCHI = {
    "foto-cocktail": () => foto("cocktail"),
    "foto-tagliere": () => foto("tagliere"),
    "foto-buffet": () => foto("buffet"),
    "foto-sala": () => foto("sala"),
    "aperitivo-fasce": () => DATI.aperitivo.map((f) =>
      `<li><span class="quando__ore">${f.ore.join("–")}</span><span class="quando__fonte">${esc(f.nome)}, ${giorniTesto(f.giorni)} · secondo ${esc(f.fonte)}</span></li>`).join(""),
    "tagliere": () => `${esc(maiuscola(giorniTesto(DATI.tagliere.giorni)))} · ${DATI.tagliere.ore.join("–")}`,
    "drink": schedeDrink,
    "colazione-apertura": () => {
      const feriali = [1, 2, 3, 4, 5, 6].map((g) => DATI.orari[g] && DATI.orari[g][0]);
      if (!feriali.every((x) => x && x === feriali[0]) || !DATI.orari[0]) return "";
      return `Dal lunedì al sabato si apre alle ${feriali[0]}, la domenica alle ${DATI.orari[0][0]}. ${dc()}`;
    },
    "colazione-prezzi": () => [["Caffè", "Caffè"], ["Cappuccino", "Cappuccino"], ["Brioches alla Crema", "Brioche"]].map(([nome, et]) =>
      `<li><span class="banco__nome">${esc(et)}</span><span class="banco__prezzo">${esc(prezzoDi(nome))}<small>€</small></span></li>`).join(""),
    "caffetteria": () => caffetteria().gruppi.map(listino).join(""),
    "sala": () => DATI.sala.map((t) => `<li>${esc(t)}</li>`).join(""),
    "dieci-persone": () => `«${esc(DATI.dieciPersone)}»`,
    "orari": () => SETTIMANA.map((g) => {
      const o = DATI.orari[g];
      return `<tr data-giorno="${g}"><th scope="row">${GIORNI[g]}</th><td>${o ? `${o[0]} – ${o[1]}` : "chiuso"}</td></tr>`;
    }).join(""),
    "info": () => [
      `Telefono <a href="tel:${esc(DATI.telefono.numero)}">${esc(DATI.telefono.testo)}</a> ${dc()}`,
      `${esc(DATI.accessibilita)} ${dc()}`,
      `Menu digitale del locale: ${fuori("leggimenu.it", DATI.menuDigitale)}`,
    ].map((t) => `<li>${t}</li>`).join(""),
    "domande": domande,
  };
  const tuttiIBlocchi = () => Object.keys(BLOCCHI).map((k) => BLOCCHI[k]()).join("");

  // Dati strutturati schema.org. Solo dati presenti in DATI: niente stelle,
  // niente fascia di prezzo inventata, niente orario dell'aperitivo (fonti in conflitto).
  function schema() {
    const assoluto = (p) => DATI.url + p;
    const prezzo = (p) => p.replace(",", ".");
    const a = DATI.indirizzoDettaglio;
    const fasce = SETTIMANA.filter((g) => DATI.orari[g]).map((g) => ({
      "@type": "OpeningHoursSpecification", dayOfWeek: DAY[g], opens: DATI.orari[g][0], closes: DATI.orari[g][1],
    }));
    const sezioni = DATI.menu.flatMap((c) => c.gruppi.map((g) => ({
      "@type": "MenuSection",
      name: g.titolo || c.titolo,
      hasMenuItem: g.voci.map(([name, p, description]) => ({
        "@type": "MenuItem", name, ...(description ? { description } : {}),
        offers: { "@type": "Offer", price: prezzo(p), priceCurrency: "EUR" },
      })),
    })));
    return {
      "@context": "https://schema.org",
      "@type": "BarOrPub",
      "@id": `${DATI.url}#locale`,
      name: DATI.nome,
      description: DATI.seo.descrizioneBreve,
      url: DATI.url,
      telephone: DATI.telefono.numero,
      image: Object.values(DATI.foto).filter(Boolean).map((f) => assoluto(f.src)),
      logo: DATI.logo ? assoluto(DATI.logo.src) : undefined,
      address: { "@type": "PostalAddress", streetAddress: a.via, postalCode: a.cap, addressLocality: a.citta, addressRegion: a.provincia, addressCountry: a.paese },
      geo: { "@type": "GeoCoordinates", latitude: DATI.coordinate.lat, longitude: DATI.coordinate.lng },
      hasMap: DATI.mappa,
      openingHoursSpecification: fasce,
      amenityFeature: DATI.accessibilitaSchema.map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
      hasMenu: { "@type": "Menu", name: `Menu di ${DATI.nome}`, url: `${DATI.url}#drink`, hasMenuSection: sezioni },
    };
  }

  // Contenuto di <head> scritto da strumenti/prerender.mjs
  function testa() {
    const s = DATI.seo;
    const img = DATI.url + s.immagine.src;
    const dati = JSON.stringify(schema()).replace(/</g, "\\u003c");
    return [
      `<title>${esc(s.titolo)}</title>`,
      `<meta name="description" content="${esc(s.descrizione)}">`,
      `<link rel="canonical" href="${esc(DATI.url)}">`,
      `<meta property="og:type" content="website">`,
      `<meta property="og:locale" content="it_IT">`,
      `<meta property="og:site_name" content="${esc(DATI.nome)}">`,
      `<meta property="og:title" content="${esc(s.titolo)}">`,
      `<meta property="og:description" content="${esc(s.descrizione)}">`,
      `<meta property="og:url" content="${esc(DATI.url)}">`,
      `<meta property="og:image" content="${esc(img)}">`,
      `<meta property="og:image:width" content="${s.immagine.w}">`,
      `<meta property="og:image:height" content="${s.immagine.h}">`,
      `<meta property="og:image:alt" content="${esc(s.immagine.alt)}">`,
      `<meta name="twitter:card" content="summary_large_image">`,
      `<script type="application/ld+json">${dati}</script>`,
    ].join("\n  ");
  }

  /* ---------- Solo nel browser ---------- */

  const $ = (sel, dove = document) => dove.querySelector(sel);
  const $$ = (sel, dove = document) => Array.from(dove.querySelectorAll(sel));

  // Ora di Torino, qualunque sia il fuso di chi guarda
  function adessoATorino() {
    const parti = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Rome", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const p = Object.fromEntries(parti.map((x) => [x.type, x.value]));
    const giorno = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday);
    return { giorno, min: Number(p.hour) * 60 + Number(p.minute) };
  }

  function riempiCampi() {
    $$('[data-campo="nome"]').forEach((n) => { n.textContent = DATI.nome; });
    $$('[data-campo="indirizzo"]').forEach((n) => { n.textContent = DATI.indirizzo; });
    $$('[data-campo="telefono"]').forEach((n) => { n.textContent = DATI.telefono.testo; });
    $$('[data-azione="chiama"]').forEach((a) => {
      a.href = "tel:" + DATI.telefono.numero;
      // Il nome accessibile comincia sempre col testo visibile
      if (!a.textContent.includes(DATI.telefono.testo)) a.setAttribute("aria-label", `${a.textContent.trim()}: ${DATI.telefono.testo}`);
    });
    $$('[data-azione="mappa"]').forEach((a) => {
      a.href = DATI.mappa;
      a.setAttribute("aria-label", `${a.textContent.trim()}: apre Google Maps`);
    });
    $$("[data-logo]").forEach((img) => {
      if (DATI.logo) img.src = DATI.logo.src; else img.remove();
    });
  }

  // Stato "aperto adesso" e prossima apertura
  function stato() {
    const { giorno, min } = adessoATorino();
    const ieri = (giorno + 6) % 7;
    const oggi = DATI.orari[giorno];
    const prec = DATI.orari[ieri];

    // Ancora aperti dalla sera prima (dopo mezzanotte)?
    if (prec) {
      const [, c] = intervallo(prec);
      if (c > 1440 && min < c - 1440) return { aperto: true, testo: `Aperto adesso · fino alle ${prec[1]}` };
    }
    if (oggi) {
      const [a, c] = intervallo(oggi);
      if (min >= a && min < c) return { aperto: true, testo: `Aperto adesso · fino alle ${oggi[1]}` };
      if (min < a) return { aperto: false, testo: `Chiuso · apre alle ${oggi[0]}` };
    }
    for (let i = 1; i <= 7; i++) {
      const g = (giorno + i) % 7;
      if (DATI.orari[g]) {
        const quando = i === 1 ? "domani" : GIORNI[g];
        return { aperto: false, testo: `Chiuso · apre ${quando} alle ${DATI.orari[g][0]}` };
      }
    }
    return { aperto: false, testo: "Orari non disponibili" };
  }

  function aggiornaStato() {
    const s = stato();
    $('[data-campo="stato-testo"]').textContent = s.testo;
    $('[data-campo="stato"]').classList.toggle("stato--aperto", s.aperto);
  }

  function segnaOggi() {
    const riga = $(`tr[data-giorno="${adessoATorino().giorno}"]`);
    if (riga) { riga.classList.add("oggi"); riga.setAttribute("aria-current", "date"); }
  }

  // Schede dei drink: senza JavaScript si vedono tutte le categorie, una sotto l'altra
  function schede() {
    const lista = $(".schede__lista");
    const bottoni = $$("[role=tab]", lista);
    function apri(id, fuoco) {
      bottoni.forEach((b) => {
        const si = b.dataset.scheda === id;
        b.setAttribute("aria-selected", String(si));
        b.tabIndex = si ? 0 : -1;
        $(`#pannello-${b.dataset.scheda}`).hidden = !si;
        if (si && fuoco) b.focus();
      });
    }
    lista.addEventListener("click", (e) => {
      const b = e.target.closest("[role=tab]");
      if (b) apri(b.dataset.scheda);
    });
    lista.addEventListener("keydown", (e) => {
      const i = bottoni.indexOf(document.activeElement);
      if (i < 0) return;
      let j = null;
      if (e.key === "ArrowRight") j = (i + 1) % bottoni.length;
      if (e.key === "ArrowLeft") j = (i - 1 + bottoni.length) % bottoni.length;
      if (e.key === "Home") j = 0;
      if (e.key === "End") j = bottoni.length - 1;
      if (j !== null) { e.preventDefault(); apri(bottoni[j].dataset.scheda, true); }
    });
    apri(bottoni[0].dataset.scheda);
  }

  function avvia() {
    const radice = document.documentElement;
    radice.classList.add("js");
    if (radice.dataset.impronta !== impronta(tuttiIBlocchi())) {
      $$("[data-blocco]").forEach((b) => { b.innerHTML = BLOCCHI[b.dataset.blocco](); });
    }
    riempiCampi();
    aggiornaStato();
    segnaOggi();
    schede();
    // Aggiorna "aperto adesso" ogni minuto
    setInterval(aggiornaStato, 60 * 1000);
  }

  return { BLOCCHI, tuttiIBlocchi, testa, impronta, avvia };
})();

if (typeof document !== "undefined") SITO.avvia();
else if (typeof module !== "undefined") module.exports = { DATI, SITO };
