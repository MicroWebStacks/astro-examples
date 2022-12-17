console.log(`process running in '${Deno.cwd()}'`)
console.log(`Deno.env.get("MY_VAR") = ${Deno.env.get("MY_VAR")}`)

function get_var(){
    return Deno.env.get("MY_VAR")
}

export {
    get_var
}
