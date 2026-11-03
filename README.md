# On the Road: sito dimostrativo

One-page per On the Road, bar e caffetteria in Via Monginevro 5, Torino. **Demo non ufficiale**: il locale non è stato contattato, nessun dato è confermato.

## Dove sta
- Repository: https://github.com/siti-web-torino/on-the-road-torino (pubblica, creata da `template-vetrina`)
- Sito: https://on-the-road-torino.vercel.app/ (progetto Vercel `on-the-road-torino`, team Coste). Ogni push su `main` fa un nuovo deploy di produzione.
- Il link si apre senza login, ma il sito resta fuori dai motori di ricerca (`noindex` e `robots.txt`).

HTML, CSS e JavaScript puri, nessuna build. Per vederlo in locale:

```bash
python -m http.server 8765
```

poi http://localhost:8765/.

## Struttura
- `index.html`: la pagina
- `css/style.css`: stile; colori, scala tipografica e spaziature come variabili in `:root`
- `js/main.js`: **tutti i dati** nell'oggetto `DATI` in cima, poi il codice che li mette nella pagina
- `fonts/`: Bricolage Grotesque e IBM Plex Mono (licenza OFL, file `OFL-*.txt`)
- `img/`: vuota, qui vanno le foto ottimizzate
- `docs/fonti/`: i dati di partenza (DATI-CLIENTE.md, MENU.md)
- `docs/anteprime/`, `docs/VERIFICA.md`: screenshot e verifica
- `STUDIO.md`, `DECISIONI.md`, `RAPPORTO.md`: studio, scelte, stato

## Come si cambiano i contenuti
Tutto in `js/main.js`, oggetto `DATI`.

- **Orari**: `orari`, chiave 0 = domenica … 6 = sabato, `null` = chiuso. Una chiusura prima dell'apertura (es. `"00:30"`) vale come "dopo mezzanotte". "Aperto adesso" e la striscia della giornata si aggiornano da soli.
- **Aperitivo**: `aperitivo` ha due voci (Maps e leggimenu) perché le fonti non coincidono. Quando il locale dice l'orario giusto, lascia una sola voce e cambia `fonte` in "Il locale". Se resta una voce sola, va tolto anche il testo "Le due fonti dicono cose diverse" in `index.html` (sezione Aperitivo e nota dello scontrino).
- **Tagliere + drink**: `tagliere` (giorni e ore).
- **Lauree**: `sala` (elenco) e `dieciPersone` (frase della fonte, non riscriverla).
- **Menu**: `menu`, una categoria per scheda. Ogni voce è `["Nome", "prezzo", "nota facoltativa"]`. `conAperitivo` mostra la riga "con aperitivo" per tutto il gruppo.
- **Foto**: metti l'originale in `img-originali/`, crea la versione ottimizzata in `img/` (WebP, lato lungo massimo 1600 px, senza EXIF), poi in `foto` sostituisci `null` con `{ src: "img/nome.webp", alt: "descrizione" }`. Il riquadro "[FOTO DA INSERIRE]" sparisce da solo.
- **Logo**: in `logo` sostituisci `null` con `{ src: "img/logo.webp", alt: "On the Road" }`. Il logo si usa com'è.
- **Riquadri [DA CONFERMARE]**: quelli fissi sono in `index.html` (cerca `class="dc"`), quelli generati in `js/main.js` (cerca `dc()`). Togli ciascuno solo quando il locale ha confermato il dato accanto.

## Le 4 immagini arrivate in chat
Sono in `img-da-verificare/` (fuori da git): logo al neon, tagliere, buffet, cocktail. Non sono nel sito perché non è chiaro da dove vengano (vedi DECISIONI.md, D1). Se sono foto del locale date con permesso: spostale in `img-originali/` e segui "Foto" e "Logo" qui sopra. Tagliere e cocktail hanno parti di persone non riconoscibili ai bordi: meglio ritagliarle.

## Elenco dei [DA CONFERMARE]
Da chiedere al locale, in ordine di importanza:

1. **Orari di apertura** (Maps): lun-gio 06:30-00:00, ven-sab 06:30-00:30, dom 09:00-22:00. Il sito dice "aperto adesso" su questa base.
2. **Orario dell'aperitivo**: Maps dice happy hour 16:00-23:30, leggimenu dice 17:00-20:30. Quale vale?
3. **Telefono**: 011 266389 (Maps). Una directory online riporta per lo stesso indirizzo 011 3825192: quale è giusto?
4. **Cosa comprende l'aperitivo da 8,00 €**.
5. **Tagliere + drink** (lun-mer 17:00-20:30): cosa c'è dentro e quanto costa.
6. **Lauree**: i "100 euro per dieci persone con due bottiglie di Prosecco" e l'"acconto di 100 €" per la sala sono la stessa offerta o due diverse? Capienza della sala? Si può avere una foto?
7. **Lauree, sala privata**: musica e luci incluse per 3 ore, 50 € l'ora in più, decorazioni d'accordo con lo staff, taglio torta 1,50 € a persona. Tutto ancora valido?
8. **Menu**: tutti i prezzi. In particolare Moretti 66 cl a 4,00 € (la Heineken 66 cl è 5,00 €), "Ogni aggiunta 0,50 €" (aggiunta di cosa?), prezzi degli altri gin nel Gin Lemon, se gli analcolici hanno anche il prezzo "con aperitivo".
9. **Nomi del menu con refusi**: "Bioches", "MOJTO", "Tennet's", "ace" nei succhi, "N 4". Come li vogliono scritti?
10. **Accessibilità** (Maps): ingresso e bagno accessibili in sedia a rotelle.
11. **Colazione "al banco"**: il menu dà il prezzo base e quello "servizio al tavolo"; il sito presenta il prezzo base come prezzo al banco.
12. **Foto e logo**: servono quelle del locale, con permesso.

Non usati di proposito: stelle e recensioni, etichette Maps "Di proprietà di donne" e "LGBTQ+ friendly" (solo con conferma esplicita del locale), allergeni (il sito rimanda al personale).
