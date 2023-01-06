import {promises as fs} from 'fs'

const pages = {}

async function get_page_hash(url){
    const text = await fs.readFile('./hashes.json', 'utf8');
    const data = JSON.parse(text)
    return data[url]
}

async function cache_set(url,payload){
    const hash = await get_page_hash(url)
    pages[url] = {
        hash:hash,
        payload:payload
    }
}

async function cache_has(url){
    console.log("cache-data>")
    if(!(url in pages)){
        console.log("cache-data> miss")
        return false
    }
    const current_hash = await get_page_hash(url)
    if(current_hash === pages[url].hash){
        console.log(`cache-data> hit (${current_hash})`)
        return true
    }else{
        console.log(`cache-data> stale has(${pages[url].hash}) new(${current_hash})`)
        return false
    }
}

function cache_get(url){
    return pages[url].payload
}

export{
    cache_has,
    cache_get,
    cache_set
}
