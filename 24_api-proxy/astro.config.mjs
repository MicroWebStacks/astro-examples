import { defineConfig } from 'astro/config';
import {int_test} from './src/libs/integration-test.js'

export default defineConfig({
  server:{
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000'
    }
},
  integrations: [int_test()],
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'
        }
      }
    },
    server: {
      port:5000,
      proxy: {
        '/api': 'http://localhost:4000'
      }
    }
  }
});
