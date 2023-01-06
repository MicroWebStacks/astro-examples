# 20_ssr-cache-proxy
[../20_ssr-cache-proxy](../20_ssr-cache-proxy)

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

<img src="../media/20_ssr-cache-proxy.drawio.svg" width="700">



[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/20_ssr-cache-proxy)
[![open in Codesandbox](../media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/20_ssr-cache-proxy)
[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/20_ssr-cache-proxy)
