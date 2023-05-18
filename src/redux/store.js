import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducers/productreducer';
import { cartReducer } from './reducers/cartreducer';
import { savereducer } from './reducers/savereducer';

const reducer = combineReducers({
    allproducts: productReducer,
    cart: cartReducer,
    save: savereducer,
});

const intialState = {};

const middleware = [thunk];


const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;