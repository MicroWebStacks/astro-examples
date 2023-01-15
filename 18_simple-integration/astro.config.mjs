import node from '@astrojs/node'
import { defineConfig } from 'astro/config';
import {int_test} from './src/libs/integration-test'

export default defineConfig({
  integrations: [int_test()],
  server:{
    port: 5000,
    proxy:{
      '/api':"http://localhost:4000"
    }
  }
});
