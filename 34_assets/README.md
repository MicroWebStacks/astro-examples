# 34_assets
[../34_assets](../34_assets)

* testing Astro assets see https://docs.astro.build/en/guides/assets/


* in .astro working in `3.0.0-beta.0` but failing with `3.0.0-rc.7`
    * `~/assets/` works `@custom_assets/*` fails

* in .md
    * '/md/standard' `![Tree](./tree.svg)` Working (note `![Tree](tree.svg)` will not work the './' is needed)
    * '/md/special' relative all the way back to assets `![Tree](../../assets/tree.svg)`
