import node from '@astrojs/node'
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "server",
  server:{
    port:4000
  },
  adapter: node({
    mode: 'standalone'
  })
});
