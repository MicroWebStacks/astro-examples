import panzoom from 'panzoom'

let pzref = null
const zoomOptions = {
  minZoom: 0.1,
  maxZoom:4,
  //autocenter:true
}

function appendShadowSVG(center,svg){
  //cannot detatch a shadow root, so check existing before creation
  let shadowRoot = center.shadowRoot
  if(!shadowRoot){
    shadowRoot = center.attachShadow({mode: 'open'});
  }
  const div = document.createElement("div")//needed for the panzoom as it takes the parent
  shadowRoot.appendChild(div)
  const new_svg = svg.cloneNode(true)
  div.appendChild(new_svg)
  const oldstyle = new_svg.getAttribute("style")
  new_svg.setAttribute("style",`${oldstyle};user-select: none; cursor:grab;`)
  new_svg.querySelectorAll('tspan,text').forEach((el)=>{
      el.style.cursor = "pointer";
  });
  return new_svg
}

function cloneAsset(center){
    const container = center.parentElement.parentElement.parentElement.parentElement
    const obj = container.querySelector("object")
    if(obj){
      const svg = obj.contentDocument.querySelector("svg")
      return appendShadowSVG(center,svg)
    }else{
      const img = container.querySelector("img")
      const new_img = img.cloneNode(true)
      center.appendChild(new_img)
      return new_img
    }
}

function window_url_add_modal(center){
    const container = center.parentElement.parentElement.parentElement.parentElement
    const pz_name = container.getAttribute("data-name")
    const new_href = window.location.origin+window.location.pathname+`?modal=${pz_name}`
    window.history.pushState({},"",new_href)
}
function window_url_remove_modal(){
    const new_href = window.location.origin+window.location.pathname
    window.history.pushState({},"",new_href)
}

function initModal(event){

  const modal = event.target
  const close = modal.querySelector(".close")
  const center = modal.querySelector(".modal-center")

  const svg_img = cloneAsset(center)
  if(pzref){
    pzref.dispose()
  }
  pzref = panzoom(svg_img,zoomOptions)

  close.onclick = ()=>{
    //console.log("closed click")
    modal.classList.remove("visible")
    pzref.dispose()
    const img = center.querySelector("img")
    if(img){
      img.remove()
    }else{// SVG - remove the parent div and leave the shadowRoot for reuse
      const shadowRoot = center.shadowRoot
      const svg = shadowRoot.querySelector("svg")
      svg.parentElement.remove()
    }
    window_url_remove_modal()
  }
  window_url_add_modal(center)
  modal.classList.add("visible")
}

function init(){
    const modalsbkgs = document.querySelectorAll(`.modal-background`)
    if(modalsbkgs.length == 0){//prevent irrelvant page execution
        return
    }
    const modals = [...modalsbkgs]
    for(let el in modals){
      const modal = modals[el]
      if(modal.getAttribute("data-state") == "init"){
        modal.addEventListener("init",initModal  ,false)
        modal.setAttribute("data-state","run")
      }
    }
}

document.addEventListener('DOMContentLoaded', init, false);
