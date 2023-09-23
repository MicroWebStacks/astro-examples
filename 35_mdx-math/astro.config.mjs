import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import {remarkLayoutCheck} from './remark/remark-layout-check'
import {rehypeCheck} from './remark/rehype-check'
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
    markdown:{
        syntaxHighlight: false,
        remarkPlugins: [
          remarkMath,
          remarkLayoutCheck
        ],
        rehypePlugins: [
          rehypeKatex,
          rehypeCheck
        ],
        extendDefaultPlugins: false
      },
        integrations: [mdx()]
});
