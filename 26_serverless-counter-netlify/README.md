# 02_ssr-counter-netlify
[../02_ssr-counter-netlify](../02_ssr-counter-netlify)

* integration : [@astrojs/netlify](https://docs.astro.build/en/guides/integrations-guide/netlify/)
* adapter : netlify

shared global var demo. reload the page to increment the counter. All pages share the same counter

    Note ! in serverless deployment, the in-memory state only persistes temporarily until a different instance is started

* live demo on netlify : https://astro-ssr-counters.netlify.app/
