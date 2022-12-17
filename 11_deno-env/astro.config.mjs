import { defineConfig } from 'astro/config';
import deno from "@astrojs/deno";

export default defineConfig({
  output: "server",
  server: {
    port: 3000,
    host: true
  },
  adapter: deno({
    port: 3000
  })
});
