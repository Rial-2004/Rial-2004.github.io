// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Provisional: cambiar cuando se cree el repo <usuario>.github.io
  site: 'https://rial-2004.github.io',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
