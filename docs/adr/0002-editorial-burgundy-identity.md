# ADR 0002 - Editorial burgundy identity (not SaaS, not developer)

Status: Accepted
Date: 2026-07-29

## Context

SyncID Labs must be taken seriously by a councillor and a capital partner within minutes. It positions as an ecosystem EXPERT and actualizer, explicitly NOT a real-estate developer and NOT a startup. The constellation brands (FW.VISION, CITAble, SyncID) are related-but-distinct with complementary palettes; only rendering structure is shared via `@fw-vision/web-kit`.

## Decision

Adopt an **editorial, typographic-first, institutional** visual language (Refero "Tech Barcelona" reference) with **burgundy** as the single chromatic accent (`oklch(32.09% 0.131 27.20)` light / `oklch(66.09% 0.195 37.35)` dark / on-dark), supplied to web-kit via `--wk-accent` (and `--wk-accent-on-dark` for heroes). **Space Grotesk** for display/wordmark; **Satoshi** for body. Flat surfaces, hairline borders, squared corners, generous whitespace, oversized display type. Dark hero once per page, then light canvas.

## Consequences

- No shadows, gradients, background patterns, or rounded corners (breaks editorial discipline).
- Hierarchy comes from size and whitespace, not heavy weights.
- Burgundy is used sparingly (primary CTA + rare emphasis); no competing accents.
- Visual language signals constellation kinship without being a mandated shared palette.
- Full spec: `docs/brand/DESIGN.md`. Live tokens: `src/styles/global.css`.
