# On the Road: decisioni

Ogni scelta con il suo motivo. Riferimenti: `STUDIO.md` (§ numerati), `docs/fonti/`.

## D1. Le 4 immagini incollate in chat non vanno nel sito
**Scelta:** salvate in `img-da-verificare/` (esclusa da git), catalogate in STUDIO.md §1, non usate. Nel sito: riquadri "[FOTO DA INSERIRE]" e nome in testo al posto del logo.
**Motivo:** il messaggio dice "Foto in img-originali/ (per ora nessuna). Solo quelle: niente immagini da Maps o da internet" e "Logo non disponibile". Le immagini allegate contraddicono il testo e hanno l'aspetto di file scaricati dal web (webp, 241-681 px, nessun EXIF). Se vengono da Maps, usarle viola la regola sulle foto; se invece sono di Alessandro, basta spostarle in `img-originali/` e cambiare una riga in `js/main.js` (vedi README). Sbagliare per prudenza costa cinque minuti; sbagliare nell'altro senso mette nel sito foto di terzi.
**Uso consentito che ne faccio:** campionare i colori del logo (STUDIO §2). I colori di un marchio sono un fatto sull'identità del locale, non una riproduzione del logo. Il nome non viene disegnato come insegna al neon né chiuso in un cerchio: sarebbe ridisegnare il logo.

## D2. Repository e deploy solo dopo l'ok (aggiornato: fatti il 03/11/2026)
**Scelta:** repository git locale in `C:\Users\aless\Personal\ontheroad`, commit a fine fase. Nessuna repo in `siti-web-torino`, nessun push, nessun deploy.
**Motivo:** CLAUDE.md ha due regole in tensione: il flusso "crea la repo dal template e fai il deploy" e la regola non negoziabile "nessun push, nessuna pubblicazione… senza il suo ok". "Lavora da solo fino alla fine" non è un ok esplicito a pubblicare, e il cliente è solo potenziale. Alessandro ha detto sì e ha scelto la repo pubblica, come le altre dell'organizzazione: `siti-web-torino/on-the-road-torino` creata da `template-vetrina`, storia locale unita al commit del template (README del sito tenuto), progetto Vercel collegato alla repo, deploy di produzione da `main`.

## D3. Il numero di telefono alternativo trovato in una directory non si usa
Una directory associa a via Monginevro 5 un altro numero (STUDIO §6). Regola omonimi: non lo attribuisco al locale. Nel sito c'è solo 011 266389 (Maps), [DA CONFERMARE]. La discrepanza è in RAPPORTO.

## Direzioni visive

### A. "Insegna di notte"
- **Concetto:** il sito è il bar dopo il tramonto: fondo quasi nero, scritte rosa e ciano come il logo, tutto centrato su spritz e cocktail.
- **Palette:** fondo `#120810` (prugna-nero del logo), testo `#f4ecf1`, accento primario rosa `#f378c4`, secondario ciano `#aae1ee`, dettaglio giallo `#d1b838`.
- **Font:** Bricolage Grotesque in larghezza piena e peso 800 per i titoli (curve morbide, vicino al tratto arrotondato del logo senza copiarlo) + IBM Plex Mono per prezzi.
- **Foto e logo:** foto dei drink a tutta larghezza (quando ci saranno); logo assente, nome in testo.
- **Dettaglio memorabile:** i prezzi si "accendono" al passaggio come tubi al neon.
- **Rischio principale:** cancella la metà mattutina del locale (apertura 6:30, 30 voci di caffetteria) e senza foto il nero diventa un vuoto. Il rosa luminoso su nero tende all'effetto discoteca, fuori tono per un bar di quartiere.
- **Giustificazione:** logo (`chat-1`), orari serali fino alle 00:30, argomenti recensioni "aperitivo" e "cocktail".

### B. "La giornata del bar" (scelta)
- **Concetto:** la pagina scorre come una giornata: in alto è mattina (fondo chiaro, colazione al banco), scendendo arriva l'aperitivo, in fondo è sera (fondo scuro, rosa e ciano del logo, feste di laurea).
- **Palette:** mattina fondo latte `#f6f1ea`, testo caffè `#2a1a14`; sera fondo `#170a14`, testo `#f6eef3`; rosa `#c2367f` su chiaro (contrasto AA) e `#f378c4` su scuro; ciano `#1f6f80` su chiaro e `#aae1ee` su scuro; giallo `#d1b838` solo come segno grafico.
- **Font:** Bricolage Grotesque (titoli in larghezza condensata 75-85, che ricorda le lettere adesive di un listino da bancone; testo a larghezza piena) + IBM Plex Mono per orari e prezzi, allineati come uno scontrino.
- **Foto e logo:** riquadri foto dichiarati "[FOTO DA INSERIRE]" con didascalia che dice quale foto serve (non un rettangolo grigio anonimo). Logo assente, nome in testo.
- **Dettaglio memorabile:** nella prima schermata una **striscia della giornata** dalle 6:00 all'1:00 con il segno "adesso", l'orario di oggi e le due fasce aperitivo in conflitto (Maps e leggimenu) disegnate tratteggiate con l'etichetta [DA CONFERMARE].
- **Rischio principale:** il passaggio chiaro→scuro può sembrare un difetto se fatto male; troppa informazione nella prima schermata.
- **Giustificazione:** orari (`DATI-CLIENTE.md` §Orari: 6:30-00:30), menu (`MENU.md`: caffetteria + spritz + cocktail), proposta da spingere indicata da Alessandro (colazione, aperitivo, cocktail, lauree), criteri 1, 2, 7 di STUDIO §6.

### C. "Cartello stradale"
- **Concetto:** gioca sul nome: segnaletica stradale, cartelli verdi, sezioni come uscite autostradali ("Uscita 1: Colazione").
- **Palette:** verde segnaletica `#0b6e4f`, bianco, giallo cantiere `#f2c230`, nero asfalto.
- **Font:** Overpass (OFL, ispirato alla segnaletica americana) + Plex Mono.
- **Foto e logo:** frecce e cartelli al posto delle foto.
- **Dettaglio memorabile:** "Come arrivare" come cartello con freccia e distanza.
- **Rischio principale:** il tema strada non è nel materiale: il logo è un'insegna al neon con due calici, non un cartello. È un concetto inventato sul nome, quindi una storia che il locale non racconta. Sembrerebbe un template a tema.
- **Giustificazione:** solo il nome. Troppo poco.

### Scelta: B
B è l'unica che tiene insieme le due metà vere del locale, il bar delle 6:30 e quello delle 00:30, entrambe documentate (orari e menu). Usa i colori del logo dove il logo appartiene (la sera) senza imitarne la forma. Si regge anche senza foto, perché la striscia della giornata e il listino portano il peso visivo. A scarta la mattina; C si inventa un'identità.

## D4. Contenuto delle sezioni
- **Ordine:** prima schermata (nome, che posto è, oggi aperto?, indirizzo, Come arrivare, Chiama) → Colazione al banco → Aperitivo → Spritz e cocktail (menu a schede) → Feste di laurea → Dove e quando → nota "sito dimostrativo".
- **Niente "Chi siamo":** non c'è storia né nomi (`DATI-CLIENTE.md` §Cosa NON sappiamo). Sezione omessa.
- **Menu:** tutte e 4 le categorie con prezzi della fonte. Tutte le voci restano come scritte (refusi compresi), con un riquadro [DA CONFERMARE] in testa al menu. "Con aperitivo 8,00" mostrato come prezzo, mai spiegato.
- **Happy hour / aperitivo:** le due fasce mostrate una accanto all'altra con la fonte, nessuna scelta.
- **Lauree:** due blocchi separati ("Sala privata" e "Aperitivo per dieci persone", quest'ultimo con la frase citata testualmente) e una riga che dice che non è chiaro se siano la stessa offerta.
- **Tagliere + drink:** solo giorni e ore (lun-mer 17:00-20:30); contenuto e prezzo "[DA CONFERMARE]".
- **Allergeni:** una riga che rimanda al personale del locale; nessuna indicazione.
- **Accessibilità:** ingresso e bagno accessibili in sedia a rotelle (Maps), [DA CONFERMARE]. È un dato utile e non è un'etichetta di identità come quelle escluse.
- **Etichette "di proprietà di donne" e "LGBTQ+ friendly":** escluse, come chiesto.
- **Stelle e recensioni:** escluse.
- **Azioni:** Chiama (`tel:`) e Come arrivare (link Maps dei dati). Niente prenotazione online: non esiste. Per le lauree: "passa al bancone o chiama", che è quanto dice la fonte ("dal menu digitale o passando in locale"); il link al menu digitale leggimenu c'è, come fonte del locale.
- **"Aperto adesso":** calcolato in JS dagli orari Maps, sempre accompagnato da "[DA CONFERMARE]". Orari dopo mezzanotte gestiti (venerdì 06:30-00:30 vale anche per sabato alle 00:15).
