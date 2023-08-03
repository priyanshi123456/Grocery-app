
import { ActionTypes } from "../constaints/action-type"
export const addtocart = (product)=>{
    return {
        type : ActionTypes.ADD_TO_CART,
        payload : product
    }
}