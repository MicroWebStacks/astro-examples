# 30_serverless-counter-deno-redis
[../30_serverless-counter-deno-redis](../30_serverless-counter-deno-redis)

* integration : [deno](https://docs.astro.build/en/guides/integrations-guide/deno/)
* adapter : deno
* database : [redis](https://app.redislabs.com/#/databases)
* `Deno.version` not working resulting in crash on deploy

demo for variable persisted on redis database. reload the page to increment the counter. All pages share the same counter.

.env not taken has to manually inject env var `DENO_DEPLOY_TOKEN`

* live demo in deno deploy : https://astro-redis-counter.deno.dev/

