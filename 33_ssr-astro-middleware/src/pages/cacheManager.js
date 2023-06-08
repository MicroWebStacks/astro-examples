import {promises as fs} from 'fs'

const hashes = {}

async function update_url_hash(url,hash){
    const text = await fs.readFile('./hashes.json', 'utf8');
    const hashes = JSON.parse(text)
    hashes[url] = hash
    await fs.writeFile('./hashes.json', JSON.stringify(hashes), 'utf8');
}

export{
    update_url_hash
}
