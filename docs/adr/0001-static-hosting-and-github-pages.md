# ADR 0001 - Static hosting on GitHub Pages

Status: Accepted
Date: 2026-07-29

## Context

syncidlabs.com is a credibility and content site (government-facing, capital-facing, founder-facing), not an application. It has no authenticated features and no server-side state. The FW.VISION constellation standardises on Astro static output + GitHub Pages, consuming private `@fw-vision/*` packages.

## Decision

Host as a static Astro build on GitHub Pages. No server runtime. Contact is handled by a static-friendly mechanism (mailto or a first-party form endpoint decided at build time), not a server. Build with `bunx astro build`; deploy via GitHub Actions (bun-based), consistent with the daicompute-website pattern.

## Consequences

- No live/dynamic data on the site; verified national statistics and cited content only.
- Any form submission needs a static-compatible decision (mailto, or a first-party endpoint), not a third-party processor by default.
- Matches the constellation deploy pattern, so tooling and CI are shared.
