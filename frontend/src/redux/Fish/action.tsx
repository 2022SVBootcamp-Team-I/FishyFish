import { ADD_FISH, DELETE_FISH, READ_FISH } from "./types"


export const addFish = (formdata:FormData) =>{
    return{
        type:ADD_FISH,
        payload:formdata
    }
}
export const deleteFish =()=>{
    return{
        type:DELETE_FISH
    }
}
export const readFish=()=>{
    return{
        type:READ_FISH
    }
}