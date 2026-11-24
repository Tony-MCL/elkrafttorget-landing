# ElKraftTorget – presentasjonsside

Frittstående statisk landingsside for [ElKraftTorget.no](https://elkrafttorget.no).

- Åpningsdato: **4. januar 2027**.
- Annonsetyper: **Til salgs** og **Ønskes kjøpt**.
- **Gratis publisering i introduksjonsperioden**, ikke permanent gratis tjeneste.
- Kontakt: **elkrafttorget@morningcoffeelabs.no**.
- Ingen egen backend, kjøp eller brukerregistrering. Besøk telles anonymt i MCL Analytics gjennom Firestore.

## Bilder
Filen `assets/hero.webp` er bakgrunnsbildet til toppseksjonen. Denne filen må lastes opp separat (CSS har en gradient som reserve inntil den finnes).

## Lokal testing
Åpne `index.html` i en nettleser. Ingen installasjon eller bygging kreves.

## Cloudflare Pages
1. Velg **Workers & Pages → Create → Pages → Connect to Git**.
2. Velg GitHub-repoet `Tony-MCL/elkrafttorget-landing` og produksjonsgren `main`.
3. **Framework preset:** None.
4. **Build command:** La stå tomt.
5. **Build output directory:** `/` (repository root).
6. Deploy til en midlertidig `pages.dev`-adresse, kontroller resultatet og legg deretter til `elkrafttorget.no` og eventuelt `www.elkrafttorget.no` under **Custom domains**.

Hold den eksisterende webappens Cloudflare Pages-prosjekt og utviklingsadresse uendret. Når webappen skal lanseres, kan domenet flyttes over til den.

Nedtellingen er satt til **00:00 norsk tid 4. januar 2027** i `script.js`. Endre tidspunktet dersom et konkret klokkeslett besluttes.

## Midlertidig besøksstatistikk

`analytics.js` registrerer én sidevisning per innlasting i Firestore-prosjektet `mcl-website-8fcca`, dokument `siteAnalytics/elkrafttorget-landing`. Landingssiden vises som en egen rad i adminpanelet på `morningcoffeelabs.no/admin`. Statistikken er separat fra MCLs ElKraftTorget-produktside og fra den fremtidige webappen.

**Viktig ved utrulling:** Før måling kan fungere, må Firestore-reglene for MCL-nettsiden oppdateres med ID-en `elkrafttorget-landing`. Regelutkastet ligger i `Tony-MCL/mcl-website/docs/site-analytics-firestore-rules.txt`. Å endre denne tekstfilen publiserer ikke Firestore-reglene automatisk. Se til at begge nettstedene er publisert og regelendringen er distribuert.

Ingen innloggings- eller brukerdata sendes fra landingssiden. Målingen lagrer bare aggregerte tellerverdier og tidsstempler.
