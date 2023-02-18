showcase examples for isolated simple usage patterns


# 01_basics
[./01_basics](./01_basics)

This is a minimal example that shows the node version running

<img src="./media/01_basics.png" width="400">

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/01_basics)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/01_basics)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/01_basics)



# 02_ssr-counter
[./02_ssr-counter](./02_ssr-counter)

* adapter : node-standalone

shared global var demo. reload the page to increment the counter. All pages share the same counter

<img src="./media/02_ssr-counter.drawio.svg" width="500">

<img src="./media/02_ssr-counter.png" width="400">



[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)


# 02_ssr-counter-netlify
[./02_ssr-counter-netlify](./02_ssr-counter-netlify)

* adapter : netlify

shared global var demo. reload the page to increment the counter. All pages share the same counter

* live demo on netlify : https://astro-ssr-counters.netlify.app/

# 02_ssr-counter-cloudflare
[./02_ssr-counter-cloudflare](./02_ssr-counter-cloudflare)

* adapter : cloudflare

shared global var demo. reload the page to increment the counter. All pages share the same counter

* live demo on cloudflare : https://astro-examples-ssr-counter.pages.dev/

# 02_ssr-counter-vercel
[./02_ssr-counter-vercel](./02_ssr-counter-vercel)

* adapter : vercel

shared global var demo. reload the page to increment the counter. All pages share the same counter

* live demo in vercel : https://astro-ssr-counters.vercel.app/

# 02_ssr-counter-denodeploy
[./02_ssr-counter-denodeploy](./02_ssr-counter-denodeploy)

* adapter : deno

shared global var demo. reload the page to increment the counter. All pages share the same counter

.env not taken has to manually inject env var `DENO_DEPLOY_TOKEN`

* live demo in deno deploy : https://astro-ssr-counters.deno.dev

# 03_sse-counter
[./03_sse-counter](./03_sse-counter)

* adapter : node-standalone

SSE: Server Sent Events. global var using a timer and Emitter

Server keeps couter state. reloading the page has no effect on the counter

requires Node18 Node18 for ReadableStream(), currently only on Gitpod

<img src="./media/03_sse-counter.drawio.svg" width="700">

<img src="./media/03_sse-counter.png" width="400">

[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/03_sse-counter)

# 04_client-counters

[./04_client-counters](./04_client-counters)

A simple approach for multiple instances of a component. A `<script>` is included once. It initiates all components of a class on page load without requiring unique identification

<img src="./media/04_client-counters.png" width="400">

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/04_client-counters)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/04_client-counters)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/04_client-counters)




# 05_client-uid-counters
[./05_client-uid-counters](./05_client-uid-counters)

Decentralized scoping js execution on an Astro component used mutiple times on the same page

Constraints :
* decentralized : not conflicting with multiple integrations using the same concept
* no global state management : which is not easy to fulfill when using components from different sources
* multi instances used on the same page
* components handle their own js scripts
* each component has a lifecylce independence and its js only handles its own html and not one of other instances

Alternatives:
* It is always possible to initialize all components from the top page js, but sometimes the js component code is preferrably placed within the component itself.
* It is also possible within the component to have the code run on all components in the page of the same type, but this does not fit with lazy loading where each component has to be initialize separately
* It is still possible to keep a component state in the window or as html attribute and still run init on all components everytime a new one wakes up, but this might incur incompatibilities when mixing versions
* A centralized approach is also demonstrated but not recommend due to flaws that might happen when the `sequence_uid` function gets multiple instances for some reason such as being budled separately.

Optionally:
* a hash function could be used if an unidentifieable id is desired that does not reflect the user input (using counting numbers or names,...), if the input data is too big such as complete file or if the uid is required to always have the same consistent format e.g. number of characters which the user cannot guarantee.

<img src="./media/05_client-uid-counters.png" width="400">

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/05_client-uid-counters)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/05_client-uid-counters)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/05_client-uid-counters)

# 06_astro-xelement
[./06_astro-xelement](./06_astro-xelement)

Using unified config for all of `astro.config.mjs`, `.astro` and `.js` server files

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/06_astro-xelement)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/06_astro-xelement)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/06_astro-xelement)

# 07_env-config
[./07_env-config](./07_env-config)

using environment variables from file in `astro.config.mjs` and `.js` server files

* todo test with loadEnv from 'vite'

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/07_env-config)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/07_env-config)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/07_env-config)

# 08_404-error-handling
[./08_404-error-handling](./08_404-error-handling)

Page not found redirect to 404

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/08_404-error-handling)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/08_404-error-handling)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/08_404-error-handling)

custom 404 page from : https://codepen.io/Stephane/pen/Jdozrp

# 09_dynamic-imports
[./09_dynamic-imports](./09_dynamic-imports)

* adapter : node-standalone
* deferr loading of js on event or timeout
* spinner while waiting

This is about dynamically importing a js script only when the component logic decides to do it. In this case, after 2 seconds from window load.

Not only `<Card title="Test" client:visible/>` is not supported by astro as directive reserved for framework components only, but also, it does not give fine granularity to decide exactly when to load a js script.

Note: Testing this example only makes sense in production mode (with build and run). Only gitpod left because it has a shell script that builds and runs by default while the others (StackBliz and Codesandbox) run in preview mode.

<img src="./media/09_dynamic-imports.png" width="400">

[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/09_dynamic-imports)

# 10_prerender
[./10_prerender](./10_prerender)

This example uses the experimental `prerender` feature. index page `'/'` is prerendered while `'/rerender'` page is server side rendered on every fetch

Note only Stackbliz working for this sample (Codesandbox and Gitpod wip)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/10_prerender)

# 11_deno-env
[./11_deno-env](./11_deno-env)

* adapter : deno

Testing environment variables in deno and deno.deploy

demo : https://astro-env.deno.dev/

project : https://dash.deno.com/projects/astro-env

[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/11_deno-env)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/11_deno-env)


# 12_content-collections
[./12_content-collections](./12_content-collections)

Simplest example with content collections
* Index page is using `getCollection()` API for info retrieval and rendering of a markdown array in parallel async call
* every page is rendered in a dynamic path `[...slug].astro` also using `getCollection()` with a filter on the slug name, because `getEntry()` takes filename as input which is not known for the query

* Astro docs : https://docs.astro.build/en/guides/content-collections/
* Astro official example : https://github.com/withastro/astro/tree/main/examples/with-content

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/12_content-collections)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/12_content-collections)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/12_content-collections)

- https://freesvg.org/1542512156 : tree

# 13_client-cookie-counter
[./13_client-cookie-counter](./13_client-cookie-counter)

This counter uses a cookie `counter=1` to persist through pages relaod despite being a client counter.

For Astro SSR there is a simplicity advantage for using a cookie over using client sotrage :
* Automatically sent with every client request
* No display flicker
* no need to create a server endpoint to submit the client updated value (to avoid the flicker)

Note : Only a single counter is used in this example given that a single cookie is used

Note : For a demo using cookies, the Astro.cookies could only be read in Gitpod

[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/13_client-cookie-counter)

## references
* https://stackoverflow.com/questions/73341205/why-does-the-icon-in-this-astro-svelte-component-flicker-on-refresh/74873656#74873656

* todo : check example with blocling head script can solve ssg

# 14_client-storage-counter
[./14_client-storage-counter](./14_client-storage-counter)

* This counter is using `sessionStorage` for client side persistency, and therefore avoids cookies.
* For UI sensitive elements (such as menu, sidebar, modal,...) it is important to prevent flicker. Such Flicker can happen when the server sends a default value upon page refresh and then javascript adjusts the value after reading it from the session sotrage. To prevent that, every time the client changes the value, the server state needs to be updated through a `put` request to a server endpoint
* For the server to know which client has whic counter, a counters map for each session_id is stored
* The session ID is created by the server when a request URL does not contain `session_id` parameter, it is passed to the client within the html components, the client takes it upon page load and use it in case no sessionStorage session_id available. Then stick it to the URL parameters for future queries

Note : this implementation is for demo purpose only and suffers from memory leak as old session_id's are not deleted.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/14_client-storage-counter)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/14_client-storage-counter)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/14_client-storage-counter)

## references
* https://stackoverflow.com/questions/73341205/why-does-the-icon-in-this-astro-svelte-component-flicker-on-refresh/74873656#74873656

# 15_server-cookie-counter
[./15_server-cookie-counter](./15_server-cookie-counter)

* adapter : node-standalone

Counts the pages load for a specific client with cookies. This examples shows how to get and set a cookie from a .astro page while example 13 gets the cookie from the server and set it from the client. 

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/15_server-cookie-counter)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/15_server-cookie-counter)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/15_server-cookie-counter)

# 16_html-string
[./16_html-string](./16_html-string)

example to show how to generate an html string out of a component using a Wrapper and `Astro.slots.render()`

<img src="./media/16_html-string.png" width="400">

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/16_html-string)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/16_html-string)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/16_html-string)

## references
* https://stackoverflow.com/questions/73382889/how-can-i-render-a-astro-component-to-a-html-string/74853279#74853279


# 17_dynamic-javascript
[./17_dynamic-javascript](./17_dynamic-javascript)

Generate javascript that can be executed on the client. The UID set by the server, is fetched by the client inside a javascript file

Note : although functional, this method is not recommended due to Vite complaning about dynamic import and security risk it implies.

<img src="./media/17_dynamic-javascript.png" width="400">


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/17_dynamic-javascript)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/17_dynamic-javascript)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/17_dynamic-javascript)


# 18_simple-integration
[./18_simple-integration](./18_simple-integration)

example using astrojs/image integration

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/18_simple-integration)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/18_simple-integration)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/18_simple-integration)

# 19_images-integration
[./19_images-integration](./19_images-integration)

* adapter : node-standalone
* integration : image

example using astrojs/image integration

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/19_images-integration)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/19_images-integration)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/19_images-integration)


# 20_ssr-cache-proxy
[./20_ssr-cache-proxy](./20_ssr-cache-proxy)

* adapter : node-standalone
* proxy   : express

* cache event-drive content
* call purge method
* put pass througn

Running mode :

* astro starts with `pnpm run preview` listens on port 4000
* express starts with `pnpm run proxy` listens on port 3000
* first client page load from proxy : cache miss, proxy fetches data from SSR
* SSR generates the page and and on creation assigns a page hash
* for the example purpose a 2 seconds timeout is added to a page render
* the page hash is updated on the proxy (in the example through a shared `hashes.json` but could be with a db or API)
* when the proxy fetches the page it identifies the cached page with its hash (as it is always actual on the `hashes.json`)
* follow up request checks if page is available and if hash is fresh
* when the user updates the data, the server updates the page hash
* follow up requests on the proxy show the page to be stale due to old cached page, the proxy fetches the page with the new hash

<img src="./media/20_ssr-cache-proxy.drawio.svg" width="700">



[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/20_ssr-cache-proxy)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/20_ssr-cache-proxy)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/20_ssr-cache-proxy)

# 21_ssr-cache-middleware
[./21_ssr-cache-middleware](./21_ssr-cache-middleware)

Same concept as the previous example but here the cache proxy and Astro SSR are combined in the same express App with Astro running in middleware mode

* once a request is fetched from the SSR server, the response contains an ETag with the hash to ensure immediate page update with the just produced hash value

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/21_ssr-cache-middleware)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/21_ssr-cache-middleware)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/21_ssr-cache-middleware)

# 22_mdx-svg
[./22_mdx-svg](./22_mdx-svg)

Example for testing SVG usage within `.astro`, `.md` and `.mdx`

This highlights incompatibility of inlined SVG when injected from remark/rehype plugins in an mdx file
* attributes with ':' e.g. `xmlns:xlink` gets treated as .jsx and converted to `xmlnsXlink`, `xmlns` or `xmlnsxlink`, all of which break the SVG rendering

Note :
* html comments not supported
* html empty new lines of spaces also break the html parsing as indentation takes precendence

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/22_mdx-svg)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/22_mdx-svg)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/22_mdx-svg)

## references
* github issue https://github.com/withastro/astro/issues/5796#issuecomment-1374766914
* Stackoverflow https://stackoverflow.com/questions/73306060/title-is-undefined-while-generating-sitemap-in-astro
* Stackoverflow https://stackoverflow.com/questions/75119497/how-can-i-filter-frontmatter-in-a-remark-plugin

# 23_remote-markdown
[./23_remote-markdown](./23_remote-markdown)

* adapter : node-standalone

features
* `astro-remote` works with astr v2 but not an official integration
* Passing default components only `Heading, CodeBlock, CodeSpan, Note` no mapping of custom components, e.g. images,...

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/23_remote-markdown)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/23_remote-markdown)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/23_remote-markdown)

## references
* Astro docs : https://docs.astro.build/en/guides/markdown-content/#fetching-remote-markdown
* https://github.com/natemoo-re/astro-remote
* demo : https://github.com/natemoo-re/astro-remote/tree/main/packages/demo


# 24_api-proxy
[./24_api-proxy](./24_api-proxy)

4 Locations where to alter server config

* `/vite.config.js`
* `/astro.config.mjs:server.port,proxy`
* `/astro.config.mjs:site.server.port,proxy`
* `/src/libs/inetgration-test.js:config_setup().update_config()`

summary
* can Astro proxy a service with the Vite server.proxy feature ?
    * No, Astro does not forward server.proxy to Vite
* does Astro need a proxy to access a different port running on the same host ?
    * No, because Astro frontmatter runs on the server so has access to localhost ports


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/24_api-proxy)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/24_api-proxy)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/24_api-proxy)

## references
* Vite feature : https://vitejs.dev/config/server-options.html#server-proxy
* Stack issue : https://stackoverflow.com/questions/73212935/astro-how-to-proxy-service-calls

# 25_markdown-scale
[./25_markdown-scale](./25_markdown-scale)

Benchmark results charts : https://microwebstacks.github.io/astro-examples/

* scalability stress test and limiting facrors (e.g. 15000 pages)
* markdown pages generator
    * pages markdown
    * pages mdx
    * local markdown in .astro
    * local mdx in .astro
    * remote markdown

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/25_markdown-scale)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/25_markdown-scale)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/25_markdown-scale)

## References
* Discord 4k pages, static, json ~10kB/page https://discord.com/channels/830184174198718474/1066464117327659111
* nodejs limit 1.7GB https://stackoverflow.com/questions/38558989/node-js-heap-out-of-memory

# Upcoming

* jwt (secure cookie)
* request specific context passing in Astro to avoid props drilling

# More Astro examples

## astro-big doc

* Astro Theme submission https://astro.build/themes/details/astro-big-doc/
* Github repo : https://github.com/MicroWebStacks/astro-big-doc
* Live demo : https://microwebstacks.github.io/astro-big-doc/blog/gallery.mdx/

Main features :

* Clean Markdown without js pollution : Layout injected from .astro files
* Free Path selection : can be placed anywhere within the repo
* Relative assets management : uses relative assets located in the same directory as the Markdown file
* Enhancement with Astro components : standard tags can be replaced with an Astro component without touching the Markdown files
* Modal Images and Gallery Components
* Nav Bar, Hierarchical menu, Table of Content with scroll spy,...

screenshot :

<img src="./media/astro-big-doc.png" width="400">


## astro-home-control
* Github repo : https://github.com/MicroWebStacks/astro-home-control

Main features :

* Home Automation MQTT Client running on Astro as SSR
* Client page update with Server Sent Events
* Custom switches with feedback and custom sliders with animated SVG

screenshot :

<img src="./media/astro-home-control.png" width="400">

## astro-lottie

* Github repo : https://github.com/MicroWebStacks/astro-examples_react-lottie
* https://airbnb.design/lottie/
* https://github.com/Gamote/lottie-react

