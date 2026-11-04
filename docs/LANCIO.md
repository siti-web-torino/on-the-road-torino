# Lancio: come aprire il sito a Google e alle IA

Oggi il sito è chiuso di proposito: `noindex` nella pagina e `Disallow: /` in `robots.txt`.
Tutto il resto è pronto. Si apre solo dopo che il locale ha confermato i dati e dato l'ok: i dati strutturati non possono portare l'etichetta [da confermare], quindi un orario sbagliato finirebbe su Google come se fosse vero.

## Prima
1. Il locale conferma i punti del README (orari, telefono, aperitivo, prezzi, lauree) e l'uso di foto e logo.
2. Si decide il dominio. Se arriva un dominio proprio, si collega su Vercel e si cambia `url` in `DATI`.

## Modifiche
3. In `js/main.js`, `DATI`: correggi i dati confermati, togli "Sito dimostrativo." da `seo.descrizione`, lascia una sola voce in `aperitivo`.
4. In `index.html`: togli la riga `<meta name="robots" ...>`, il paragrafo `class="avviso"`, la frase "Sito dimostrativo non ufficiale..." nel piè di pagina, la frase "Le due fonti pubbliche non coincidono", le etichette `dc` dei dati confermati.
5. In `js/main.js`: togli le `dc()` dei dati confermati.
6. `robots.txt` diventa così (con il dominio definitivo):

   ```
   User-agent: *
   Allow: /

   Sitemap: https://on-the-road-torino.vercel.app/sitemap.xml
   ```

   Così passano Googlebot, Bingbot e i crawler delle IA (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended).
7. Lancia `node strumenti/prerender.mjs`, fai commit e push.

## Dopo
8. Prova il link nel [Rich Results Test](https://search.google.com/test/rich-results) e nel [validatore schema.org](https://validator.schema.org/). Oggi non si può fare: `robots.txt` blocca il test.
9. Registra il sito in Google Search Console e Bing Webmaster Tools, invia `sitemap.xml`. Servono gli accessi del proprietario del dominio.
10. Scheda Google Maps: il locale (o chi la gestisce) mette questo sito nel campo "sito web". Per un bar di quartiere è il passo che conta di più.
11. Nome, indirizzo e telefono devono essere identici su sito, Maps, leggimenu e social.
12. Anteprima dei link: incolla il link su WhatsApp e controlla foto e titolo.
