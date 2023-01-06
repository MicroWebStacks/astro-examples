import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import image from "@astrojs/image";

export default defineConfig({
    output: "server",
    adapter: node({
      mode: 'standalone'
    }),
    integrations: [image()]
  });
