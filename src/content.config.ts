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
    order: z.number().default(0),
    features: z.array(z.object({ title: z.string(), text: z.string() })),
    // Manual de uso: cada paso lleva una captura opcional en /public/capturas/<app>/
    manual: z.array(z.object({
      title: z.string(),
      text: z.string(),
      image: z.string().optional(),
    })).default([]),
    // giscus: se rellena al publicar (ids que da giscus.app). Sin esto la sección muestra un aviso.
    feedback: z.object({ repo: z.string(), repoId: z.string(), category: z.string(), categoryId: z.string() }).optional(),
    // Futuro: sección de donativos al final de la ficha. Sin este campo no se muestra nada.
    donations: z.object({ url: z.string().url(), text: z.string().optional() }).optional(),
  }),
});

// Publicaciones de Instagram: se añaden a mano (imagen en /public/insta/, enlace al post original).
const insta = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insta' }),
  schema: z.object({
    date: z.coerce.date(),
    caption: z.string(),
    url: z.string().url(),
    image: z.string().optional(),
  }),
});

export const collections = { apps, insta };
