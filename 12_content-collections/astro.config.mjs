import node from '@astrojs/node'
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import {remarkCheck} from './src/libs/remark-check'
import {int_test} from './src/libs/integration-test'

export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  markdown:{
    remarkPlugins: [
      remarkCheck
    ],
    rehypePlugins: [
    ],
    extendDefaultPlugins: true
  },
  integrations: [mdx(),int_test()],

});
