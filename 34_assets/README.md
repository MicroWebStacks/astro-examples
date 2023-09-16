# 34_assets
[../34_assets](../34_assets)

* Astro assets https://docs.astro.build/en/guides/assets/
* note 'pnpm install sharp' needed for optimizations

tests

* relative import within .astro file `index.astro` : OK
* alias tested OK with a custom path `src/custom_assets` used from `@/custom_assets`
* in .md although these two tests are identical, one of them takes the same directory path, the other a neighboring directory that a bit further away but both are strictly relative and have no special character
    * '/md/colocation' OK `![Tree](./tree.svg)` note `![Tree](tree.svg)` will not work the './' is needed
    * '/md/relative' OK relative all the way back to assets `![Tree](../../assets/tree.svg)`

* `<Image />` component now part of Astro core
    * SVG : Not OK, as svg rendered within an image tag which deprive it from text selection capabilities, probably not being the main use case for the Image component and needed for some Hero images that do not consider the text to be an important use case

* content collections : OK. import image with checks
