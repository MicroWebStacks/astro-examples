# 21_ssr-cache-middleware
[../21_ssr-cache-middleware](../21_ssr-cache-middleware)

Same concept as the previous example but here the cache proxy and Astro SSR are combined in the same express App with Astro running in middleware mode

* once a request is fetched from the SSR server, the response contains an ETag with the hash to ensure immediate page update with the just produced hash value

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/21_ssr-cache-middleware)
[![open in Codesandbox](../media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/21_ssr-cache-middleware)
[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/21_ssr-cache-middleware)
