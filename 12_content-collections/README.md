# 12_content-collections
[12_content-collections](./12_content-collections)

Simplest example with content collections
* Index page is using `getCollection()` API for info retrieval and rendering of a markdown array in parallel async call
* every page is rendered in a dynamic path `[...slug].astro` also using `getCollection()` with a filter on the slug name, because `getEntry()` takes filename as input which is not known for the query

* Astro docs : https://docs.astro.build/en/guides/content-collections/
* Astro official example : https://github.com/withastro/astro/tree/main/examples/with-content

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/12_content-collections)
[![open in Codesandbox](../media/codesandbox.svg)](https://codesandbox.io/s/github/MicroWebStacks/astro-examples/tree/main/12_content-collections)
[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/12_content-collections)

- https://freesvg.org/1542512156 : tree

