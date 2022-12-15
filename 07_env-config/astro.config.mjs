import node from '@astrojs/node'
import { defineConfig } from 'astro/config';
import * as dotenv from 'dotenv'
dotenv.config({path:"./special.env"})

export default defineConfig({
  output: "server",
  adapter: node({
    mode: process.env.MODE
  })
});
