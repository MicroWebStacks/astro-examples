
function remarkLayoutCheck() {
  return function transformer(syntaxTree,file) {
    console.log("   ---   remark Layout Check   ---")
    console.log(file?.data?.astro?.frontmatter);
    const hasLayout = file?.data?.astro?.frontmatter?.layout;
    const isFragment = file?.data?.astro?.frontmatter?.fragment ? true : false;
    console.log(`hasLayout = ${hasLayout}`)
    console.log(`isFragment = ${isFragment}`)

    return syntaxTree;
  };
}

export{
  remarkLayoutCheck
}
