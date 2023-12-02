import {join} from 'path'
import {config} from '@/config.js'
import {load_text} from '@/libs/utils.js'
import {parse_markdown,set_config} from 'content-structure'

set_config({rootdir:config.rootdir,rel_contentdir:"..",tags:{page:'page::([\\w-.]+)'}})


async function get_entry(name){
    const rel_path = join(name,"README.md")
    const md_path = join(config.rootdir,"..",rel_path)
    const markdown = await load_text(md_path)
    let {tree,content} = await parse_markdown(markdown,rel_path)
    return {tree,content}
}

export{
    get_entry
}
