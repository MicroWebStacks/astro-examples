import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import storyblok from '@storyblok/astro';
import { config } from './config.js';

export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    storyblok({
      accessToken: config.token,
      components: {
        microcontroller: 'storyblok/Microcontroller'
      },
      apiOptions: {
        cache: { clear: "auto", type: "memory" },
      },
      useCustomApi: false,
    })
  ]
});
