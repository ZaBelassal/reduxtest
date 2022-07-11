import { INCREMENT,DECREMENT } from "../reducers/types"


export const incrementNumber = () =>{
    return {
        type: INCREMENT
    }
}
export const decrementNumber = () =>{
    return {
        type: DECREMENT
    }
}