import {promises as fs} from 'fs'

const pages = {}

async function set_url_hash(url,hash){
    pages[url] = hash

    await fs.writeFile('./hashes.json', JSON.stringify(pages), 'utf8');
}

export{
    set_url_hash
}
