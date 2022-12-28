import { set } from "../shared"

export async function put({request}){
    const content = await request.json()

    set(content.value)
    console.log(`api/update> put ${content.value}`)
    return new Response(JSON.stringify({}), {
        status: 200
      });    
}
