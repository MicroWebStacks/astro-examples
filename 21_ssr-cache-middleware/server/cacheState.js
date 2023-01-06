import {promises as fs} from 'fs'

const pages = {}
const hashes = {}

async function get_page_fresh_hash(url){
    const text = await fs.readFile('./hashes.json', 'utf8');
    const hashes = JSON.parse(text)
    return hashes[url]
}

async function update_url_hash(url,hash){
    const text = await fs.readFile('./hashes.json', 'utf8');
    const hashes = JSON.parse(text)
    hashes[url] = hash
    await fs.writeFile('./hashes.json', JSON.stringify(hashes), 'utf8');
}

async function cache_set(url,payload,hash){
    pages[url] = {
        hash:hash,
        payload:payload
    }
    update_url_hash(url,hash)
}

async function cache_has(url){
    console.log("cache-data>")
    if(!(url in pages)){
        console.log("cache-data> miss")
        return false
    }
    const current_hash = await get_page_fresh_hash(url)
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
