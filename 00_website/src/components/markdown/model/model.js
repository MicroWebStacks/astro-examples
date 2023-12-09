import '@google/model-viewer';

function init_viewer(viewer){
    const src = viewer.getAttribute("data-model")
    const alt = viewer.getAttribute("data-alt")
    const title = viewer.getAttribute("data-title")
    console.log(`init model with ${src}`)

    const modelViewer = document.createElement('model-viewer');
    modelViewer.id = src;
    modelViewer.src = src;
    modelViewer.alt = 'A 3D model of something';
    
    viewer.appendChild(modelViewer);

}

function init(){
    const viewers_elements = document.querySelectorAll(`.model-viewer`)
    if(viewers_elements.length == 0){//prevent irrelvant page execution
        return
    }
    const viewers = [...viewers_elements]
    for(let el in viewers){
        const viewer = viewers[el]
        console.log(viewer)
        init_viewer(viewer)
    }
}

document.addEventListener('DOMContentLoaded', init, false);
