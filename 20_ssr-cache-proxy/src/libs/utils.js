function uid(){
    return Date.now()+"_"+Math.floor(Math.random() * 10000)
}
  
function suid(){
    let date = (Date.now()).toString();
    const sub = date.substring(date.length-6,date.length-1);
    return sub+"_"+Math.floor(Math.random() * 10000)
}

async function async_put(url, data) {
	const response = await fetch(url, {
		method: 'PUT',
		headers: {
		'Content-type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	return await response.json()
	}

export{
    uid,
    suid,
    async_put
}
