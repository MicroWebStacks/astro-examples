import { blue_log } from "./utils"
import {promises as fs} from 'fs';
import {join} from 'path'

function buildStart(){
    blue_log("vite>buildStart()")
}

function resolveId(id){
    if(id.endsWith('.md')){
        blue_log(`vite>resolveId(${id})`)
        id = id+'x'; //'.md'+'x' => '.mdx'
        return { id: id };
    }
}

async function load(id){
    if(id.endsWith('.mdx')){
        try {
            await fs.access(id)
            return await fs.readFile(id, 'utf-8')
        } catch {
            console.log(id)
            id = join(process.cwd(),id)
            id = id.substring(0,id.length-1)
            console.log(id)
            const result = await fs.readFile(id, 'utf-8')
            console.log(typeof result)
            return result
        }
    }
    //blue_log(`vite>load(${id})`)
}

function transform(src, id) {
    if(id.includes('.md')){
        blue_log(`vite>transform(${id})`)
    }
}

export default function myplugin() {
  return {
    name: 'rename-md-files',
    enforce: 'pre',
    buildStart:buildStart,
    resolveId:resolveId,
    load:load,
    transform:transform
  }
}

export{
    myplugin
}
