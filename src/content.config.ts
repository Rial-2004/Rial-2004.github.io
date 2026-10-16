import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    // Repo público de Releases donde está la APK (los repos privados no sirven descargas)
    releasesRepo: z.string().optional(),
    apkPrefix: z.string(),
    minAndroid: z.string(),
    features: z.array(z.object({ title: z.string(), text: z.string() })),
    order: z.number().default(0),
  }),
});

export const collections = { apps };
