// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: 'compile',
  }),
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: process.argv.includes("build") ? {
        "react-dom/server": "react-dom/server.edge",
      } : undefined,
    },
  }
});