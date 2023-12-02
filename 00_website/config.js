//in DEV Mode process.env does not have .env content
import { fileURLToPath } from 'url';
import {join,dirname} from 'path'

const __filename = fileURLToPath(import.meta.url);
let __dirname = dirname(__filename);
if(import.meta.env?.MODE == "production"){
	__dirname = join(__dirname,'../../..')
}

const config = {
    rootdir: __dirname,
}
console.log(config)

export {
    config
}
