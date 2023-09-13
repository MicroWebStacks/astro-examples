export function onRequest ({ locals, request }, next) {
  //it is possible to move cacheRouter.js here and run node cache in Astro standalone mode
    console.log("astro.middleware> this is astro middleware")
    locals.title = "Middleware Title"

  // return a Response or the result of calling `next()`
  return next()
}
