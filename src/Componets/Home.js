import React, { useState,useEffect } from 'react'
import Productlist from './Productlist'
import Filter from './Filter'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/action/productAction'

import '../Styles/Home.css'
const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.allproducts.products);
  const [products,Setproducts]=useState([]);
  useEffect(() => {
    dispatch(getProduct())
}, [dispatch]);
  return (
    <div className="home-container">
      <div className="filter-container">
        <Filter products={data} setFilteredProducts={Setproducts}/>
      </div>
      <div className="productlist-container">
        {products.length>0?(<Productlist data={products}/>):(<Productlist data={data}/>)}
      </div>
    </div>
  );
}
export default Home