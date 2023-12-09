
const rootdir = Object.hasOwn(globalThis,"rootdir")?globalThis.rootdir:"."

const config = {
    rootdir:rootdir,
    content: "..",

}

config.collect_content = {
    rootdir:config.rootdir,
    rel_contentdir:config.content,
    rel_outdir:"public",//because integrations cannot persist on dist before start of build
    raw_menu:"menu.yaml",
    debug:true,
    tags:{
        page:'page::([\\w-.]+)'
    }
}

console.log(config)

export {
    config
}
