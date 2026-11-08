import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(180),
      year: z.number(),
      role: z.string(),
      client: z.string().optional(),
      stack: z.array(z.string()),
      order: z.number().default(99),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      url: z.url().optional(),
      repo: z.url().optional(),
      /** Real cover image. Omit to draw one from `pattern`. */
      cover: image().optional(),
      coverAlt: z.string().optional(),
      pattern: z.enum(['grid', 'bars', 'waves', 'orbits']).default('grid'),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
