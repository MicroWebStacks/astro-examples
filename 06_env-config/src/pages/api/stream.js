import {Emitter} from '../events'

export async function get({request}){

    console.log("stream.js> get()")
    
    const stream = new ReadableStream({
        start(controller){
            const events_listener = (counter)=>{
                console.log(`stream.js> Emitter 'count' = ${counter}`)
                const data = `data: ${JSON.stringify({counter})}\r\n\r\n`;
                controller.enqueue(data)
            }
            Emitter.off('count',events_listener)
            Emitter.on('count',events_listener)
        },
        cancel(){
            console.log("stream.js> cancel()")
        }
    })

    return new Response(stream, {
        status: 200,
        headers: {
            'Content-Type': 'text/event-stream',
            'Connection': 'keep-alive',
            'Cache-Control': 'no-cache'          
        }
    });
}
