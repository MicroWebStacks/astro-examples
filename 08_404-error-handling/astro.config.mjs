import node from '@astrojs/node'
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const projectdir = dirname(__filename);
dotenv.config({path:join(projectdir,"special.env")})


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
