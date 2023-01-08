import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import {remarkPUMLObj} from './remark/remark-plantuml-object'
import {remarkPUMLSvg} from './remark/remark-plantuml-svg'
import {remarkCheck} from './remark/remark-check'
import {rehypeCheck} from './remark/rehype-check'
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"

// https://astro.build/config
export default defineConfig({
    markdown:{
        syntaxHighlight: false,
        remarkPlugins: [
          remarkPUMLObj,
          remarkPUMLSvg,
          remarkMath,
          //remarkCheck
        ],
        rehypePlugins: [
          rehypeMathjax,
          //rehypeCheck
        ],
        extendDefaultPlugins: false
      },
        integrations: [mdx()]
});
