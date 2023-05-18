import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { removeItemsCart, decrementProductCount, incrementProductCount } from '../redux/action/cartAction'
import Heading from './Heading'
import Load from './Load'
import Rating from './Rating'
import '../Styles/Cart.css'
import { useNavigate } from 'react-router'
const Cart = () => {
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const deletefromcart = (product) => dispatch(removeItemsCart(product))
  const buynow = (product) => {
    dispatch(removeItemsCart(product))
    naviagte('/ordersucess');

  }


  function handleIncrement(product) {
    dispatch(incrementProductCount(product))

  }

  function handleDecrement(product) {
    if (product.count === 1) {
      var res = window.confirm('Do you want to remove the product from the cart?');
      if (res)
        deletefromcart(product)
    }
    else
      dispatch(decrementProductCount(product))

  }
  function deleteallfromcart(products) {
    products.forEach((product) => deletefromcart(product))
    naviagte('/ordersucess');
  }
   const clearcart = (products) => {
    products.forEach((product) => deletefromcart(product))
   }


  const products = useSelector(state => state.cart.cartproducts);
  const totalPrice = products.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.count * currentProduct.price;
  }, 0);

  const totalQuantity = products.reduce((accumulator, currentProduct) => {
    return accumulator + currentProduct.count;
  }, 0);
  if (totalQuantity === 0) {
    return <Heading data="No product in Cart" />;
  }
  return (
    <div className='cart'>
      {products? products.map((product, index) => (
        <div key={index} className='cart-product'>
          <div className="productcard dark">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="productcard-body">
              <div className="text-section container">
                <h5 className="card-title1">{product.title}</h5>
                <p className="card-text1">{product.description}</p>
                <Rating rate={product.rating.rate} />
              </div>
              <div className="cta-section container">
                <div className='price'>${(product.count * product.price).toFixed()}</div>
                <div className="number-input-container">
                  <div className="number-input-buttons">
                    <button className="number-input-button" type="button" onClick={() => handleIncrement(product)}>+</button>
                  </div>
                  <input type="number" className="number-input" value={product.count} readOnly />
                  <div className="number-input-buttons">
                    <button className="number-input-button" type="button" onClick={() => handleDecrement(product)}>-</button>
                  </div>
                </div>
                <button type="button" className="btn btn-secondary" onClick={() => buynow(product)}>Buy Now</button>
                <button type="button" className="btn btn-secondary" onClick={() => deletefromcart(product)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      )):<Load/>
      }
      {totalQuantity > 0 ? (<div className="cart-component">
        <div>
          <span>Total Quantity</span>
          <span className="product-count">{totalQuantity}</span>
        </div>
        <div>
        <span >Total Bill$</span>
          <span className="cart-total"> {totalPrice.toFixed(2)}</span>
        </div>
        <button type="button" className="btn btn-secondary" onClick={() => deleteallfromcart(products)}>Buy All</button>
        <button type="button" className="btn btn-secondary" onClick={() => clearcart(products)}>Clear Cart</button>
      </div>) : <div></div>}

    </div>
  )
}

export default Cart