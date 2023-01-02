import express from 'express'
import {cache_has,cache_get,cache_set} from './cacheState.js'


//https://stackoverflow.com/questions/19215042/express-logging-response-body
function configure_catch_response(res,url) {
    var original_write = res.write,
        original_end = res.end;
  
    var chunks = [];
  
    res.write = function (chunk) {
      chunks.push(chunk);
  
      return original_write.apply(res, arguments);
    };
  
    res.end = function (chunk) {
        if (chunk){
            chunks.push(chunk);
        }
        const body = Buffer.concat(chunks).toString('utf8');
        const hash = res.get("ETag")
        cache_set(url,body,hash)
        console.log(`cache> updated with hash ${hash}`)
        
        original_end.apply(res, arguments);
    };
}

async function run(req,res,next){
    let data = null
    if(await cache_has(req.url)){
        console.log(`cache> hit(${req.url})`)
        data = cache_get(req.url)
        res.send(data)
    }else{
        console.log(`cache> miss(${req.url})`)

        configure_catch_response(res,req.url)
        next()
    }
}

const cacheHandler = express.Router()
cacheHandler.use(express.json());
cacheHandler.get('/',run)

export{
    cacheHandler
}
