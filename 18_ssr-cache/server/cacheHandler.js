import express from 'express'


async function run(url,res){
    const response = await fetch('http://127.0.0.1:4000')
    const data = await response.text();    
    res.send(data)
}



const testExample = (req,res,next)=>{
    console.log("post-cache> handler()")
    console.log(req.url)
    run(req.url,res).then()
}


const cacheHandler = express.Router()
cacheHandler.use(testExample)

export{
    cacheHandler
}
