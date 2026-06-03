## Agentic AI ROI Calculator

Build as a native React route using the existing Shivaami design system (brand navy #0C4594, light #1a5ab8, accent #1b9dd8 — overriding the spec's #0B3D84 palette to stay on-brand per project memory). Add a "Agentic AI Calculator" entry to the Resources mega menu.

### Route & navigation
- New route `/agentic-ai-calculator` registered in `src/App.tsx` (lazy-loaded, route-based splitting per project rule).
- Add link in `src/components/layout/MegaMenu.tsx` (Resources panel) and `src/components/layout/MobileMenu.tsx` (Resources section). Placement: top of the Resources list, label "Agentic AI Calculator".
- New page file `src/pages/AgenticAICalculator.tsx` using `<Header />`, `<Footer />`, react-helmet-async meta (title, description, canonical) per SEO rule.

### Page structure (3-step single-page flow, no iframe)
Use shadcn `Tabs` for the 3 steps: Context → Requirements → Results. Tab triggers disabled until prerequisites met; checkmark replaces number on completed steps; scroll-to-top on tab change; no progress bar.

**Step 1 — Context card "Personalize your ROI report"**
- Industry select (8 options with multipliers)
- Primary region select (6 options with multipliers)
- FTE count (number, required, hint "Gemini Enterprise users to be covered")
- Monthly redundant AI spend USD (number, optional, generic hint — no tool names)
- "Next: Requirements →" validates required fields.

**Step 2 — Requirements & Contact**
- Work Profile: 3 RadioGroup blocks (meetings, docs/email, research) with Low/Moderate/High badges.
- Contact Details (zod validation): full name, work email (regex), company name, company website (URL), phone (optional), job title.
- Back button + primary "Show My Agentic AI Savings →" full-width.
- On submit: brief calculating overlay (spinner + 4 step labels, ~1.2s total, no per-metric sequential reveal), fire-and-forget POST to lead webhook, switch to Results tab.

**Step 3 — Results (exact order)**
1. Navy gradient header card with eyebrow, dynamic title `{company}'s Agentic AI Savings Report` (fallback "Your ROI Report for Gemini Enterprise"), subtitle mentioning Gemini Enterprise Standard at $30/user/month, and 3 KPIs (Total Annual Savings green, Payback white, 3-Year Net Value sky).
2. Key Insights card (accent left border, 4 dynamically-generated numbered sentences).
3. "Your ROI Metrics" label + 2×2 metric grid (first highlighted navy).
4. Value Breakdown horizontal bar chart (pure CSS bars — no chart library) for Productivity Gain, Tool Savings, License Investment.
5. CTA pair (navy "Discuss Your Results With a Google Cloud Expert" → Apollo URL; white "Try Gemini Enterprise Free for 30 Days" → Zoho URL). Word "call" banned in copy; use "30-min session".
6. Deeper Insights teaser (6 bullets + note).
7. Share block with `agenticaicalculator.shivaami.com` + Copy Link button (clipboard + visual confirmation).
8. Partner Badges strip using `/badges/...` absolute paths (3 badges).
9. "← Start New Assessment" resets state to Step 1.

### Calculation module
New `src/lib/agenticROI.ts` exporting pure functions:
- `SALARY_MATRIX`, `INDUSTRY_MULT`, `REGION_MULT` constants.
- `computeROI(inputs)` returning all metrics per the spec formulas exactly (hourlyRate, weeklyHoursSaved, adjustedWeeklySaved, annualProductivityValue, legacyCostsAnnual, totalAnnualGain, licenseCost, tco, netValue, roiPct, paybackMonths/days, threeYearNetValue, revenueUplift, hoursReclaimedPerPerson).
- `formatPayback(months)` → "14 days" if <1mo, else "3.2 mo".
- `generateInsights(inputs, metrics)` → 4 dynamic sentences.
Unit-testable, no React deps.

### Lead capture
- `src/lib/leadWebhook.ts` with `submitLead(payload)` doing `fetch(WEBHOOK_URL, { method:'POST', mode:'no-cors', headers:{'Content-Type':'text/plain'}, body: JSON.stringify(payload) })` wrapped in try/catch (failure must not block UI).
- **Awaiting from you:** Google Apps Script webhook URL. Until provided, the constant will be an empty string and `submitLead` will silently no-op so the UI keeps working. Same for Apollo and Zoho CTA URLs — they'll be placeholder consts at the top of the page for easy swap.
- Architecture leaves room for future email OTP (submit handler is async and centralized).

### Design tokens & responsiveness
- Use existing semantic Tailwind tokens (`bg-primary`, `text-primary`, `bg-accent`) — no hardcoded hex in JSX. Reuse shadcn `Card`, `Button`, `Input`, `Label`, `RadioGroup`, `Tabs`, `Badge`, `Select`.
- Hero card follows symmetrical padding rule (`pt-24 md:pt-32 pb-12`, mobile `pt-[120px]`).
- Inputs min 16px (already in shadcn Input).
- 2-col grids collapse to 1 on `<md`; CTA pair stacks on mobile; bar chart full width.

### Files to create / edit
Create:
- `src/pages/AgenticAICalculator.tsx`
- `src/lib/agenticROI.ts`
- `src/lib/leadWebhook.ts`

Edit:
- `src/App.tsx` — register lazy route.
- `src/components/layout/MegaMenu.tsx` — add Resources entry.
- `src/components/layout/MobileMenu.tsx` — add Resources entry.

### Open items (please confirm before/during build; sensible defaults will be used otherwise)
1. Google Apps Script webhook URL.
2. Apollo scheduling URL for the Consultation CTA (default: reuse the workspace-consultation Apollo URL already in the codebase if not provided).
3. Zoho free-trial form URL for the Free Trial CTA.
4. Exact position in Resources menu — default placement: top of the list.
