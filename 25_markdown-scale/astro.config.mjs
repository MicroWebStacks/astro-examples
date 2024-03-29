import mdx from "@astrojs/mdx";
import node from '@astrojs/node'
import { defineConfig } from 'astro/config';
import { getHeapStatistics } from 'node:v8';

const output = process.env.OUTPUT?process.env.OUTPUT:"static"

console.log(`output is ${output}`)
console.log(`Node Options ${process.env.NODE_OPTIONS}`)
console.log(getHeapStatistics())

var config_options = {}

if(output == "static"){
  config_options = {
    output: output,
    integrations: [mdx()]
  }  
}else{
  config_options = {
    output: output,
    adapter: node({
      mode: 'standalone'
    }),
    integrations: [mdx()]
  }  
}

export default defineConfig(config_options);
