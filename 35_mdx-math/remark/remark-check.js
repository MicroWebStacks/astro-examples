import {visit} from "unist-util-visit";

function remarkCheck() {
  return function transformer(syntaxTree,file) {
    console.log("   ---   remarkCheck   ---")
    visit(syntaxTree,  node => {
      console.log(`check : ${node.type}`)
      //console.log(node)
      console.log(file?.data?.astro?.frontmatter);
      const hasLayout = file?.data?.astro?.frontmatter?.layout;
      const isFragment = file?.data?.astro?.frontmatter?.fragment ? true : false;
      console.log(`hasLayout = ${hasLayout}`)
      console.log(`isFragment = ${isFragment}`)
    });
    return syntaxTree;
  };
}

export{
  remarkCheck
}
