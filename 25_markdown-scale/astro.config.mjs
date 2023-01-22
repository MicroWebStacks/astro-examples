import node from '@astrojs/node'
import { defineConfig } from 'astro/config';

const output = process.env.OUTPUT?process.env.OUTPUT:"static"

export default defineConfig({
  output: output,
  adapter: node({
    mode: 'standalone'
  })
});
