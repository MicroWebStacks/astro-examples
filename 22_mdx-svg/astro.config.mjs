import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    markdown:{
        syntaxHighlight: false,
        remarkPlugins: [
        ],
        rehypePlugins: [
        ],
        extendDefaultPlugins: false
      },
        integrations: [mdx()]
});
