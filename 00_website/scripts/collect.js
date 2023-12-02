import {glob} from 'glob'
import { fileURLToPath } from 'url';
import { join, relative, resolve, sep, dirname } from 'path';
import { load_json, save_json } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const websitedir = dirname(dirname(__filename));
const rootdir = dirname(websitedir);

console.log(rootdir)


async function get_samples(){
    console.log(`rootdir : ${rootdir}`)
    const originalDirectory = process.cwd();
    process.chdir(rootdir)
    const results = await glob(rootdir+`/*/package.json`)
    //change to abs then rel to be cross os compatible
    const files = results.map((file)=>(relative(rootdir,resolve(rootdir,file)).split(sep).join('/')))
    const directories = files.map((file)=>(file.split("/")[0]))
    process.chdir(originalDirectory)
    return directories.sort()

}

async function save_samples_data(){
    const samples_dir = await get_samples()
    let samples_data = []
    for(const dir of samples_dir){
        const package_data = await load_json(join(rootdir,dir,"package.json"))
        const astroConfigPath = join(rootdir, dir, "astro.config.mjs");
        const config_url = `file:///${astroConfigPath.replace(/\\/g, '/')}`; // Replace backslashes with forward slashes and add three slashes after 'file:'
        const config_data = await import(config_url).then(module => module.default);
        let config = {}
        if(Object.hasOwn(config_data,"output")){
            config.output = config_data.output
        }else{
            config.output = "static"
        }
        if(Object.hasOwn(config_data,"adapter")){
            config.adapter = config_data.adapter.name
        }else{
            config.adapter = null
        }
        if(Object.hasOwn(config_data,"integrations")){
            config.integrations = config_data.integrations.map((integration)=>(integration.name))
        }else{
            config.inetgrations = []
        }
        samples_data.push({
            dir: dir,
            astro: package_data.dependencies.astro,
            href: `https://github.com/MicroWebStacks/astro-examples/tree/main/${dir}`,
            config:config
        })
    }
    await save_json(samples_data,join(websitedir,"examples.json"))
}

await save_samples_data()
