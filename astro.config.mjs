// @ts-check
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://frankuxui.github.io',
  base: '/widgets-components-tailwind-v4',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
})
