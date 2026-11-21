# Breaking Brisbane: website

Static Next.js (App Router) site for Jamie's weekend breaking classes, Brisbane north side.
Live: https://jamieparknz.github.io/breaking-brisbane/

Stack: Next.js 16 (`output: "export"`), Tailwind CSS v4, shadcn/ui (Radix), Framer Motion, react-hook-form + zod, lucide icons.
Fonts: Anton (headlines) + Geist (everything else). Palette: ink `#09090b`, paper `#f3f3f0`, cypher yellow `#ffd60a`.

## Fill in the placeholders

Every fact lives in **`src/content/site.ts`**. Any value still in `[SQUARE_BRACKETS]` shows on the site as a dashed "TBC" chip.
Replace the whole string, brackets included.

| Key | What to put | Shown in |
|---|---|---|
| `years` `[YEARS]` | Years breaking, e.g. `"12"` | About Jamie |
| `crew` `[CREW]` | Crew name(s) | About Jamie |
| `bio` `[BIO]` | One or two sentences: battles, teaching history | About Jamie (hidden until filled) |
| `venue` `[VENUE]` | e.g. `"Zillmere Hall"` (candidates: Zillmere Hall, Everton Park SHS sports hall) | Hero, timetable |
| `venueAddress` `[VENUE_ADDRESS]` | Street address | (reserved, add to timetable/JSON-LD when known) |
| `dayTime` `[DAY_TIME]` | e.g. `"Saturday mornings"` | Hero, timetable |
| `termDates` `[TERM_DATES]` | e.g. `"20 Jan to 21 Mar"` | Timetable |
| `formEndpoint` `[FORM_ENDPOINT]` | Formspree URL (formspree.io, free plan) e.g. `https://formspree.io/f/abcd1234` | Register form. Until set, submitting shows "Registrations open soon" and sends nothing |
| `instagram` `[INSTAGRAM]` | Handle without @ | Footer |
| `groups[].time` `[TIME_KIDS_6_10]` `[TIME_KIDS_11_15]` `[TIME_ADULTS]` | e.g. `"9:00am"` | Timetable |
| `groups[].cap` `[CAP]` | Class size cap (not shown yet) | reserved |
| `pricing` `[PRICE_CASUAL]` `[PRICE_TERM]` | e.g. `"$18"`, `"$140"` | Pricing cards. Term note mentions term length/sibling discount "to be confirmed": edit the `note` text |
| `blueCardHeld` / `insuranceInPlace` / `firstAidCurrent` | Set `true` only once actually held | Safety section |
| `brand` | Working name "Breaking Brisbane"; change once the business name is registered | Header, footer, metadata |

"First class: Free" comes from the launch plan; change `pricing[0].price` if that changes.
Do not claim the Blue Card in copy until it is issued. Kids classes are described as starting once Blue Card and insurance are in place.

FAQ text: `src/content/faq.ts`.

## Edit and preview

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint
npm run build        # static site in ./out (uses webpack; Turbopack build hung on this machine)
```

## Redeploy

Push to `main`. The GitHub Actions workflow (`.github/workflows/deploy.yml`) lints, builds and publishes `out/` to GitHub Pages.
If the repo is renamed, change `repo` in `next.config.ts` (it sets `basePath`) and `site.url`.

## Screenshots

`screens/` has desktop (1440) and mobile (390) captures of every section, the form error state and the mobile menu.
