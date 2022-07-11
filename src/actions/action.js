import { INCREMENT,DECREMENT } from "../reducers/types"


export const incrementnumber = () =>{
    return {
        type: INCREMENT
    }
}
export const decrementnumber = () =>{
    return {
        type: DECREMENT
    }
}