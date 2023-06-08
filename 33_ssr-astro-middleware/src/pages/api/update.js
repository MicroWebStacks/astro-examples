import { set } from "../page-data"
import { update_url_hash } from "../cacheManager"

export async function put({request}){
    const content = await request.json()

    set(content.value)
    await update_url_hash('/',content.value)
    //call purge in proxy mode
    console.log(`api/update> put ${content.value}`)
    return new Response(JSON.stringify({}), {
        status: 200
      });    
}
