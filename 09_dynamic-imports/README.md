# 09_dynamic-imports
[../09_dynamic-imports](../09_dynamic-imports)

* integration : [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
* adapter : node-standalone
* Deferr loading of js on event or timeout
    * `setTimeout`
    * [Dynamic import()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import)
    * Spinner while waiting : Astro Component with animated SVG

This is about dynamically importing a js script only when the component logic decides to do it. In this case, after 2 seconds from window load.

Not only `<Card title="Test" client:visible/>` is not supported by astro as directive reserved for framework components only, but also, it does not give fine granularity to decide exactly when to load a js script.

Note: Testing this example only makes sense in production mode (with build and run). Only gitpod left because it has a shell script that builds and runs by default while the others (StackBliz and Codesandbox) run in preview mode.

<img src="../media/09_dynamic-imports.png" width="400">

[![open in Gitpod](../media/gitpod.svg)](https://gitpod.io/?on=gitpod#https://github.com/MicroWebStacks/astro-examples/tree/main/09_dynamic-imports)
