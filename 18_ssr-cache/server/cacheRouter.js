import express from 'express'
import {cache_has,cache_get,cache_set} from './cacheState.js'
import { async_put } from '../src/libs/utils.js'

async function run(req,res,next){
    let data = null
    if(await cache_has(req.url)){
        console.log(`cache> hit(${req.url})`)
        data = cache_get(req.url)
    }else{
        console.log(`cache> miss(${req.url})`)
        const response = await fetch('http://127.0.0.1:4000'+req.url)
        data = await response.text();
        await cache_set(req.url,data)
    }
    res.send(data)
}

async function update(req,res,next){
    console.log(`cache> forward put ${JSON.stringify(req.body)}`)
    const response = await async_put('http://127.0.0.1:4000/api/update',req.body)
    res.json(response)
}

const cacheHandler = express.Router()
cacheHandler.use(express.json());
cacheHandler.get('/',run)
cacheHandler.put('/api/update',update)

export{
    cacheHandler
}
