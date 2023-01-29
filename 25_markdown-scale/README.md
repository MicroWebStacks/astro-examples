# 25_markdown-scale
[../25_markdown-scale](../25_markdown-scale)

* scalability stress test and limiting facrors (e.g. 15000 pages)
* markdown pages generator
    * pages markdown
    * pages mdx
    * local markdown in .astro
    * local mdx in .astro
    * remote markdown

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/25_markdown-scale)
[![open in Codesandbox](../media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/25_markdown-scale)
[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/25_markdown-scale)

# Stats

```json
{"output": "static", "count": 10000, "size": "7.95 MB", "size_bytes": 8333492, "time": "2 mn 27 s 35 ms", "time_sec": 147.0}
{"output": "server", "count": 10000, "size": "22.32 MB", "size_bytes": 23405094, "time": "1 mn 5 s 771 ms", "time_sec": 65.7}
```

# example chunk
```javascript
import { i as createVNode, F as Fragment } from './astro.e9a516fe.mjs';
import 'fs';

const html = "<h1 id=\"page-000000\">Page 000000</h1>\n<h1 id=\"title-1\">Title 1</h1>\n<p>hello title 1</p>\n<h2 id=\"subtitle-1\">Subtitle 1</h2>\n<p>hello world subtitle 1</p>\n<h1 id=\"title-2\">Title 2</h1>\n<p>this is a subtitle 2</p>\n<ul>\n<li>bullet 0</li>\n<li>bullet 1</li>\n<li>bullet 2</li>\n<li>bullet 3</li>\n<li>bullet 4</li>\n<li>bullet 5</li>\n<li>bullet 6</li>\n<li>bullet 7</li>\n<li>bullet 8</li>\n<li>bullet 9</li>\n</ul>\n<h3 id=\"subtitle-3\">Subtitle 3</h3>\n<p>hello <strong>Important text</strong></p>";

				const frontmatter = {};
				const file = "D:/Dev/MicroWebStacks/astro-examples/25_markdown-scale/local/markdown/000000.md";
				const url = undefined;
				function rawContent() {
					return "# Page 000000\r\n# Title 1\r\n\r\nhello title 1\r\n\r\n## Subtitle 1\r\n\r\nhello world subtitle 1\r\n\r\n# Title 2\r\n\r\nthis is a subtitle 2\r\n\r\n* bullet 0\r\n* bullet 1\r\n* bullet 2\r\n* bullet 3\r\n* bullet 4\r\n* bullet 5\r\n* bullet 6\r\n* bullet 7\r\n* bullet 8\r\n* bullet 9\r\n\r\n### Subtitle 3\r\n\r\nhello **Important text**\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"page-000000","text":"Page 000000"},{"depth":1,"slug":"title-1","text":"Title 1"},{"depth":2,"slug":"subtitle-1","text":"Subtitle 1"},{"depth":1,"slug":"title-2","text":"Title 2"},{"depth":3,"slug":"subtitle-3","text":"Subtitle 3"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
```