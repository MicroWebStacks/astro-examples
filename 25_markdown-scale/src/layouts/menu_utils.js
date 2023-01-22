import {dirname} from 'path'

function trim_ext(filename){
    return filename.replace(/\.[^/.]+$/, "")
}

function remove_base(base,url){
    if(url.startsWith(base)){
        url = url.slice(base.length)
    }
    return url
}

function root_page(url){
    let str = String(url)
    if(str.includes("//")){
        str = str.split("//")[1]
    }
    if(str.includes("/")){
        str = str.split("/")[1]
    }else{
        str = ""
    }
    return `/${str}`
}

function get_base(href){
    const last_slash = href.lastIndexOf('/')
    return href.substring(0,last_slash)
}

function url_path(url){
    let str = String(url)
    if(str.includes("//")){
        str = str.split("//")[1]
    }
    if(str.includes("/")){
        const start = str.indexOf("/")+1
        str = str.substring(start)
    }else{
        str = ""
    }
    if(str.endsWith('/')){//rstrip('/')
        str = str.slice(0,-1)
    }
    return `/${str}`
}

function url_to_section(pageUrl){
    let base = ""
    if(base != ''){
        if(!base.startsWith('/')){
            base = '/'+base
        }
    }
    let page_url_no_base = remove_base(base,pageUrl)

    if(page_url_no_base.endsWith('/')){
        page_url_no_base += 'index' //to help the split dirname extraction
    }
    const parts = dirname(page_url_no_base).split('/')
    if(parts.length > 1){
        return parts[1]
    }else{
        return ''
    }
}

function active_page(url, raw_menu){
    const page = root_page(url)
    //console.log(`active_page = ${page}`)
    raw_menu.forEach((item)=>{item.base = get_base(item.href)})
    let active_page_index = raw_menu.map(item=>item.base).indexOf(page)
    //assumption is that the first page (index 0) is always the Home root '/'
    if(active_page_index == -1){
        active_page_index = 0
    }
    return active_page_index
}


export{
    trim_ext,
    active_page,
    remove_base,
    url_to_section,
    url_path
}
