# Verifica

Fatta il 03/11/2026 sul server locale (`python -m http.server 8765`), Chrome headless.
Screenshot in `docs/anteprime/` (prima schermata e pagina intera a 390, 768, 1280 px), presi un martedì pomeriggio: la striscia "oggi" e lo stato "aperto adesso" cambiano con l'ora.

## Controlli tecnici
| Controllo | Esito |
|---|---|
| Errori in console, file 404 | Nessuno (script `strumenti/anteprime.mjs`) |
| Scorrimento orizzontale | Nessuno: larghezza documento = viewport a 390, 768, 1280 |
| Font | Bricolage Grotesque e IBM Plex Mono caricati dal progetto, nessun CDN |
| iframe | Nessuno. "Come arrivare" = link alla scheda Maps |
| `noindex` e `robots.txt` | Presenti, sito chiuso ai motori |
| Tastiera | Ordine: salta al contenuto → nome → sezioni. Focus visibile (contorno ciano 3 px). Schede del menu con frecce, Home, End |
| Nome accessibile dei pulsanti "Chiama" | Inizia sempre col testo visibile (corretto: prima "Chiama per la sala" veniva letto "Chiama 011 266389") |
| Testi alternativi | Nessuna immagine; i riquadri foto hanno `role="img"` e un'etichetta che dice quale foto manca |
| Contrasto | Tutte le coppie ≥ 4,5:1. Corretto: occhiello ciano su fondo crosta era 4,29:1, ora 5,96:1 |
| Bersagli touch | ≥ 44 px (pulsanti 48, barra fissa 56, schede e voci di navigazione 44) |
| Orari dopo mezzanotte | Provati sabato 00:15 (aperto, chiude 00:30), domenica 00:15 (aperto dal sabato), domenica 22:30 (chiuso, apre domani 06:30), martedì 00:10 (chiuso). Corretti |
| `prefers-reduced-motion` | Scorrimento morbido disattivato |

## Test dei 5 secondi (390 px, prima schermata)
Un estraneo vede: nome, "Bar e caffetteria · Torino", via Monginevro 5, cosa offre (colazione, spritz e cocktail, sala per lauree), "Come arrivare" e "Chiama", e in fondo allo schermo lo stato "Aperto adesso · chiude alle 00:00". Funziona. Le barre della giornata sono sotto la piega a 390 px.

## Scenario: venerdì sera, telefono, per strada
- È aperto? Prima schermata, senza tocchi. Il dato però viene da Maps e non è confermato: **se gli orari sono sbagliati il sito dice "aperto" a un locale chiuso**. È il primo dato da far confermare.
- Dov'è? Indirizzo nella prima schermata; "Come arrivare" sempre nella barra fissa in basso: 1 tocco.
- Cosa si beve? "Menu" nella navigazione → scheda Spritz: 2 tocchi.
- Quanto costa l'aperitivo? 8,00 € è scritto, ma cosa include no: il cliente vero questa domanda la farà, e il sito non può rispondere.

## Difetti che restano (non risolti, con il motivo)
1. **Identità debole senza foto né logo** (tutte le larghezze). Gli unici legami col locale vero sono i colori del logo e la logica degli orari. Con i riquadri "[FOTO DA INSERIRE]" il sito sembra un cantiere ben ordinato, non ancora il locale. Non si risolve col codice: servono le foto (D1).
2. **Prima schermata a 1280 px senza immagine**: il nome grande regge, ma a destra c'è solo lo scontrino. Quando arriveranno le foto, la foto del bancone o di un drink va nella prima schermata.
3. **Caffetteria lunga da telefono**: 30 voci ≈ 2.000 px a 390 px prima di arrivare alle lauree. Mitigato dalla navigazione in alto e dalla barra fissa. Le categorie a scomparsa avrebbero nascosto i prezzi: scelta consapevole.
4. **Striscia della giornata densa**: 4 barre, due tratteggiate. Io la leggo; un estraneo potrebbe non capire subito perché ci sono due fasce aperitivo. È un'ipotesi: va fatta vedere a 2-3 persone vere. Quando il locale conferma l'orario, una fascia sparisce e il problema si riduce.
5. **A 768 px "Aperto adesso · chiude alle 00:00" va a capo** nello scontrino. Leggibile, non elegante.
6. **Navigazione a 390 px tagliata a destra** ("Orari…"): voluto, fa capire che si scorre, ma l'ultima voce non è visibile senza scorrere. Orari e indirizzo restano raggiungibili dalla barra fissa ("Come arrivare") e scorrendo.
7. **Molti riquadri [DA CONFERMARE]** (circa 15). Giusti per una demo; nel sito finale vanno tolti man mano che il locale conferma.

## Testi
- Nessuna frase inventata attribuita al locale. L'unica citazione è quella dei "dieci persone", copiata dalla fonte.
- Nessun testo da brochure ("atmosfera unica", "il cuore del quartiere"): i testi sono informativi. Il rischio opposto è un sito asciutto; senza slogan del locale non c'è materiale per fare altrimenti senza inventare.
- Nomi del menu lasciati come nella fonte, refusi compresi ("MOJTO", "Bioches", "Tennet's"): a chi lo guarda sembreranno errori del sito. Da far correggere al locale (README).

## Identità: sembra il locale o un template?
Oggi: un buon template con i dati veri del locale. La parte specifica (la giornata dalle 6:30 alle 00:30, colazione e spritz nella stessa pagina, lauree con i numeri veri) c'è; la parte visiva del locale no, perché non ci sono foto utilizzabili.
