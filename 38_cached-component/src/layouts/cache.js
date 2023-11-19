
const cache = {}

function cache_set(key,value){
    cache[key] = value
}

function cache_has(key){
    return Object.hasOwn(cache,key)
}

function cache_get(key){
    return cache[key]
}

export {
    cache_set,
    cache_has,
    cache_get
}
