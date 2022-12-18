showcase examples for isolated simple usage patterns

# 01_basics
[01_basics](./01_basics)
This is a minimal example that shows the node version running

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/01_basics)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/01_basics)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/01_basics)



# 02_ssr-counter
[02_ssr-counter](./02_ssr-counter)

shared global var demo. reload the page to increment the counter. All pages share the same counter

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)

# 03_sse-counter
[03_sse-counter](./03_sse-counter)

SSE: Server Sent Events. global var using a timer and Emitter

Server keeps couter state. reloading the page has no effect on the counter

requires Node18 Node18 for ReadableStream(), currently only on Gitpod

[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/03_sse-counter)

# 04_client-counters
[04_client-counters](./04_client-counters)

simpler with a single client script but without single instance management, applies to all

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/04_client-counters)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/04_client-counters)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/04_client-counters)


# 05_client-uid-counters
[05_client-uid-counters](./05_client-uid-counters)

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

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/05_client-uid-counters)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/05_client-uid-counters)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/05_client-uid-counters)

# 06_astro-xelement
[06_astro-xelement](./06_astro-xelement)

Using unified config for all of `astro.config.mjs`, `.astro` and `.js` server files

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/06_astro-xelement)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/06_astro-xelement)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/06_astro-xelement)

# 07_env-config
[07_env-config](./07_env-config)

using environment variables from file in `astro.config.mjs` and `.js` server files

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/07_env-config)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/07_env-config)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/07_env-config)

# 08_404-error-handling
[08_404-error-handling](./08_404-error-handling)

Page not found redirect to 404

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/08_404-error-handling)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/08_404-error-handling)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/08_404-error-handling)

custom 404 page from : https://codepen.io/Stephane/pen/Jdozrp

# 09_dynamic-imports
[09_dynamic-imports](./09_dynamic-imports)

This is about dynamically importing a js script only when the component logic decides to do it. In this case, after 2 seconds from window load.

Not only `<Card title="Test" client:visible/>` is not supported by astro as directive reserved for framework components only, but also, it does not give fine granularity to decide exactly when to load a js script.

Note: Testing this example only makes sense in production mode (with build and run). Only gitpod left because it has a shell script that builds and runs by default while the others (StackBliz and Codesandbox) run in preview mode.

[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/09_dynamic-imports)

# 10_prerender
[10_prerender](./10_prerender)

This example uses the experimental `prerender` feature. index page `'/'` is prerendered while `'/rerender'` page is server side rendered on every fetch

Note only Stackbliz working for this sample (Codesandbox and Gitpod wip)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/10_prerender)

# 11_deno-env
[11_deno-env](./11_deno-env)

Testing environment variables in deno and deno.deploy

demo : https://astro-env.deno.dev/

project : https://dash.deno.com/projects/astro-env

[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/11_deno-env)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/11_deno-env)


# 12_content-collections
[12_content-collections](./12_content-collections)

Simplest example with content collections
* Index page is using `getCollection()` API for info retrieval and rendering of a markdown array in parallel async call
* every page is rendered in a dynamic path `[...slug].astro` also using `getCollection()` with a filter on the slug name, because `getEntry()` takes filename as input which is not known for the query

* Astro docs : https://docs.astro.build/en/guides/content-collections/
* Astro official example : https://github.com/withastro/astro/tree/main/examples/with-content

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/12_content-collections)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/12_content-collections)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/12_content-collections)

- https://freesvg.org/1542512156 : tree

# 13_client-persistent-counter
[13_client-persistent-counter](./13_client-persistent-counter)

This counter uses a cookie `counter=1` to persist through pages relaod despite being a client counter.

For Astro SSR there is a simplicity advantage for using a cookie over using client sotrage :
* Automatically sent with every client request
* No display flicker
* no need to create a server endpoint to submit the client updated value (to avoid the flicker)

Note : Only a single counter is used in this example given that a single cookie is used

Note : For a demo using cookies, the Astro.cookies could only be read in Gitpod

[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/13_client-persistent-counter)

# 14_client-storage-counter
[14_client-storage-counter](./14_client-storage-counter)

* This counter is using `sessionStorage` for client side persistency, and therefore avoid cookies.
* For UI sensitive elements (such as menu, sidebar, modal,...) it is important to prevent flicker. Such Flicker can happen when the server sends a default value upon page refresh and then javascript adjusts the value after reading it from the session sotrage. To prevent that, every time the client changes the value, the server state needs to be updated through a `put` request to a server endpoint
* For the server to know which client has whic counter, a counters map for each session_id is stored
* The session ID is created by the server when a request URL does not contain `session_id` parameter, it is passed to the client within the html components, the client takes it upon page load and use it in case no sessionStorage session_id available. Then stick it to the URL parameters for future queries

Note : this implementation is for demo purpose only and suffers from memory leak as old session_id's are not deleted.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/14_client-storage-counter)
[![open in Codesandbox](./media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/14_client-storage-counter)
[![open in Gitpod](./media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/14_client-storage-counter)
