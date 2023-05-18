import React, { useEffect, useState } from 'react'


import { useParams } from 'react-router'
import axios from 'axios';

import '../Styles/ViewProduct.css'
import ProductCard from './ProductCard'
import Heart from "react-animated-heart";


import { useDispatch, useSelector } from 'react-redux';
import { addItemsCart } from '../redux/action/cartAction';
import { addItmesSave, deleteItmesSave } from '../redux/action/saveAction';

const ViewProduct = () => {


    const [product, Setproduct] = useState({});
    const [isClick, setClick] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    const wishlistproduct = useSelector(state => state.save.wishlist);
    const cartproduct = useSelector(state => state.cart.cartproducts);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((response) => response.data)
            Setproduct(response);
        };
        fetchData();
      
    }, [id]);
useEffect(() => {
    // check if the product is already in the wishlist
    const isInWishlist = wishlistproduct.some(prod => prod.id === product.id);
    setClick(isInWishlist);
}, [product, wishlistproduct]);



    const relatedproducts = useSelector(state => state.allproducts.products);
    const moreProducts = relatedproducts.filter((prod) => product.category === prod.category && product.id !== prod.id);
    const addToCart = (product) => {
        if(cartproduct.find(prod => prod.id === product.id)){
        const res=window.confirm('product already in cart do want to add the same product')
        if(res)
        dispatch(addItemsCart(product))
        }
        else
        dispatch(addItemsCart(product))
    }

    const handleSave = (product) => {
        if (!isClick)
        dispatch(addItmesSave(product));
        else
        dispatch(deleteItmesSave(product))
        setClick(!isClick)
    }

    return (
        <>
                <div className="productcard dark">
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="productcard-body">
                        <div className="text-section">
                            <h5 className="card-title1">{product.title}</h5>
                            <p className="card-text1">{product.description}</p>
                        </div>
                        <div className="cta-section">
                            <div className='price'>${product.price}</div>
                            <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                            <Heart isClick={isClick} onClick={() => handleSave(product)} />
        
                        </div>
                    </div>
                </div>
            
            <h2>Related Products</h2>
            <div className='moreproduct'>
                {
                    moreProducts.length && moreProducts.map((prod,index) => (
                        <ProductCard key={index} data={prod} />
                    ))
                }
            </div>



        </>
    )
}

export default ViewProduct;


