
## Goal
Pull the homepage from the `gemini-sales-sync` (Revenue Intelligence Engine) project and mount it in this Shivaami site at a new route `/sales-sync`. Self-contained — does not touch existing pages, header, footer, or routes.

## What I'll do

### 1. Copy assets
Copy the 3 referenced images from the source project's `src/assets/` into this project's `src/assets/sales-sync/`:
- `hero-office-new.jpg`
- `shivaami-logo.png`
- `google-cloud-logo.png`

(Other unused hero variants in the source project are skipped.)

### 2. Create the page
Add `src/pages/SalesSync.tsx` — a port of the source `src/routes/index.tsx`, with these adjustments since this project uses React Router + Vite (not TanStack Router/Start):
- Remove `createFileRoute` / `Route` export — make it a default-exported React component.
- Replace TanStack `head()` meta with `react-helmet-async` `<Helmet>` (title, description, OG tags, canonical `https://www.shivaami.com/sales-sync`, Inter font link) — matches the SEO pattern already used by other pages in this project.
- Keep all sections intact: Header (custom, scoped to this page), Hero, BlindSpots, KnowledgeBase, TeamBenefits, ShivaamiPillars, AboutShivaami, LeadForm, Footer (custom, scoped to this page).
- Keep the source's standalone Header/Footer — this page is a self-contained landing page and intentionally does NOT use the site's global Header/Footer (same pattern the source used).
- Update image imports to the new `src/assets/sales-sync/...` paths.
- Inline the 3 brand CSS variables (`--brand-navy: #0C4594`, `--brand-blue: #38B6FF`, `--brand-red: #e2231a`) on the page's root `<div>` via `style={{...}}` so the existing `bg-[color:var(--brand-navy)]` etc. classes work without polluting `src/index.css` or affecting other pages.
- Keep the external Zoho form URL and all copy as-is.

### 3. Register the route
In `src/App.tsx`:
- Add `const SalesSync = lazy(() => import("./pages/SalesSync"));`
- Add `<Route path="/sales-sync" element={<SalesSync />} />` above the catch-all.

### 4. SEO
- Add `https://www.shivaami.com/sales-sync` entry to `public/sitemap.xml`.

## Notes
- Path will be `/sales-sync` as suggested in the request.
- Page uses brand navy `#0C4594` which already matches this project's primary brand color (per project memory), so it visually fits.
- No changes to global header, footer, navigation menus, or any existing page.
