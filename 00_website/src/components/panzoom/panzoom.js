import { SVG as SVGjs } from '@svgdotjs/svg.js'
import {event} from '@/libs/client_utils'

function add_links(container,url_map){
  const obj = container.querySelector("object")
  const svg = obj.contentDocument.querySelector("svg")

  let draw = SVGjs(svg)
  let text_nodes = draw.find('text')
  let text_array = [ ...text_nodes ];
  text_array.forEach((text)=>{
    const key = text.node.innerHTML
    if(key in url_map){
      var isAbs = new RegExp('^(?:[a-z+]+:)?//', 'i');//isAbsolute https://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative
      if(isAbs.test(url_map[key])){
        text.linkTo((link)=>{link.to(url_map[key]).target('_blank')})//link in new page
      }else{
        text.linkTo((link)=>{link.to(url_map[key]).target('_top')})//link outside the shadow DOM
      }
      text.css({'text-decoration': 'underline'})  
      //text.fill('#f06')
    }
  })
}

function checkModal(){
  //check if any modal needs to be opened
  const params = new URL(location.href).searchParams;
  const modal_name = params.get('modal');
  if(modal_name){
    console.log(`opening modal for ${modal_name}`)
    const container = document.querySelector(`.container.panzoom[data-name="${modal_name}"]`)
    const modal = container.querySelector(".modal-background")
    event(modal,"init")
  }
}

function init(){
  const containers_els = document.querySelectorAll(".container.panzoom")
  if(containers_els.length == 0){//prevent irrelvant page execution
    return
  }
  const containers = [...containers_els]
  for(let el in containers){
    const container = containers[el]
    const eltype = container.getAttribute("data-type")
    if(eltype == "svg"){
      const url_map_string = container.getAttribute("data-url-map")
      if(url_map_string){
        const url_map = JSON.parse(url_map_string)
        add_links(container,url_map)
      }
    }

    const open = container.querySelector(".open")
    open.onclick = ()=>{
      const modal = container.querySelector(".modal-background")
      event(modal,"init")
    }
  }
  //allow the modal to init and register its listener before throwing the open event
  setTimeout(checkModal,10)
}

document.addEventListener('DOMContentLoaded', init, false);
