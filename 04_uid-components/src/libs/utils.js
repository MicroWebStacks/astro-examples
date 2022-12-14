function uid(){
    return Date.now()+"_"+Math.floor(Math.random() * 10000)
  }
  
  function suid(){
    let date = (Date.now()).toString();
    const sub = date.substring(date.length-6,date.length-1);
    return sub+"_"+Math.floor(Math.random() * 10000)
  }
  
export{
    uid,
    suid
}

