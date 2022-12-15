import node from '@astrojs/node'
import * as dotenv from 'dotenv'
dotenv.config({path:"./special.env"})

const static_config = {
  output: "static"
}

const server_config = {
  output: "server",
  adapter: node({
    mode: "standalone"
  })
}

export default (process.env.OUTPUT_MODE=="static")?static_config:server_config;
