# 13_client-cookie-counter
[../13_client-cookie-counter](../13_client-cookie-counter)

* integration : [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
* adapter : node-standalone
* Astro API [Astro.cookies.get()](https://docs.astro.build/en/guides/server-side-rendering/#astrocookies)


This counter uses a cookie `counter=1` to persist through pages relaod despite being a client counter.

For Astro SSR there is a simplicity advantage for using a cookie over using client sotrage :
* Automatically sent with every client request
* No display flicker
* no need to create a server endpoint to submit the client updated value (to avoid the flicker)

Note : Only a single counter is used in this example given that a single cookie is used

Note : For a demo using cookies, the Astro.cookies could only be read in Gitpod

[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/13_client-cookie-counter)

## references
* https://stackoverflow.com/questions/73341205/why-does-the-icon-in-this-astro-svelte-component-flicker-on-refresh/74873656#74873656

* todo : check example with blocking head script can solve ssg
