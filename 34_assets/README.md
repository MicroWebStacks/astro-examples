# 34_assets
[../34_assets](../34_assets)

* Astro assets working as expected for more details see https://docs.astro.build/en/guides/assets/

tested scenarios

* relative import within .astro file `index.astro`
* alias usage is still a work in progress `alias.astro`
* in .md although these two tests are identical, one of them takes the same directory path, the other a neighboring directory that a bit further away but both are strictly relative and have no special character
    * '/md/colocation' `![Tree](./tree.svg)` Working (note `![Tree](tree.svg)` will not work the './' is needed)
    * '/md/relative' relative all the way back to assets `![Tree](../../assets/tree.svg)`
