import { get_data } from '../data';

export async function get({request}){

    console.log("dyn_js.js> get()")

    const text = `document.querySelector(".client").textContent = "${get_data()}"`

    return new Response(text, {
        status: 200,
        headers: {
            'Content-Type': 'text/javascript',
            'Cache-Control': 'no-cache'          
        }
    });
}
