import { ActionTypes } from "../constaints/action-type"

const initionalState = {
    numberofcart : 0,
    carts : []
}

export const cartReducer = (state= initionalState,{type,payload})=>{
    switch (type){
        case ActionTypes.GET_NUMBER_CART:
            return{
                ...state
            };
        case ActionTypes.ADD_TO_CART:
            if(state.numberofcart === 0){
                let item = {
                    ...payload,
                    quantity : 1
                }
                state.carts.push(item)
            }
            else{
                let check = false;
                state.carts.map((item,index)=>{
                    if(item._id === payload._id){
                        state.carts[index].quantity++;
                        check = true;
                    }
                });
                if(!check){
                    let _item = {
                        ...payload,
                        quantity: 1
                    }
                    state.carts.push(_item)
                }
            }
            return {
                ...state,
                numberofcart : state.numberofcart + 1
            }
    }
}