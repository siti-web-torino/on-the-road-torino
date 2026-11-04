# Verifica

Seconda versione ("Insegna accesa", DECISIONI D6), 03/11/2026. Server locale e Chrome headless.
Screenshot in `docs/anteprime/` (prima schermata e pagina intera a 390, 768, 1280 px), presi un martedì pomeriggio: lo stato "aperto adesso" e il giorno evidenziato negli orari cambiano con l'ora.

## Controlli tecnici
| Controllo | Esito |
|---|---|
| Errori in console, file 404 | Nessuno (`strumenti/anteprime.mjs`) |
| Scorrimento orizzontale | Nessuno a 390, 768, 1280 |
| Font | Bricolage Grotesque e IBM Plex Mono dal progetto, nessun CDN |
| iframe | Nessuno. "Come arrivare" = link alla scheda Maps |
| `noindex` e `robots.txt` | Presenti |
| Tastiera | Salta al contenuto → nome → sezioni → Chiama. Focus visibile (ciano su scuro, verde petrolio sulla sezione chiara). Schede dei drink con frecce, Home, End. Tendina della caffetteria con Invio |
| Nomi accessibili | I pulsanti cominciano col testo visibile ("Chiama per la sala: 011 266389", "Come arrivare: apre Google Maps") |
| Testi alternativi | Logo nel titolo: "On the Road, Bar & Cafe". Logo in testata e piè di pagina: decorativo (alt vuoto, il nome è già scritto accanto). Foto: descrizione di cosa si vede |
| Contrasto | Tutte le coppie ≥ 5:1 (testo secondario su prugna 9,6:1; rosa su nero 7,9:1; rosa scuro su latte 5,5:1; ciano scuro su latte 5,1:1) |
| Bersagli touch | ≥ 44 px |
| Orari dopo mezzanotte | Stessa logica della prima versione, già provata (sabato 00:15 → aperto fino alle 00:30) |
| Persone nelle foto | Ritagliate: nessuna parte di persona visibile nel sito |

## Test dei 5 secondi (390 px, prima schermata)
Si vedono l'insegna del locale, "Bar e caffetteria · Via Monginevro 5", cosa offre, "Aperto adesso · fino alle 00:00", Come arrivare, Chiama e la barra fissa in basso. Le foto cominciano subito sotto la piega. Funziona meglio della prima versione: si capisce subito che posto è dal logo vero, non da un nome in testo.

## Scenario: venerdì sera, telefono, per strada
- È aperto? Prima schermata, nessun tocco (dato Maps, da confermare).
- Dov'è? "Come arrivare" sempre in basso: 1 tocco.
- Quanto costa l'aperitivo? Seconda sezione, "8 €" in grande: 1 tocco su "Aperitivo" o uno scorrimento.
- Cosa si beve? "Drink" → scheda: 2 tocchi.

## Difetti che restano
1. **Foto piccole** (lato lungo 565-673 px). A 1280 px la foto dei cocktail è mostrata a circa 490 px: regge su uno schermo normale, è morbida su uno schermo retina. Servono originali più grandi dal locale.
2. **Logo a 241 px**: nella prima schermata non lo mostro oltre 220 px per non sgranarlo. Un file più grande permetterebbe un'insegna più presente.
3. **A 390 px lo stato va su due righe** ("[da confermare]" sotto). Leggibile; sparisce quando gli orari sono confermati e si toglie l'etichetta.
4. **Navigazione a 390 px**: si vedono Aperitivo, Drink e metà di Colazione; il resto si scorre (sfumatura a destra). Orari restano raggiungibili dalla barra fissa.
5. **Mancano foto di colazione, interno e sala privata.** La colazione si regge sui prezzi grandi; la sala privata ha un riquadro [FOTO DA INSERIRE].
6. **Nome dei drink nelle foto**: nessuna didascalia, perché i drink fotografati non corrispondono a voci del menu.
7. **Circa 15 etichette [da confermare]**: giuste per una demo, da togliere man mano che il locale conferma.

## Testi
Nessuna frase inventata attribuita al locale; l'unica citazione è quella dei "dieci persone". La frase della prima schermata ("Colazione al banco, aperitivo, spritz e cocktail. E una sala privata per le feste di laurea.") descrive solo cose presenti nelle fonti.

## Identità
Ora sembra il locale: insegna vera, colori presi dall'insegna, foto del suo cibo e dei suoi drink. Il punto debole è l'interno: nessuno sa ancora com'è fatto il bar dentro.

## SEO e GEO (04/11/2026, sul sito pubblicato, commit a70f9d5)
Lighthouse 12, simulazione telefono: prestazioni 97, accessibilità 100, buone pratiche 100, SEO 69. LCP 2,5 s, CLS 0,001, TBT 0 ms.
- Il 69 dipende da un solo controllo fallito, `is-crawlable`: è il `noindex` voluto. Gli altri controlli SEO passano.
- HTML ricevuto senza eseguire JavaScript: 27 controlli su 27 passati (menu, orari, telefono, link Maps e `tel:`, JSON-LD `BarOrPub` con 7 giorni e 90 voci, un solo `h1`, canonical, Open Graph, nessuna stella).
- Con JavaScript disattivato il sito resta usabile: categorie dei drink una sotto l'altra. Se `index.html` è vecchio rispetto a `DATI`, il browser rifà i blocchi (provato).
- `RAPPORTO.md`, `CLAUDE.md`, `docs/` e `img-originali/` danno 404 sul sito.

Non provato: Rich Results Test e indicizzazione reale (bloccati da `robots.txt` finché il sito è chiuso), comparsa nelle risposte delle IA. L'efficacia della GEO non si può misurare prima dell'apertura.
