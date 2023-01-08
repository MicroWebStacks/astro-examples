import {visit} from "unist-util-visit";
import { readFileSync } from 'fs';

function remarkPUMLSvg() {
  return function transformer(syntaxTree,file) {
    visit(syntaxTree, "code", node => {
      if (!node.lang || !node.value || node.lang !== "plantumlsvg") return;
      console.log(`remarkPUMLSvg> from (${file.history[0]})`)
      const file_path = new URL("../public/puml.svg", import.meta.url)
      const svg_text = readFileSync(file_path,"utf-8");
      node.type = "html";
      node.value = svg_text
      node.alt = node.meta;
      node.meta = undefined;
    });
    return syntaxTree;
  };
}

export{
  remarkPUMLSvg
}
