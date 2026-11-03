/* =====================================================================
   DATI DEL LOCALE: tutto quello che si cambia sta qui.
   Fonti: docs/fonti/DATI-CLIENTE.md (Google Maps, leggimenu.it) e
   docs/fonti/MENU.md, raccolti il 03/11/2026. NIENTE è confermato dal
   locale: elenco completo dei [DA CONFERMARE] nel README.
   ===================================================================== */
const DATI = {
  nome: "On the Road",
  indirizzo: "Via Monginevro 5, 10138 Torino",

  // Google Maps (link della scheda, usato per "Come arrivare"; mai iframe)
  mappa: "https://www.google.com/maps/place/On+the+Road/@45.0653699,7.6533656,20z/data=!4m6!3m5!1s0x47886d1e3e227cb3:0x8069fa16b4f0f83b!8m2!3d45.0652934!4d7.6535334!16s%2Fg%2F1td124dt",

  // DA CONFERMARE (Maps). Una directory riporta un altro numero: vedi RAPPORTO.
  telefono: { numero: "+39011266389", testo: "011 266389" },

  // Menu digitale del locale (è il "sito web" della scheda Maps)
  menuDigitale: "https://www.leggimenu.it/menu/ontheroad-",

  // Logo: null finché non c'è un file con permesso. Poi per esempio
  // { src: "img/logo.webp", alt: "On the Road" }. Finché è null si vede il nome.
  logo: null,

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
    { fonte: "Menu digitale (leggimenu)", nome: "Formula di aperitivo", giorni: [0, 1, 2, 3, 4, 5, 6], ore: ["17:00", "20:30"] },
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

  // Foto: null = riquadro [FOTO DA INSERIRE] con la descrizione della foto che serve.
  // Per metterne una: { src: "img/nome.webp", alt: "descrizione" }.
  foto: {
    colazione: null,
    tagliere: null,
    cocktail: null,
    sala: null,
  },
  fotoServe: {
    colazione: "Il bancone la mattina, con caffè e brioches",
    tagliere: "Un tagliere dell'aperitivo",
    cocktail: "Spritz e cocktail sul tavolino",
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

/* ===================================================================== */

(function () {
  "use strict";

  const GIORNI = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
  const $ = (sel, dove = document) => dove.querySelector(sel);
  const $$ = (sel, dove = document) => Array.from(dove.querySelectorAll(sel));
  const el = (tag, cls, testo) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (testo != null) n.textContent = testo;
    return n;
  };
  const dc = () => el("span", "dc", "[DA CONFERMARE]");

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

  // Ora di Torino, qualunque sia il fuso di chi guarda
  function adessoATorino() {
    const parti = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Rome", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const p = Object.fromEntries(parti.map((x) => [x.type, x.value]));
    const giorno = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(p.weekday);
    return { giorno, min: Number(p.hour) * 60 + Number(p.minute) };
  }

  // Campi di testo semplici
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
      a.setAttribute("aria-label", "Come arrivare: apre Google Maps");
    });
    if (DATI.logo) {
      const m = $(".marchio");
      m.textContent = "";
      const img = el("img");
      img.src = DATI.logo.src; img.alt = DATI.logo.alt; img.height = 40;
      m.append(img);
    }
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
      if (c > 1440 && min < c - 1440) return { aperto: true, testo: `Aperto adesso · chiude alle ${prec[1]}` };
    }
    if (oggi) {
      const [a, c] = intervallo(oggi);
      if (min >= a && min < c) return { aperto: true, testo: `Aperto adesso · chiude alle ${oggi[1]}` };
      if (min < a) return { aperto: false, testo: `Chiuso adesso · apre alle ${oggi[0]}` };
    }
    for (let i = 1; i <= 7; i++) {
      const g = (giorno + i) % 7;
      if (DATI.orari[g]) {
        const quando = i === 1 ? "domani" : GIORNI[g];
        return { aperto: false, testo: `Chiuso adesso · apre ${quando} alle ${DATI.orari[g][0]}` };
      }
    }
    return { aperto: false, testo: "Orari non disponibili" };
  }

  // Striscia della giornata: dalle 6:00 all'1:00
  function giornata(giorno, min) {
    const INIZIO = 6 * 60, FINE = 25 * 60, TOT = FINE - INIZIO;
    const pos = (m) => `${Math.max(0, Math.min(100, ((m - INIZIO) / TOT) * 100))}%`;
    const larg = ([a, c]) => `${Math.max(0, ((Math.min(c, FINE) - Math.max(a, INIZIO)) / TOT) * 100)}%`;
    const box = $('[data-campo="giornata"]');
    box.textContent = "";

    const righe = [];
    if (DATI.orari[giorno]) righe.push({ etichetta: "Aperto", int: intervallo(DATI.orari[giorno]), cls: "aperto" });
    DATI.aperitivo.forEach((f) => {
      if (f.giorni.includes(giorno)) righe.push({ etichetta: `${f.nome} · ${f.fonte.replace("Menu digitale (leggimenu)", "leggimenu")}`, int: intervallo(f.ore), cls: "dubbio" });
    });
    if (DATI.tagliere.giorni.includes(giorno)) righe.push({ etichetta: "Tagliere + drink · leggimenu", int: intervallo(DATI.tagliere.ore), cls: "tagliere" });

    righe.forEach((r) => {
      const riga = el("div", "giornata__riga");
      riga.append(el("span", "giornata__etichetta", r.etichetta));
      const pista = el("div", "giornata__pista");
      const barra = el("span", `giornata__barra giornata__barra--${r.cls}`);
      barra.style.left = pos(r.int[0]);
      barra.style.width = larg(r.int);
      pista.append(barra);
      riga.append(pista);
      box.append(riga);
    });

    const scala = el("div", "giornata__scala");
    [6, 9, 12, 15, 18, 21, 24].forEach((h) => {
      const t = el("span", null, h === 24 ? "0" : String(h));
      t.style.left = pos(h * 60);
      scala.append(t);
    });
    box.append(scala);

    // Segno "adesso" (dopo mezzanotte conta come 24:xx)
    const m = min < INIZIO ? min + 1440 : min;
    if (m >= INIZIO && m <= FINE) {
      const ora = el("span", "giornata__adesso");
      ora.style.left = pos(m);
      ora.append(el("span", null, "adesso"));
      box.append(ora);
    }
  }

  function prima() {
    const { giorno, min } = adessoATorino();
    $('[data-campo="oggi-giorno"]').textContent = GIORNI[giorno];
    const o = DATI.orari[giorno];
    $('[data-campo="oggi-ore"]').textContent = o ? `${o[0]} – ${o[1]}` : "Chiuso";
    const s = stato();
    const st = $('[data-campo="stato"]');
    st.textContent = s.testo;
    st.classList.toggle("stato--aperto", s.aperto);
    giornata(giorno, min);
  }

  function colazione() {
    const voce = (nome) => DATI.menu[0].gruppi[0].voci.find((v) => v[0] === nome);
    const ul = $('[data-campo="colazione-prezzi"]');
    [["Caffè", "Caffè"], ["Cappuccino", "Cappuccino"], ["Brioches alla Crema", "Brioche"]].forEach(([nome, et]) => {
      const v = voce(nome);
      if (!v) return;
      const li = el("li");
      li.append(el("span", null, et), el("span", "mono", `${v[1]} €`));
      ul.append(li);
    });
    // Apertura del mattino dai dati orari
    const feriali = [1, 2, 3, 4, 5, 6].map((g) => DATI.orari[g] && DATI.orari[g][0]);
    const p = $('[data-campo="colazione-apertura"]');
    if (feriali.every((x) => x && x === feriali[0]) && DATI.orari[0]) {
      p.textContent = `Dal lunedì al sabato apre alle ${feriali[0]}, la domenica alle ${DATI.orari[0][0]}. `;
      p.append(dc());
    }
  }

  function aperitivo() {
    const dl = $('[data-campo="aperitivo-fasce"]');
    DATI.aperitivo.forEach((f) => {
      const d = el("div");
      d.append(el("dt", null, f.fonte));
      const dd = el("dd", null, `${f.nome}: `);
      dd.append(el("span", "ora", `${f.ore[0]}–${f.ore[1]}`), `, ${giorniTesto(f.giorni)}`);
      d.append(dd);
      dl.append(d);
    });
    const t = DATI.tagliere;
    $('[data-campo="tagliere"]').textContent = `${giorniTesto(t.giorni).replace(/^./, (c) => c.toUpperCase())}, ${t.ore[0]}–${t.ore[1]}.`;
  }

  // Menu a schede (senza JS il menu rimanda al menu digitale)
  function menu() {
    const box = $('[data-campo="menu"]');
    box.textContent = "";
    const lista = el("div", "schede__lista");
    lista.setAttribute("role", "tablist");
    lista.setAttribute("aria-label", "Categorie del menu");
    box.append(lista);

    const bottoni = [];
    DATI.menu.forEach((cat, i) => {
      const b = el("button", "schede__bottone", cat.titolo);
      b.type = "button";
      b.id = `scheda-${cat.id}`;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-controls", `pannello-${cat.id}`);
      b.dataset.scheda = cat.id;
      lista.append(b);
      bottoni.push(b);

      const pan = el("div", "schede__pannello");
      pan.id = `pannello-${cat.id}`;
      pan.setAttribute("role", "tabpanel");
      pan.setAttribute("aria-labelledby", b.id);
      pan.tabIndex = 0;

      cat.gruppi.forEach((g) => {
        if (g.titolo) pan.append(el("h3", "listino__gruppo", g.titolo));
        if (g.conAperitivo) {
          const n = el("p", "listino__nota", `Ogni voce anche "con aperitivo": ${g.conAperitivo} €. `);
          n.append(dc());
          pan.append(n);
        }
        const ul = el("ul", "listino");
        g.voci.forEach(([nome, prezzo, nota]) => {
          const li = el("li", "listino__voce");
          li.append(el("span", "listino__nome", nome));
          li.append(el("span", "listino__punti"));
          li.append(el("span", "listino__prezzo mono", prezzo));
          if (nota) li.append(el("span", "listino__desc", nota));
          ul.append(li);
        });
        pan.append(ul);
      });
      box.append(pan);
    });

    const fonte = el("p", "listino__fonte");
    fonte.append("Fonte: ");
    const a = el("a", null, "menu digitale del locale su leggimenu.it");
    a.href = DATI.menuDigitale; a.target = "_blank"; a.rel = "noopener";
    fonte.append(a);
    box.append(fonte);

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
    // Collegamenti "vedi nel menu" da altre sezioni
    $$("[data-apri-scheda]").forEach((l) => {
      l.addEventListener("click", () => apri(l.dataset.apriScheda));
    });
    apri(DATI.menu[0].id);
  }

  function lauree() {
    const ul = $('[data-campo="sala"]');
    DATI.sala.forEach((t) => ul.append(el("li", null, t)));
    $('[data-campo="dieci-persone"]').textContent = `«${DATI.dieciPersone}»`;
  }

  function dove() {
    const tb = $('[data-campo="orari"]');
    const { giorno } = adessoATorino();
    [1, 2, 3, 4, 5, 6, 0].forEach((g) => {
      const tr = el("tr");
      if (g === giorno) { tr.className = "oggi"; tr.setAttribute("aria-current", "date"); }
      const th = el("th", null, GIORNI[g]);
      th.scope = "row";
      const o = DATI.orari[g];
      tr.append(th, el("td", "mono", o ? `${o[0]} – ${o[1]}` : "chiuso"));
      tb.append(tr);
    });

    const info = $('[data-campo="info"]');
    const li1 = el("li");
    li1.append(`${DATI.accessibilita} `, dc());
    const li2 = el("li");
    li2.append("Menu digitale del locale: ");
    const a = el("a", null, "leggimenu.it");
    a.href = DATI.menuDigitale; a.target = "_blank"; a.rel = "noopener";
    li2.append(a);
    const li3 = el("li");
    li3.append(`Telefono ${DATI.telefono.testo} `, dc());
    info.append(li3, li1, li2);
  }

  function foto() {
    $$("[data-foto]").forEach((box) => {
      const k = box.dataset.foto;
      const f = DATI.foto[k];
      box.textContent = "";
      if (f) {
        box.className = "foto";
        const img = el("img");
        img.src = f.src; img.alt = f.alt; img.loading = "lazy"; img.decoding = "async";
        box.append(img);
      } else {
        box.className = "foto foto--manca";
        box.setAttribute("role", "img");
        box.setAttribute("aria-label", `Foto da inserire: ${DATI.fotoServe[k]}`);
        box.append(el("span", "foto__etichetta", "[FOTO DA INSERIRE]"), el("span", "foto__desc", DATI.fotoServe[k]));
      }
    });
  }

  riempiCampi();
  prima();
  colazione();
  aperitivo();
  menu();
  lauree();
  dove();
  foto();
  // Aggiorna "aperto adesso" e il segno sulla striscia ogni minuto
  setInterval(prima, 60 * 1000);
})();
