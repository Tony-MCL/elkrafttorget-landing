# ElKraftTorget – presentasjonsside

Frittstående statisk landingsside for [ElKraftTorget.no](https://elkrafttorget.no).

- Åpningsdato: **4. januar 2027**.
- Annonsetyper: **Til salgs** og **Ønskes kjøpt**.
- **Gratis publisering i introduksjonsperioden**, ikke permanent gratis tjeneste.
- Kontakt: **elkrafttorget@morningcoffeelabs.no**.
- Ingen Firebase, backend, kjøp eller brukerregistrering.

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
