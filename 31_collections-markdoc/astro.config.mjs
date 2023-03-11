import node from '@astrojs/node'
import markdoc from '@astrojs/markdoc';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [markdoc({
    tags: {
      h1: {
        render: 'H1',
        attributes: {
          type: { type: String },
        }
      },
    },
    nodes: {
      heading: {
        render: 'Heading',
        attributes: {
          level: { type: String },
        }
      },
    },
  })]
});
