# 38_cached-component

[../38_cached-component](../38_cached-component)

* caches the rendering of slot components passed to it

usage is as simple as this
```js
    <Cache>
        <Menu />
    </Cache>
```
can also have different names that act as store keys

```js
    <Cache name="section1">
        <Menu section="section1"/>
    </Cache>
```

Note1 : This will cache all calls from all isntances, if the intended usage is a different cache set for every astro component file, then it is still required that the user gives a different `name` for every instance, e.g. prefix component path (with e.g. a [vite __filedir plugin](https://github.com/MicroWebStacks/astro-big-doc/blob/97412f4914f7a8f821dc762f1023aed62091ae75/src/libs/vite-plugin-filedir.js#L5) )

Note2: This is caching production only for convenience during development, if caching is also intended during development (not recommended) then this line in `Cache.astro` can be changed to remove the PROD condition
```js
if(cache_has(name) && import.meta.env.PROD){
```

Test, see build log, both pages build are logged while the rendering of the cached component is logged only once
```
index> rendering index page
 ** rendering ** 'default' => cache_set()
page2> rendering page2
```

References
* [Astro docs / slots render](https://docs.astro.build/en/reference/api-reference/#astroslotsrender)
* [Astro docs / components props](https://docs.astro.build/en/core-concepts/astro-components/#component-props)
* [Astro docs / named slots](https://docs.astro.build/en/core-concepts/astro-components/#named-slots)


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MicroWebStacks/astro-examples/tree/main/38_cached-component)


