import { defineConfig } from 'astro/config';
import node from '@astrojs/node'

export default defineConfig({
    output: "server",
    server:{
      port:4000
    },
    adapter: node({
      mode: 'standalone'
    })
});
