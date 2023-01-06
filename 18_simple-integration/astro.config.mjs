import node from '@astrojs/node'
import { defineConfig } from 'astro/config';
import {int_test} from './src/libs/integration-test'

export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [int_test()]
});
