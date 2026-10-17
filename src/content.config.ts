import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    // Repo público y Release donde está la APK (los repos privados no sirven descargas). La CI de la app publica ahí
    // `version.json` (para mostrar la versión y el tamaño) y una copia `<apkFile>` con nombre fijo para el botón.
    releasesRepo: z.string().optional(),
    releaseTag: z.string().default('latest'),
    apkFile: z.string().default('app.apk'),
    icon: z.string().optional(),
    minAndroid: z.string(),
    order: z.number().default(0),
    features: z.array(z.object({ title: z.string(), text: z.string() })),
    // Manual de uso por casos de uso (ver components/ManualCasos.astro). Capturas en /public/capturas/<app>/.
    manual: z.array(z.object({
      categoria: z.enum(['entrenar', 'rutinas', 'progreso', 'comunidad', 'perfil', 'widgets', 'actualizar']),
      title: z.string(),
      summary: z.string(),
      steps: z.array(z.string()).default([]),
      images: z.array(z.string()).default([]),
      note: z.string().optional(),
    })).default([]),
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
