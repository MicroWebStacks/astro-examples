import {promises as fs} from 'fs';
import { readFile } from 'fs/promises';
import {dirname,join} from 'path'
import {createHash} from 'crypto';
import yaml from 'js-yaml';


async function load_json(abs_path){
  const text = await fs.readFile(abs_path,'utf-8')
  return JSON.parse(text)
}

function generateShortMD5(text) {
  const hash = createHash('md5').update(text, 'utf8').digest('hex');
  return hash.substring(0, 8);
}

async function exists(filePath) {
  try {
    await fs.access(filePath, fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

async function save_file(filePath,content){
  const directory = dirname(filePath)
  if(!await exists(directory)){
    await fs.mkdir(directory, { recursive: true });
  }
  return fs.writeFile(filePath,content)
}

async function save_json(data,file_path){
  await fs.writeFile(file_path,JSON.stringify(data,undefined, 2))
}

async function load_yaml(abs_path){
  const fileContent = await readFile(abs_path,'utf-8')
  const data = yaml.load(fileContent);
  return data;
}


export{
  generateShortMD5,
  exists,
  load_json,
  load_yaml,
  save_json,
  save_file
}
