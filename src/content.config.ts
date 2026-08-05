import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      volume: z.string().optional(),
      eventDate: z.string().optional(),
      summary: z.string(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      archiveLabel: z.string().optional(),
      status: z.enum(['upcoming', 'archived']).default('archived'),
    }),
});

export const collections = { events };
