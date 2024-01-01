# 24_api-proxy
[../24_api-proxy](../24_api-proxy)

4 Locations where to alter server config

* `/vite.config.js`
* `/astro.config.mjs:server.port,proxy`
* `/astro.config.mjs:vite.server.port,proxy`
* `/src/libs/inetgration-test.js:config_setup().update_config()`

summary
* can Astro proxy a service with the Vite server.proxy feature ?
    * No, Astro does not forward server.proxy to Vite
* does Astro need a proxy to access a different port running on the same host ?
    * No, because Astro frontmatter runs on the server so has access to localhost ports


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/24_api-proxy)
[![open in Codesandbox](../media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/24_api-proxy)
[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/24_api-proxy)

## references
* Vite feature : https://vitejs.dev/config/server-options.html#server-proxy
* Stack issue : https://stackoverflow.com/questions/73212935/astro-how-to-proxy-service-calls
