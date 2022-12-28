import {visit} from "unist-util-visit";

function remarkCheck() {
  return function transformer(syntaxTree,file) {
    console.log(`   ---   remarkCheck  (${file.history[0]})  ---`)
    visit(syntaxTree,  node => {
      console.log(`check : ${node.type}`)
    });
    return syntaxTree;
  };
}

export{
  remarkCheck
}
