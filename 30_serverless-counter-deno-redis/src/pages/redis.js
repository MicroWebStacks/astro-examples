import { connect } from "https://deno.land/x/redis/mod.ts";

let redis = null

async function init(){
    const url = Deno.env.get("REDIS_URL")
    const port = parseInt(Deno.env.get("REDIS_PORT"))
    console.log(`connecting to ${url} @ ${port}`)
    redis = await connect({
      hostname: url,
      port: port,
      password: Deno.env.get("REDIS_PASSWORD")
    });
}

async function increment(){
    if(!redis){
        await init()
    }
    let counter = await redis.get("counter");
    if(isNaN(counter)){
        counter = 0
    }

    const new_val = parseInt(counter) + 1
    console.log(`new_val = ${new_val}`)
    const result = await redis.set("counter", new_val.toString());
    console.log(result)
}

async function get_count(){
    if(!redis){
        await init()
    }
    const counter = await redis.get("counter");
    return parseInt(counter)
}

export{
    get_count,
    increment
}
