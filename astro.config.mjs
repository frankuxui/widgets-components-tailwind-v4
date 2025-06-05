// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://widgets-components-tailwind-v4.vercel.app',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  integrations: [sitemap()],
})