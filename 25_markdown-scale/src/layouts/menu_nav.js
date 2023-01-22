import {dirname,basename} from 'path'
import {url_path, remove_base} from './menu_utils'

function set_classes_recursive(url,items){
    let active_descendant = false
    items.forEach((item)=>{
        item.active = (url_path(url) == item.href)
        active_descendant ||= item.active
        if("items" in item){
            item.parent = true
            item.active_descendant = set_classes_recursive(url,item.items)
            item.expanded = item.active_descendant
            active_descendant ||= item.active_descendant
        }
    })
    return active_descendant
}

function path_depth(path){
    return path.split('/').length - 2 // '/blog' is root => 0
}

function needs_parent(entry){
    if(entry.depth == 1){                 //already on root
        return false
    }
    //console.log(`menu_nav> needs_parent(${entry.text}) depth=${entry.depth} path='${entry.path}' needs parent`)
    return true
}

function push_files(files_map){
    let entries = []
    for (const [path, data] of Object.entries(files_map)) {
        let element = {
            parent:false,
            text: data.frontmatter.title?data.frontmatter.title:basename(path),
            weight: data.frontmatter.weight?data.frontmatter.weight:1,
            path: path,
            parent_path: dirname(path),
            depth: path_depth(path),
            href : data.url
        }
        entries.push(element)
    }
    return entries
}

function create_parent_dir(directories,href_base,path){
    const menu_path = remove_base(href_base,path)//TODO trust remove base without the reference href_base
    const dir_menu_path = dirname(menu_path)
    const dir_path = dirname(path)
    const dir_exist = directories.find((parent)=>(parent.path == dir_path))
    if(dir_exist == undefined){
        let element = {
            items:[],
            parent:true,
            expanded:true,
            text: basename(dir_menu_path),
            path: dir_path,
            parent_path: dirname(dir_path),
            weight: 1,
            depth: path_depth(dir_path),
            href : dir_path
        }
        directories.push(element)
    }
}
/**
 * 
 * @param {*} file_map : map of files with path as key
 * @returns list of direct parents directories for each file without redundancies as checking before creation
 */
function push_directories({files_map,href_base}){
    const directories = []

    for (const [path, data] of Object.entries(files_map)) {
        let depth = path_depth(path)
        let current_path = path
        while(depth > 1){
            //console.log(`==> pushing depth(${depth}) path (${current_path}) length(${directories.length})`)
            const parent = directories.find((dir)=>(dir.path == dirname(current_path)))
            if(parent == undefined){
                //console.log(`==> creating parent (${dirname(current_path)})`)
                create_parent_dir(directories,href_base,current_path)
            }
            current_path = dirname(current_path)
            depth = path_depth(current_path)
        }
    }

    return directories
}
/**
 * 
 * @param {*} menu_list : the flat list of all elements files and directories 
 * @param {*} entry : the entry for which a parent is guaranteed to be found if it exists 
 * not only the menu_list is searched once, but if not found, and as long as depth 1 is not reached
 * the ancestors are checked to get the first match and assign as parent, only if no ancestor found
 * then returns undefined to place it at root level
 * @returns parent otherwise undefined if it does not exist 
 */
function find_parent(menu_list,entry){
    let parent_path = entry.parent_path
    const parent = menu_list.find((sub_entry)=>(sub_entry.path == parent_path))
    if(parent != undefined){
        return parent
    }else{
        let parent_depth = path_depth(parent_path)
        while(parent_depth > 1){
            parent_path = dirname(parent_path)
            const parent = menu_list.find((sub_entry)=>(sub_entry.path == parent_path))
            if(parent != undefined){
                entry.text = entry.text.replace(parent.text+'/',"")
                return parent
            }else{
                parent_depth = path_depth(parent_path)
            }
        }
        return undefined
    }
}


/**
 * 
 * @param {*} menu_list : contains all items files and directories on a flat level
 * @returns menu_tree a list of root elements only each of which can be a file or directory (parent) and contains items[]
 */
function menu_list_to_tree(menu_list){
    const menu_tree = []
    menu_list.forEach((entry)=>{
        if(needs_parent(entry)){
            const entry_parent = find_parent(menu_list,entry)
            if(entry_parent != undefined){
                entry_parent.items.push(entry)
            }else{
                menu_tree.push(entry)
            }
        }else{
            menu_tree.push(entry)
        }
    })
    return menu_tree
}

function files_map_to_menu_tree(files_map,href_base){
    const menu_context = {files_map,href_base}
    
    let menu_list = push_files(files_map) //[{parent, text, weight, path,depth, href}]
    menu_list.sort((a, b) => a.depth - b.depth);
    const directories_list = push_directories(menu_context)
    menu_list = menu_list.concat(directories_list)

    const menu_tree = menu_list_to_tree(menu_list)

    return {items:menu_tree,visible:true,list:menu_list}
}

function set_active_expanded(url, menu){
    if('items' in menu){
        set_classes_recursive(url, menu.items)
    }
}

export{
    files_map_to_menu_tree,
    set_active_expanded
}
