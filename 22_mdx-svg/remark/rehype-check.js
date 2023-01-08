import {visit} from 'unist-util-visit'

/** @type {import('unified').Plugin<[], import('hast').Root>} */
function rehypeCheck() {
  return function transformer(tree,file){
    console.log("   ---   rehypeCheck   ---")
    console.log(`starting ---------------- ${file.history[0]}`)
    visit(tree, (node) => {
        console.log(node)
    })
    console.log(`finish ----------------`)
  }
}

export{
  rehypeCheck
}
