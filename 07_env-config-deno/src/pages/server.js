console.log(`process running in '${Deno.cwd()}'`)
console.log(`impor t.meta.env.MY_VAR = ${import.meta.env.MY_VAR}`)
console.log(`Deno.env.get("MY_VAR") = ${Deno.env.get("MY_VAR")}`)

function get_var(){
    return Deno.env.get("MY_VAR")
}

export {
    get_var
}
