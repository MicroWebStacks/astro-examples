import { set } from "../page-data"
import { set_url_hash } from "../cacheManager"

export async function put({request}){
    const content = await request.json()

    set(content.value)
    //set_url_hash() must be ASAP otherwise page won't have a chance to be called
    await set_url_hash('/',content.value)
    console.log(`api/update> put ${content.value}`)
    return new Response(JSON.stringify({}), {
        status: 200
      });    
}
