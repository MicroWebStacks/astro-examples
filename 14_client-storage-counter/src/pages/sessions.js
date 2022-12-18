
const sessions = {}

function get_counter(session_id){
    if(session_id in sessions){
        return sessions[session_id]
    }else{
        return null
    }
}

function set_counter(session_id,counter){
    sessions[session_id] = counter
}

export {
    get_counter,
    set_counter
}
