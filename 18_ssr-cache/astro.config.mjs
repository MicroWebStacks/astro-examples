import node from '@astrojs/node'
import * as dotenv from 'dotenv'

dotenv.config()


let config = {}

if(process.env.SERVER == "PROXY"){
  config = {
    output: "server",
    server:{
      port:4000
    },
    adapter: node({
      mode: 'standalone'
    })
  }
}
else if(process.env.SERVER == "MIDDLEWARE"){
  config = {
    output: "server",
    adapter: node({
      mode: 'middleware'
    })
  }  
}

export default config;