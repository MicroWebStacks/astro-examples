# 03_sse-counter
[../03_sse-counter](../03_sse-counter)

* integration : [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
* adapter : node-standalone
* [Server Endpoints](https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes)
* [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
* remove Listener on cancel () thanks to https://github.com/0xk1f0/astro-sse-example

SSE: Server Sent Events. global var using a timer and Emitter

Server keeps couter state. reloading the page has no effect on the counter

requires Node18 for ReadableStream(), currently only on Gitpod

<img src="../media/03_sse-counter.drawio.svg" width="700">

<img src="../media/03_sse-counter.png" width="400">

[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/03_sse-counter)
