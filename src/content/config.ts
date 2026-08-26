import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // description doubles as the meta description AND the RSS/OG summary —
    // write it as the sentence that should show up in a Google result.
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Optional structured stats that power the "ledger rail" sidebar.
    // Leave off entirely for posts that aren't data call-outs.
    stats: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
