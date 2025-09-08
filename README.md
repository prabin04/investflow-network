# Investflow Network

This PR implements a deterministic, placeholder-first setup with strict validation. No fabricated content.

## How to run

- Install: `npm install`
- Dev API: `npm run dev:api` (http://localhost:8787)
- Dev web: `npm run dev` (http://localhost:8080) — proxies `/api/*` to the API
- Run both: `npm run dev:all`
- Tests: `npm test`

## OpenAPI

See `openapi.yaml` for endpoints:
- GET `/api/companies`
- GET `/api/companies/{slug}`
- POST `/api/events/{eventId}/signup`
- POST `/api/subscribe`

## Data model

Strict `Company` schema in `src/lib/schemas/company.ts` (zod). Seed at `data/companies_seed.json` includes only `capital-partners` with placeholders.

## Backend

Minimal Express server in `server/index.mjs` with strict zod validation and JSON-file persistence:
- POST `/api/events/{eventId}/signup` → stores to `data/signups.json`
- POST `/api/subscribe` → stores to `data/subscriptions.json`

External integrations are disabled by design; see Missing assets/TODOs.

## UI

- `/companies` lists companies via `CompanyCard` (accessible link, placeholders for missing fields)
- `/companies/capital-partners` company profile renders only provided fields; missing description shows `Description coming soon`
- Footer site-wide with placeholder brand blurb and newsletter subscribe form

## Tests

- Unit: Company schema validation
- API: Signup/subscribe validation
- UI: Card links to `/companies/:slug`; profile hides missing fields and shows placeholders

## Missing assets / TODOs

See `data/missing_assets.json` for full list. Highlights:
- site_brand_logo → `public/REPLACE_WITH_REAL_LOGO.svg`
- brand_blurb → `TBD`
- privacy_policy_text → `TBD`
- companies_dataset → `data/companies_seed.json`
- capital_partners_entry stub present; do not fabricate portfolio items
- events_dataset → `data/events_seed.json` (TBD)
- newsletter_config (external) → `TBD`
- contact_email → `partners@capital.example`
- social_links → []

> No real company descriptions/emails were created — placeholders used.
