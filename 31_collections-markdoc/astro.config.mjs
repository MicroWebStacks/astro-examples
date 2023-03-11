import markdoc from '@astrojs/markdoc';
import { defineConfig } from 'astro/config';

const options = {
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
  pageExtensions: ['md', 'mdoc', 'mdo']
}

export default defineConfig({
  integrations: [
    markdoc(options)
  ]
});
