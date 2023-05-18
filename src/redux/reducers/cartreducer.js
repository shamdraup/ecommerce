import {
    Add_itmes_cart,
    Delete_itmes_cart, INCREMENT_PRODUCT_COUNT, DECREMENT_PRODUCT_COUNT
} from '../contants/productContant'

const intialState = {
    cartproducts: []
}

export const cartReducer = (state = intialState, action) => {
    switch (action.type) {
        case Add_itmes_cart:
            {
                const res = state.cartproducts.some(prod => prod.id === action.payload.id)
                if (res) {
                    return {
                        ...state,
                        cartproducts: state.cartproducts.map((product) =>
                            product.id === action.payload.id
                                ? { ...product, count: product.count + 1 }
                                : product)
                    }
                }
                return {
                    ...state,
                    cartproducts: [...state.cartproducts, { ...action.payload, count: 1 }]
                }
            }
        case INCREMENT_PRODUCT_COUNT:
            return {
                ...state,
                cartproducts: state.cartproducts.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, count: product.count + 1 }
                        : product
                ),
            };
        case DECREMENT_PRODUCT_COUNT:
            return {
                ...state,
                cartproducts: state.cartproducts.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, count: product.count - 1 }
                        : product
                ),
            };
        case Delete_itmes_cart:
            return {
                ...state,
                cartproducts: state.cartproducts.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;

    }


}
