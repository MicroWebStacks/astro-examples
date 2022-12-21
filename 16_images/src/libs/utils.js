import {dirname, normalize, basename, sep,join} from 'path'
let next_uid = 1

function uid(){
    return Date.now()+"_"+Math.floor(Math.random() * 10000)
}
  
function suid(){
    let date = (Date.now()).toString();
    const sub = date.substring(date.length-6,date.length-1);
    return sub+"_"+Math.floor(Math.random() * 10000)
}

function sequence_uid(){
  const result = next_uid
  next_uid += 1
  return result
}

function rel_to_abs(reference,relative){
    return join(dirname(normalize(reference)),relative).replace("file:\\","")
}
  
function project_dir(url){
    return basename(rel_to_abs(url,"../.."))
}

export{
    uid,
    suid,
    sequence_uid,
    project_dir
}
