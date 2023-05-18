import {
    Save_items,
} from '../contants/productContant'


const intialState={
    products:[],
}

export const productReducer = (state = intialState, action) => {

    switch (action.type) {
        case Save_items:
            return {
                ...state,products:action.payload
            }
        default:
            return state;


    }
}

