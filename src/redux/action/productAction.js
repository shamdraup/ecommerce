import axios from 'axios';
import { Save_items } from '../contants/productContant';



export const getProduct = () => async (dispatch) => {
    const  data  = await axios.get(`https://fakestoreapi.com/products/`)
        .then((response) => response.data)
        .catch((err) => {
            console.log("Err: ", err);
        });
     dispatch({
        type: Save_items,
        payload:data
    });
    
}



