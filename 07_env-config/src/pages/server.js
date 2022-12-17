import * as dotenv from 'dotenv'

console.log(`process running in '${process.cwd()}'`)
dotenv.config({path:"./special.env"})

console.log(`process.env.MY_VAR = ${process.env.MY_VAR}`)
console.log(`impor t.meta.env.MY_VAR = ${import.meta.env.MY_VAR}`)



function get_var(){
    return process.env.MY_VAR
}

export {
    get_var
}
