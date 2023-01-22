import raw_menu from './menu.json'
import {promises as fs} from 'fs';
import {resolve,join,relative} from 'path'
import {files_map_to_menu_tree,  set_active_expanded} from './menu_nav'
import {  url_to_section,trim_ext } from './menu_utils';
import matter from 'gray-matter';

const sections_map = {}

//https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search
async function parse_dir_recursive(dir) {
    const subdirs = await fs.readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
      const res = resolve(dir, subdir);
      return (await fs.stat(res)).isDirectory() ? parse_dir_recursive(res) : res;
    }));
    return files.reduce((a, f) => a.concat(f), []);
}

function url_to_file(section_path,page){
  const base_path = process.cwd()+section_path
  const page_path = resolve(base_path,page)
  return page_path
}

async function file_list_to_url_map(mdx_files,section_path,href_base){
  let result = {}
  for(let file of mdx_files){
    //const url = '/'+config.base + href_base + trim_ext(file)
    const url = href_base + trim_ext(file)
    const section_url = trim_ext(file)
    const abs_path = url_to_file(section_path,file)
    const content = await fs.readFile(abs_path, 'utf-8');
    const frontmatter = matter(content).data
    result[url] = {
      path:file,
      abs_path:abs_path,
      url: url,
      section_url: section_url,
      frontmatter: frontmatter
    }
  }
  //console.log(result)
  return result
}

async function get_section_data(section_path,href_base){

  if(section_path in sections_map){
    return sections_map[section_path]
  }

  const rootdir = process.cwd()
  const search_base = join(rootdir,section_path)
  console.log(`menu> section_path = ${section_path} ; search_base = ${search_base}`)
  const files = await parse_dir_recursive(search_base)
  //console.log(files)
  const mdx_files_abs = files.filter((file)=>(file.endsWith('.mdx')))
  const mdx_files = mdx_files_abs.map((file)=>(relative(search_base,file).replaceAll('\\','/')))

  const files_map = await file_list_to_url_map(mdx_files,section_path,href_base)
  const section_menu = files_map_to_menu_tree(files_map,href_base)
  const section_data = {
    menu:section_menu,
    files_list:mdx_files,
    section_urls_list:Object.values(files_map).map(file=>file.section_url),
    files_map:files_map,
    path:section_path,
    href:href_base
  }

  const section_menu_tree_file = join(search_base,"section_menu_tree.json")
  const section_menu_list_file = join(search_base,"section_menu_list.json")
  const section_list_file = join(search_base,"section_files.json")
  console.log(`nav_section> get_section_data() created menu saving to ${section_menu_tree_file}`)
  await fs.writeFile(section_list_file,JSON.stringify(files_map,null,2))
  await fs.writeFile(section_menu_list_file,JSON.stringify(section_menu.list,null,2))
  await fs.writeFile(section_menu_tree_file,JSON.stringify(section_menu.items,null,2))
  sections_map[section_path] = section_data

  return section_data
}

async function get_nav_menu(pageUrl){
  const section = url_to_section(pageUrl)
  console.log(`menu> get_nav_menu() section = ${section}`)
  const raw_section_menu = raw_menu.find((entry)=>(entry.href.split('/')[1] == section))
  if('items' in raw_section_menu){
    raw_section_menu.visible = true
    if(raw_section_menu.items.length ==1){
      raw_section_menu.visible = false
    }
    //console.log(raw_section_menu)
    set_active_expanded(pageUrl,raw_section_menu)
    return raw_section_menu
  }else{
    const section_data = await get_section_data(raw_section_menu.path,raw_section_menu.href_base)
    //console.log(section_data)
    set_active_expanded(pageUrl,section_data.menu)
    return section_data.menu
  }
}

async function get_section_urls(section_path,href_base){
  const section_data = await get_section_data(section_path,href_base)
 
  return section_data.section_urls_list
}

// '/data/blog', '/blog/gallery' => 'D:\Dev\MicroWebStacks\astro-big-doc\data\blog\gallery.mdx'
async function get_section_file_from_url(section_path,page,href_base){
  const section_data = await get_section_data(section_path,href_base)

  page = href_base + page
  if(page in section_data.files_map){
    return section_data.files_map[page].abs_path
  }else{
    console.warn(`menu> page '${page}' not available`)
    return null
  }
}

export{
    get_nav_menu,
    get_section_urls,
    get_section_file_from_url
}
