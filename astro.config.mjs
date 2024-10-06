import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    build: {
      rollupOptions: {
        input: {
          _redirects: './_redirects',
        },
      },
    },
    ssr: {
      noExternal: ['glightbox'],
    },
  },
});