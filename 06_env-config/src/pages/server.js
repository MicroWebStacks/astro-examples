import * as dotenv from 'dotenv'
dotenv.config({path:"./special.env"})

console.log(`process.env.MY_VAR = ${process.env.MY_VAR}`)

function get_var(){
    return process.env.MY_VAR
}

export {
    get_var
}
