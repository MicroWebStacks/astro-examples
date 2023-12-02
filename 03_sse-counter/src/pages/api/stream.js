import {Emitter} from '../events'

export async function GET(){

    console.log("stream.js> get()")

    let events_listener

    const stream = new ReadableStream({
        start(controller){
            events_listener = (counter)=>{
                console.log(`stream.js> Emitter 'count' = ${counter}`)
                const data = `data: ${JSON.stringify({counter})}\r\n\r\n`;
                controller.enqueue(data)
            }
            Emitter.off('count',events_listener)
            Emitter.on('count',events_listener)
        },
        cancel(){
            console.log("stream.js> cancel()")
            Emitter.removeListener('count', events_listener)
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
