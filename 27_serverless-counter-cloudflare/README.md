# 27_serverless-counter-cloudflare
[../27_serverless-counter-cloudflare](../27_serverless-counter-cloudflare)

* integration : [cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)
* adapter : cloudflare
* NODE_VERSION : 16.19.1
* cannot rename deployment url after creation

shared global var demo. reload the page to increment the counter. All pages share the same counter

    Note ! in serverless deployment, the in-memory state only persistes temporarily until a different instance is started

* live demo on cloudflare : https://astro-serverless-counter.pages.dev/
