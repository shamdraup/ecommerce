import React from 'react'
import '../Styles/Order.css'
import Heading from './Heading'
const Order = () => {
  return (
    <div className="order-form-container">
        <div className="thank-you-message">
          <h2>Thank You for Your Order!</h2>
          <p>We have received your order and will begin processing it soon.</p>
          <Heading data={"See You Soon "}/>
        </div>
        </div>
   
  )
}

export default Order;