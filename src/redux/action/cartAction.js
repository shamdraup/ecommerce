import { Add_itmes_cart, Delete_itmes_cart, INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT } from "../contants/productContant";

export const addItemsCart = (product) => (dispatch) => {
  dispatch({
    type: Add_itmes_cart,
    payload: product
  });

}



export const removeItemsCart = (id) => (dispatch) => {
  dispatch({
    type: Delete_itmes_cart,
    payload: id
  })
}

export const incrementProductCount = (productId) => (dispatch) => {
  dispatch({
    type: INCREMENT_PRODUCT_COUNT,
    payload: productId,
  })
};

export const decrementProductCount = (productId) => (dispatch) => {
  dispatch({
    type: DECREMENT_PRODUCT_COUNT,
    payload: productId,
  })
};