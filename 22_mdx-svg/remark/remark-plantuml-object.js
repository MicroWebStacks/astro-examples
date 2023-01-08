import {visit} from "unist-util-visit";
import { readFileSync } from 'fs';

function remarkPUMLObj() {

  return function transformer(syntaxTree,file) {
    visit(syntaxTree, "code", node => {
      let { lang, value, meta } = node;
      if (!lang || !value || lang !== "plantumlobj") return;
      node.type = "html";
      const file_path = new URL("../public/puml.svg", import.meta.url)
      console.log(`remarkPUMLObj> from (${file.history[0]})`)
      const val = readFileSync(file_path,"utf-8");
      node.value = `<object type="image/svg+xml"  data="/puml.svg" > </object>`
      node.alt = meta;
      node.meta = undefined;
    });
    return syntaxTree;
  };
}

export{
  remarkPUMLObj
}
