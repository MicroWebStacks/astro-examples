import { set_counter } from "../sessions"

export async function put({request}){
    const content = await request.json()

    set_counter(content.session_id,content.counter)
    console.log(`api/counter> put ${content.counter} for session_id ${content.session_id}`)
    return new Response(JSON.stringify({}), {
        status: 200
      });    
  }
  