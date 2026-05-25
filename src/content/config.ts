import { defineCollection, z } from 'astro:content';

const lang = z.enum(['en', 'ko']);
const tag = z.string().min(1);

const writing = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      lang,
      summary: z.string().min(10).max(280),
      tags: z.array(tag).default([]),
      series: z.string().optional(),          // e.g. magazine slug ('svc-analysis') or brunchbook slug
      source: z.enum(['brunch', 'nia', 'dbr', 'linkedin', 'original']),
      externalUrl: z.string().url().optional(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }).refine((d) => d.source === 'original' || !!d.externalUrl, {
      message: 'Non-original writing requires externalUrl',
      path: ['externalUrl'],
    }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string().optional(),
      role: z.string().optional(),
      period: z.object({
        start: z.coerce.date(),
        end: z.coerce.date().optional(),
      }),
      lang,
      summary: z.string(),
      outcomes: z.array(z.string()).default([]),
      stack: z.array(z.string()).optional(),
      tags: z.array(tag).default([]),
      confidential: z.boolean().default(false),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .optional(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const companies = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),                // e.g. "Google", "Banksalad"
      role: z.string(),                // e.g. "VP of Engineering"
      period: z.object({
        start: z.coerce.date(),
        end: z.coerce.date().optional(),
      }),
      lang,
      summary: z.string().optional(),  // one-line summary shown in list
      order: z.number().optional(),    // sort hint; newer = higher
      tags: z.array(tag).default([]),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .optional(),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const talks = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      venue: z.string(),
      event: z.string(),
      lang,
      audience: z.string().optional(),
      sizeEstimate: z.number().int().positive().optional(),
      format: z.enum([
        'keynote',
        'panel',
        'workshop',
        'interview',
        'podcast',
        'lecture',
      ]),
      links: z
        .array(z.object({ label: z.string(), url: z.string().url() }))
        .optional(),
      thumbnail: image().optional(),
      tags: z.array(tag).default([]),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const series = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    titles: z.object({
      en: z.string(),
      ko: z.string(),
    }),
    descriptions: z.object({
      en: z.string().optional(),
      ko: z.string().optional(),
    }).default({}),
    order: z.number().default(100), // fallback display order; primary sort is featured + latest article date
    featured: z.boolean().default(false),
    status: z.enum(['ongoing', 'completed']).default('ongoing'),
    category: z.object({
      ko: z.string(),
      en: z.string(),
    }).optional(),
  }),
});

// Standalone art portfolio for Hyunhwa Jung — lives under /hyunhwa with its own
// layout, independent of the main (person-first) site. English-primary.
const artworks = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.union([z.number(), z.string()]).optional(), // 2025 or "2024–25"
      medium: z.string().optional(),                       // e.g. "Oil on canvas"
      dimensions: z.string().optional(),                   // e.g. "60 × 90 cm"
      image: image(),                                      // clean crop — used on index + detail
      installImage: image().optional(),                    // original "as exhibited" photo
      exhibition: z.string().optional(),                   // e.g. "AAPI Multimedia Art Exhibition, 2024"
      series: z.string().optional(),                       // optional grouping for later
      order: z.number().optional(),                        // manual sort; lower shows first
      featured: z.boolean().default(false),                // surfaced first on the index
      caption: z.string().optional(),                      // short one-liner under the work
      placeholder: z.boolean().default(false),             // demo entry; remove once real art lands
      draft: z.boolean().default(false),
    }),
});

export const collections = { writing, projects, companies, talks, series, artworks };
