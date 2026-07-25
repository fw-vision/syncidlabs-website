# syncidlabs.com — Content Gathering Plan

> The visual-language scaffold is in place. Every page now has its conceptual frames; the gaps below are the imagery, copy, and data visualisations to gather before launch. Placeholder frames are visible on the live pages (dashed boxes labelled "Image needed" / "Data needed" / "Copy needed"). Replace them and remove the `Placeholder` component usages as real assets land.

Status legend: [ ] to gather · [~] draft exists · [x] done

---

## 1. Imagery to gather

### Hero / brand
- [ ] **Hero video loop** (`public/media/hero.mp4`): aerial land, timelapse construction, or abstract data/compute. Muted, ~15-30s, 1080p. Currently falls back to the poster still.
- [ ] **Hero poster still** (`HERO_POSTER` in `src/data/media.ts`): forested land / horizon. Placeholder = Unsplash.

### District (highest priority — civic credibility)
- [ ] **Aerial of the 89-acre Markham site** OR a commissioned massing / arcology render (21:9). The single most important image on the site.
- [ ] Innovator residency (4:3): mixed-use residential-lab block
- [ ] Labs (4:3): modern research lab interior
- [ ] Greenhouses (4:3): vertical farm / greenhouse interior
- [ ] Sovereign-compute test-bed (4:3): modular data hall / compute pods
- [ ] Battery recycling (4:3): cleantech remanufacturing facility
- [ ] Legacy CTA band image (`IMG_DISTRICT`): architectural / built form

### About
- [ ] **Francis Wang portrait** (4:5): professional headshot. Real face behind the proponent.
- [ ] **Affiliations logo wall** (21:9): Waterloo, Calgary, UofT, TMU, Quantic, Golden Gate (grayscale, permission-dependent)

### Futures
- [ ] Buildable-futures CTA band (`IMG_LAND`): aerial land / green expanse
- [ ] Optional: one image per domain (food, compute, climate, work, education, health, deep tech) if we move to an image-led grid

### Insights (currently placeholder Unsplash)
- [ ] 1 featured-article image + 5 card images. Replace `ARTICLE_IMAGES` with real post hero images as content is written.

### Partners / Contact
- [ ] Partners CTA band (`IMG_CTA`): collaboration / workspace

**Licensing note:** all current images are Unsplash placeholders (dev only). Replace with owned or licensed assets before public launch. A councillor-facing site should not run on stock.

---

## 2. Data visualisations to produce (candidates for fw-vision dataviz widgets)

- [ ] **Research headline chart** (21:9): Canadian productivity vs US, or R&D intensity vs OECD, 2000-2024. Source: Bank of Canada / StatCan.
- [ ] **District phased master-plan** (21:9): H1 / H2 / H3 build-out site map or timeline.
- [ ] **Hybrid Intelligence diagram** (4:3): humans (governance/judgment) paired with agentic scale. Pairing, not replacement.
- [ ] **CITAble assessment loop** (4:3): define → build → evaluate → co-evolve cyclical diagram. Could reuse CITEMap / index-radar widgets.

---

## 3. Copy to write

### Structure copy (EN) — drafted, needs Principal review
- [~] All EN structure pages have first-pass copy from the SyncID brand system. Review for accuracy, especially: exit figures ($70M / $650M), doctoral status wording, the 1.2M TN caveat framing.

### Copy gaps
- [ ] **Insights articles**: 6 placeholder titles exist; write the real posts (or wire a content collection). First candidate: the Canadian-gaps problem article (cross-post from findcongwang.com).
- [ ] **Contact form**: decide the mechanism (mailto vs Formspree/Basin vs booking link) and write field labels.
- [ ] **Legal**: privacy + terms are one-paragraph drafts; expand before launch.

### Translation (the deferred 20%)
- [ ] **FR native copy** for all structure pages (Quebec register, human-reviewed, not machine-draft)
- [ ] **ZH native copy** for all structure pages (Simplified, sovereignty-first, China dimension stays out of public copy)

---

## 4. Functional gaps

- [ ] **/pitch**: the dual-track Markham pitch component (deferred; stub in place)
- [ ] **Hero video**: wire real `hero.mp4` (graceful poster fallback until then)
- [ ] **Contact backend**: static site needs a form endpoint decision
- [ ] **Favicon**: `/favicon.svg` referenced but not yet created
- [ ] **Real article routing**: Insights cards currently all link to `/research`; wire to real posts

---

## 5. How the scaffold maps to the plan

Every gap above is visible on the running site as a labelled dashed frame (the `Placeholder` component, `src/components/Placeholder.astro`). This means:
- A reviewer can walk the site and see exactly what is missing and why.
- Swapping a placeholder for real content is a localized edit (replace the `<Placeholder .../>` with an `<img>` or real copy).
- Image slots are centralised in `src/data/media.ts`; updating one constant updates every use.

Reusable visual components now in place: `PageHeader`, `Ticker`, `StatCounter`, `ArticleCard`, `MediaCTA`, `Placeholder`, `Wordmark`.
