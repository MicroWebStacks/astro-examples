# 30_serverless-counter-deno-redis
[../30_serverless-counter-deno-redis](../30_serverless-counter-deno-redis)

* integration : [deno](https://docs.astro.build/en/guides/integrations-guide/deno/)
* adapter : deno
* database : [redis](https://app.redislabs.com/#/databases)
* `Deno.version` not working resulting in crash on deploy

demo for variable persisted on redis database. reload the page to increment the counter. All pages share the same counter.

expected environment variables
* local `DENO_DEPLOY_TOKEN` : to be manually injected in the env before calling `deploy`
* your redis credentials, needed both locally to be injected manually and on deploy entered on the project settings
    * REDIS_URL=******.redislabs.com
    * REDIS_PORT=*****
    * REDIS_PASSWORD=***********

* live demo in deno deploy : https://astro-redis-counter.deno.dev/
