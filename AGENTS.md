# syncidlabs-website - Agent Context

> Read by AI coding agents (Cursor, opencode, etc.) on every session. START HERE. Keep concise and current.

## What this project is

The public credibility website for **SyncID Labs**, the operational incubator entity in the FW.VISION constellation that carries the **HI-Tech Innovation District (Markham, 89 acres)** and Canada's strategic-futures actualization. SyncID Labs positions as an **ecosystem expert** (not a real-estate developer): it understands Canada's innovation ecosystems, sees unique opportunities (Waterloo emphasis), and has advisors embedded in those ecosystems, centred on founder Francis Wang.

- **Domain:** syncidlabs.com
- **Posture:** near-term goal is a reputable, credible trilingual presence to earn the Councillor Ho endorsement + Mayor Scarpitti follow-up. Government-facing and capital-facing.
- **Languages:** Canadian English (en) primary; Quebec French (fr) and Mandarin Chinese (zh) are language-native registers, not translations (the deferred 20%).

This repository is the **website implementation**. Brand and content direction are maintained separately (in the Perceptiosphere vault); do not invent brand or messaging. Work from `docs/brand/DESIGN.md`, `docs/plans/`, and the existing pages.

## Read next (in this repo)

| Doc | Purpose |
|-----|---------|
| `docs/brand/DESIGN.md` | **The design spec.** Editorial burgundy system: palette, type, colour language, components, discipline. Read before any UI work. |
| `docs/adr/` | Architecture decisions already made (static hosting, editorial-burgundy identity, trilingual structure). Do not re-litigate. |
| `docs/plans/` | Local build-spec and content plans for active work (gitignored, not published). Read the relevant one for your task: `website-content-strategy.md`, `energy-compute-innovation-arc.md`. |
| `CONTENT-PLAN.md` | Gap map: what is built vs deferred; the placeholder frames on the live pages. |

## The storyline (positioning - do not drift from this)

SyncID Labs is an **ecosystem expert**, not a developer. Three pillars:
1. **We understand the ecosystem** - critical, evidence-based analysis of Canada's innovation ecosystems.
2. **We see unique opportunities, especially in Waterloo** - Waterloo is the deep worked example (closest engagement: RT Park, Larry Smith, alumni network).
3. **Our advisors are embedded** - authority is human and networked, centred on founder Francis Wang.

The macro thesis: energy + compute + agentic AI is the substrate of all future scaled innovation (see `docs/plans/energy-compute-innovation-arc.md`).

## Verification (critical)

- **Build:** `bunx astro build` (terminates; exit 0 = compiles). **NOT `npm run build`** if the bun install layout breaks the npm shim.
- **Install:** `bun install` (requires the env var / token for the private `@fw-vision/*` packages; read by `.npmrc`).
- **Dev smoke only:** start `bunx astro dev` in a background job, wait ~9s, capture output, kill it. **NEVER leave a dev server running** - it blocks the session.
- A successful build is sufficient proof code compiles. Visual verification is manual.

## Tech stack

| Concern | Choice |
|---------|--------|
| Framework | Astro (static output) |
| Styling | Tailwind 4 via `@tailwindcss/vite` (CSS `@theme`, no JS config) |
| Private packages | `@fw-vision/web-kit` (colour-agnostic structural + i18n + annotation primitives; consumes `--wk-accent`) |
| Hosting | GitHub Pages (static; no server) |
| Package manager | bun |

## Colour language (important)

SyncID is **editorial, typographic-first, institutional** with a single chromatic accent: **burgundy**. It is a related-but-distinct constellation brand (FW.VISION thinks, SyncID actualizes); burgundy signals kinship without being a mandated shared token.

- **Accent (burgundy):** `oklch(32.09% 0.131 27.20)` (light) / `oklch(66.09% 0.195 37.35)` (dark). Supplied to web-kit via `--wk-accent`. Use for the primary CTA and rare emphasis, never decoration.
- **Ink** (headlines) warm near-black `#0a0808`; **graphite** (body) `#33383d`; **hairline** `#e4e4e2`; **canvas** `#ffffff`; hero canvas near-black (optional burgundy undertone).
- Type: Space Grotesk (display/wordmark) + Satoshi (body); hierarchy from size and whitespace, not heavy weights. Dark surfaces use `--wk-accent-on-dark`.

## Working guidelines

1. **Editorial, not SaaS.** Flat surfaces, hairline 1px borders, squared geometry (0px radius), generous whitespace, oversized display type. No shadows, gradients, or background patterns.
2. **Actualizer voice.** "We build / we actualize," present tense, active. Never speculative onlooker language ("imagine," "someday," "could"). Never startup-hype or superlatives.
3. **Verified data only.** Every proof point cites its source (Bank of Canada, StatCan, CCA, US DHS). State the 1.2M TN caveat (admissions, not unique individuals) when used.
4. **Sovereignty-first; China dimension stays OUT of public copy.** No China dual-campus, Panda Bond, or digital-RMB in any public page. Those are internal financing, vault-private.
5. **Burgundy discipline.** Single accent, used sparingly. Do not introduce competing accents.
6. **Canadian spelling; no em-dashes** (restructure the sentence).
7. **Placeholders are intentional** - `<Placeholder>` frames mark planned gaps; their notes encode the sourcing/build brief.

## CITAble business structure (context)

SyncID Labs is the operational, government-facing arm of the FW.VISION constellation. FW.VISION provides intellectual authority and CITAble governance; SyncID carries development and works with the City of Markham. Core IP (CITAble, APPETITE, Perceptiosphere, Hybrid Intelligence) is licensed to SyncID, never transferred. The self-evaluating methodology (CITAble Business Index, CBI) is what separates SyncID from a developer. See `docs/brand/DESIGN.md` and `docs/plans/website-content-strategy.md`.

## Active build work

See `docs/plans/` (local, gitignored): `website-content-strategy.md` (the ecosystem-expert storyline, Insights content plan, About/advisor story, FW.VISION reuse) and `energy-compute-innovation-arc.md` (the home-thesis narrative). Ecosystem critical-analysis content (Insights) is research-fed; verify figures before publishing.
