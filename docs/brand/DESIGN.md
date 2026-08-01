# SyncID Labs - Design Spec (syncidlabs.com)

> The design spec for the SyncID Labs website. Editorial, typographic-first, institutional, with burgundy as the single chromatic accent. Read before any UI work. Source of truth in the Perceptiosphere vault: `04_Execute/SyncIDLabs/brand/visual-identity.md`. If this conflicts with the vault, the vault wins - flag it.

## 1. Design North Star

An **editorial, research-forward, institutional presence.** It should read as laid-out (a serious journal or manifesto), not assembled (a SaaS product page). The design carries authority so a councillor or a capital partner takes SyncID seriously within minutes. This matches the voice: institutional-credible, understated, evidence-led, actualizer.

## 2. Style Reference

Primary reference: the Refero "Tech Barcelona" editorial style. Typographic-first, whisper-light single-weight type, predominantly quiet canvas, a single chromatic accent used sparingly, flat surfaces with hairline borders, generous whitespace, oversized display type.

**The key adaptation:** where Tech Barcelona uses cobalt blue, SyncID uses **burgundy**. Burgundy signals kinship with FW.VISION and CITAble (complementary, related-but-distinct constellation brands) while SyncID stands on its own. Only the rendering structure is shared (via `@fw-vision/web-kit`, colour-agnostic, driven by `--wk-accent`); colour and visual style are site-specific.

## 3. Colour System

| Role | Value | Notes |
|------|-------|-------|
| **Accent (burgundy)** | Light `oklch(32.09% 0.131 27.20)` / Dark `oklch(66.09% 0.195 37.35)` | SyncID's own accent. Supplied to web-kit via `--wk-accent`. Primary actions + rare emphasis, not decoration. |
| Ink (headlines, display) | `#0a0808` (warm near-black) | Printed rather than digital feel |
| Graphite (body, chrome) | `#33383d` | Readable copy and interface |
| Hairline | `#e4e4e2` | Thin dividers and secondary borders |
| Page canvas | `#ffffff` | Default light surface |
| Hero canvas | near-black / deep burgundy-black | The single dark opening band per page |

**Accent discipline:** burgundy is the chromatic signal; its authority comes from restraint. Use it for the primary CTA and rare emphasis. Do not scatter it. The hero band may use a deep near-black (optional burgundy undertone) rather than pure black, to warm the constellation tie. (Live tokens: `src/styles/global.css`.)

## 4. Typography

Editorial, scale-driven hierarchy (from size and whitespace, not heavy weights). Hybrid stack: constellation display mark + Tech Barcelona-friendly body.

| Role | Direction |
|------|-----------|
| Display / headings / wordmark | **Space Grotesk**; large, tight-tracked, light-to-regular weight (400–600); oversized display for hero statements |
| Body | **Satoshi** (Fontshare); Favorit-like light grotesk for white-canvas reading; generous line-height |
| Labels / metadata | Tracked-out uppercase (the `.eyebrow` class) for small labels only |

Dark surfaces use `--wk-accent-on-dark` (`oklch(66.09% 0.195 37.35)`) so burgundy stays visible on photography and ink bands.

## 5. Shape, Surface, Spacing

- **Flat.** No drop-shadows, no gradients, no background patterns. Hairline 1px borders define components.
- **Squared geometry.** 0px border-radius across buttons, cards, inputs, images.
- **Generous whitespace.** Large vertical gaps between sections; let type and data breathe.
- **Full-width editorial bands.** Dark hero once per page, then resolve to light canvas; full-bleed imagery as section punctuation (`.media-band`).

## 6. Imagery

Environmental and architectural, forward-looking and Canadian in sensibility (land, infrastructure, sovereignty), warm natural light. No lifestyle-stock people, no abstract gradients. Full-bleed, squared, used as section breaks. Data visualisations (the Insights / research content) rendered cleanly and authoritatively; the evidence must look rigorous. All current stock images are placeholders (dev only); a councillor-facing site must not launch on stock.

## 7. Motifs to Promote

1. **Hybrid Intelligence(TM):** human-AI collaboration as the method. Visualised as pairing/augmentation, not replacement.
2. **Strategic, foresight-driven innovation:** futures made buildable. Scenarios, horizons, coalitions rendered as structured and actualizable, never speculative haze.
3. **Actualization:** building, not forecasting. Concrete infrastructure (labs, greenhouses, compute test-bed) and real coalitions over abstract promise.

## 8. Voice-on-the-Page (pre-launch discipline)

- **Actualizer, present-tense, active.** "We build," "we actualize." Never "imagine / someday / could."
- **Verified data only, cited.** Bank of Canada, StatCan, CCA, US DHS. State the 1.2M TN caveat.
- **Sovereignty-first; China dimension OUT.** No China dual-campus, Panda Bond, or digital-RMB in public copy.
- **Ecosystem-expert framing.** SyncID understands Canada's ecosystems and sees unique opportunities (Waterloo emphasis); the district is the vehicle, the expertise and network are the credibility.
- **Civic leaders are the heroes gaining a legacy;** SyncID is the guide, not the sole hero.

## 9. Do and Don't

| Do | Don't |
|----|-------|
| Use burgundy sparingly as the single chromatic accent | Scatter burgundy or add competing accents |
| Keep surfaces flat with hairline borders, squared corners | Add shadows, gradients, textures, or rounded corners |
| Let oversized type and whitespace carry hierarchy | Rely on heavy/bold weights |
| Present data and research with authority (cited) | Make it look like a startup SaaS landing page |
| Warm the constellation tie (burgundy, near-black hero) | Copy Tech Barcelona's cobalt or feel generically corporate |
| Speak as an actualizer building real things | Drift into speculative onlooker or hype language |

## 10. Relationship to the Constellation

FW.VISION, CITAble, and SyncID Labs are related-but-distinct brands with complementary (not identical) palettes. What is shared is structural: the `@fw-vision/web-kit` rendering components (i18n, annotation, layout primitives), colour-agnostic and driven by each site's accent token. SyncID's editorial-institutional treatment reads as the operational, build-oriented member of the family: **FW.VISION thinks, SyncID actualizes.**
