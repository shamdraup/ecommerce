
import {Add_itmes_save,Delete_itmes_save,Move_to_cart} from '../contants/productContant';


export const addItmesSave=(product)=>(dispatch) =>{

    dispatch({
        type: Add_itmes_save,
        payload:product
    });

}


export const deleteItmesSave=(product)=>(dispatch) =>{
    dispatch({
        type: Delete_itmes_save,
        payload:product
    })
}


export  const moveToCart=(product)=>(dispatch) =>{

    dispatch({
        type: Move_to_cart,
        payload:product
    })
}