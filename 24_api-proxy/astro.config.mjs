import node from '@astrojs/node'
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'
        }
      }
    },
    server: {
      proxy: {
        '/api': 'http://localhost:4000'
      }
    }
  }
});
