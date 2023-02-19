# 02_ssr-counter-denodeploy
[../02_ssr-counter-denodeploy](../02_ssr-counter-denodeploy)

* integration : [deno](https://docs.astro.build/en/guides/integrations-guide/deno/)
* adapter : deno

shared global var demo. reload the page to increment the counter. All pages share the same counter

    Note ! in serverless deployment, the in-memory state only persistes temporarily until a different instance is started

.env not taken has to manually inject env var `DENO_DEPLOY_TOKEN`

* live demo in deno deploy : https://astro-ssr-counters.deno.dev
