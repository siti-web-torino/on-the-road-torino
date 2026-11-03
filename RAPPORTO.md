# On the Road: rapporto

03/11/2026. Cliente potenziale: nessun contatto, nessun incarico.

## Cosa è pronto
- One-page in `C:\Users\aless\Personal\ontheroad`, repository git locale con un commit per fase. Direzione "La giornata del bar": la pagina va dalla colazione delle 6:30 (fondo chiaro) alla sera (fondo scuro, rosa e ciano del logo).
- Prima schermata: nome, tipo, indirizzo, Come arrivare, Chiama, orario di oggi, "aperto adesso" calcolato sull'ora di Torino e una striscia della giornata con le due fasce aperitivo in conflitto.
- Colazione, Aperitivo, Menu completo a schede (4 categorie, prezzi della fonte), Feste di laurea (due offerte separate), Orari e indirizzo.
- Verifica in `docs/VERIFICA.md`: niente errori, niente 404, niente scorrimento orizzontale, contrasto AA, tastiera ok. Screenshot in `docs/anteprime/`.

## Cosa controllare per primo
1. **Le 4 immagini in chat non sono nel sito.** Il messaggio diceva "img-originali: per ora nessuna" e "logo non disponibile", ma in chat c'erano un logo e tre foto con l'aspetto di file presi dal web (webp, bassa risoluzione, niente EXIF). Le ho tenute fuori (`img-da-verificare/`, esclusa da git). Se sono tue o del locale con permesso, si inseriscono in cinque minuti (README, "Foto"). Due hanno parti di persone ai bordi, non riconoscibili.
2. **Orari**: il sito dice "aperto adesso" usando gli orari di Maps, non confermati. Se sono sbagliati, il sito sbaglia proprio la cosa che la gente cerca per prima.
3. **Telefono**: una directory riporta per via Monginevro 5 un numero diverso (011 3825192) e una ragione sociale senza il nome "On the Road". Può essere un dato vecchio. Nel sito c'è solo il numero di Maps.
4. **Niente repository GitHub né deploy.** CLAUDE.md chiede la repo in `siti-web-torino` e il deploy su Vercel, ma vieta anche push e pubblicazione senza il tuo ok. Quando dici sì: repo `on-the-road-torino` dal template, push, import su Vercel.

## Cosa non si sa
Orario vero dell'aperitivo, cosa include l'aperitivo da 8 €, contenuto e prezzo del tagliere, se le due offerte di laurea da 100 € sono la stessa, capienza e aspetto della sala, storia, titolari, social, WhatsApp, modo di prenotare, tavolini esterni, allergeni, pagamenti. Elenco completo dei punti da far confermare nel README.

## Limiti di questo lavoro
L'IA conosce gli schemi che funzionano per i siti dei bar, ma non misura la clientela reale di questo locale: chi ci va la mattina, chi la sera, chi organizza le lauree. Il risultato va fatto vedere a 2-3 persone vere (e al cliente) prima di considerarlo giusto. In particolare: la striscia della giornata con due fasce aperitivo si capisce al primo sguardo?

Senza foto il sito è ordinato ma non ha ancora la faccia del locale. È il limite più grosso, e non si supera col codice.

Il contatto con i gestori e la proposta commerciale restano a te.
