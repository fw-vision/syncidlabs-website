import { defineCollection, z } from "astro:content";

/**
 * Insights articles collection.
 *
 * Holds SyncI&DLabs Insights pieces authored in MDX so they can use the
 * @fw-vision/web-kit annotation components (MarginNote, FootNote, InlineNote,
 * RoughAnnotation). Two provenance kinds:
 *  - "cross-post": adapted from findcongwang.com (personal blog is canonical).
 *  - "syncid-native": originated here (SyncID is canonical), later adapted to the blog.
 *
 * Brand rule: annotations use color="burgundy" to hold the single-accent
 * editorial discipline. See src/styles/global.css and the visual-identity spec.
 * Verified figures only; unverifiable ecosystem rankings/dollar-values stay out.
 */
const insights = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Provenance: where the canonical version lives. */
    kind: z.enum(["cross-post", "syncid-native"]).default("syncid-native"),
    /** If cross-posted, the canonical personal-blog URL. */
    canonicalUrl: z.string().url().optional(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    /** Ordering / feature control. */
    order: z.number().default(0),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    /** Short deck shown on the Insights index card. */
    summary: z.string().optional(),
    /** Optional cover / card image path (overrides media.ts mapping). */
    image: z.string().optional(),
  }),
});

export const collections = { insights };
