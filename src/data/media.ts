/**
 * Site imagery for SyncI&DLabs.
 *
 * Local assets under /public/images/ follow Style A (Canadian land &
 * infrastructure) and Style B (editorial abstraction) from
 * docs/plans/visual-system.md. Burgundy is never baked into photos.
 */

export const HERO_VIDEO = "/media/hero.mp4";
export const HERO_POSTER = "/images/hero-poster.jpg";

export const IMG_DISTRICT = "/images/district.jpg";
export const IMG_LAND = "/images/land.jpg";
export const IMG_COMPUTE = "/images/compute.jpg";
export const IMG_RESEARCH = "/images/research.jpg";
export const IMG_CTA = "/images/cta.jpg";

/** Interior split-header banners. */
export const BAN_ABOUT = "/images/banners/about.jpg";
export const BAN_RESEARCH = "/images/banners/research.jpg";
export const BAN_APPROACH = "/images/banners/approach.jpg";
export const BAN_FUTURES = "/images/banners/futures.jpg";
export const BAN_DISTRICT = "/images/banners/district.jpg";
export const BAN_INSIGHTS = "/images/banners/insights.jpg";
export const BAN_CONTACT = "/images/banners/contact.jpg";

/** Insights / featured-article card images (Style B primary). */
export const ARTICLE_IMAGES = [
  "/images/articles/gap.jpg",
  "/images/articles/talent.jpg",
  "/images/articles/district.jpg",
  "/images/articles/food.jpg",
  "/images/articles/compute.jpg",
  "/images/articles/manufacturing.jpg",
];

/** Map an insights slug (or index) to a card/cover image. */
export function articleImageFor(slug: string, index = 0): string {
  const bySlug: Record<string, string> = {
    "canadas-innovation-paradox": ARTICLE_IMAGES[0],
    "the-missing-layer-pre-commercialization": ARTICLE_IMAGES[1],
    "designing-resilient-neighbourhoods": ARTICLE_IMAGES[2],
    "data-centre-good-neighbour": ARTICLE_IMAGES[3],
    "innovation-sanctuary": ARTICLE_IMAGES[2],
    "innovation-sovereignty": ARTICLE_IMAGES[0],
    "build-to-manage": ARTICLE_IMAGES[5],
    "long-term-strategic-venture-capital": ARTICLE_IMAGES[1],
    "tripartite-ecosystem-model": ARTICLE_IMAGES[4],
  };
  return bySlug[slug] ?? ARTICLE_IMAGES[index % ARTICLE_IMAGES.length];
}
