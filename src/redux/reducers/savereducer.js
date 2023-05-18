import { Add_itmes_save, Delete_itmes_save } from "../contants/productContant";

const intialState={
    wishlist: []
}


export const savereducer =(state=intialState,action) =>{


    switch(action.type){
        case Add_itmes_save:
        return{
            ...state,
            wishlist:[...state.wishlist,action.payload]
        }
        case Delete_itmes_save:
           return {
                ...state,
                wishlist:state.wishlist.filter(item => item.id !== action.payload.id)
            }
        default:
            return state;
    }

}