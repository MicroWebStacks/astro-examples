import node from '@astrojs/node'
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "server",
  experimental: { 
    prerender: true 
  },
  adapter: node({
    mode: 'standalone'
  })
});
