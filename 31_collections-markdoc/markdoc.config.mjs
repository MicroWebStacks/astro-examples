import { defineMarkdocConfig } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
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
})
