import events from 'events'

const Emitter = new events.EventEmitter()

let started = false
let counter = 0

function start_counting(){
    console.log(`events.js> start_counting() started:${started}`)
    if(started){//start counting only once
        return
    }
    started = true
    setInterval(()=>{
        increment()
        console.log(`events.js> counter = ${counter}`)
        Emitter.emit("count",counter)
    },2000)
}

function increment(){
    counter += 1
}

function get_count(){
    return counter
}

start_counting()

export{
    get_count,
    Emitter
}
