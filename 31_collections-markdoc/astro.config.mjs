import markdoc from '@astrojs/markdoc';
import { defineConfig } from 'astro/config';

const tags = {
  h1: {
    render: 'H1',
    attributes: {
      type: { type: String },
    }
  },
}

const nodes = {
  heading: {
    render: 'Heading',
    attributes: {
      level: { type: String },
    }
  },
}

export default defineConfig({
  integrations: [
    markdoc({
      nodes
    })
  ]
});
