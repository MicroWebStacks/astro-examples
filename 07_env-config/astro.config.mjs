import node from '@astrojs/node'
import { defineConfig } from 'astro/config';
import * as dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const projectdir = dirname(__filename);
dotenv.config({path:join(projectdir,"special.env")})

export default defineConfig({
  output: "server",
  adapter: node({
    mode: process.env.MODE
  })
});
