import express from 'express'


const testExample = (req,res,next)=>{

    console.log(res)

    next()
}


const cacheHandler = express.Router()
cacheHandler.use(testExample)

export{
    cacheHandler
}
