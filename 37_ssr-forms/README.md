# 02_ssr-counter
[../02_ssr-counter](../02_ssr-counter)

* integration : [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
* adapter : node-standalone

shared global var demo. reload the page to increment the counter. All pages share the same counter

<img src="../media/02_ssr-counter.drawio.svg" width="500">

<img src="../media/02_ssr-counter.png" width="400">

* SSR Memory profiling, run with `python test.py`

output with the page being loaded from a browser and switching pages
```
Server listening on http://127.0.0.1:3000
Max memory consumption: 4.44 MB
Max memory consumption: 51.71 MB
Max memory consumption: 51.71 MB
Max memory consumption: 54.93 MB
```


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)
[![open in Codesandbox](../media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)
[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/02_ssr-counter)

