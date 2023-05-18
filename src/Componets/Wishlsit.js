import React from 'react'

import { addItemsCart } from '../redux/action/cartAction'
import { useDispatch, useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { deleteItmesSave } from '../redux/action/saveAction';

import Heading from './Heading';

import { useNavigate } from 'react-router';

import '../Styles/Wishlist.css'

const Wishlsit = () => {


  const dispatch = useDispatch();
  const navigate=useNavigate();
  const viewProductCard = (id) => {
    navigate(`/details/${id}`);
  }
  const Addtocart = (product) => {
    dispatch(addItemsCart(product));
    dispatch(deleteItmesSave(product))

  }

  const removefromsave=(product) => {
    dispatch(deleteItmesSave(product));
  }

const wishlistproduct=useSelector(state=>state.save.wishlist);
const mystyle={
  display:"flex",
  flexDirection:"row",
  flexWrap:"wrap",
  justifyContent:"center",
  alignItems: "center",
  margin:"20px"
}
  return (
   <>
    <div style={mystyle} > 
    {wishlistproduct.length ===0 ? <Heading data={"No Saved Product" }/> : 
     wishlistproduct.map((product,index)=>(
        <Card className='card' key={index}  >
        <div style={{ display: 'flex', height: '240px', width: '240px' }} onClick={()=>viewProductCard(product.id)}>
          <Card.Img variant="top" src={product.image} alt="...img" />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="contain">
          <Card.Text>
            $${product.price}
          </Card.Text>
          <ListGroup>
          <button type="button" className="btn btn-secondary btn-sm" onClick={()=>removefromsave(product)} >Remove from Wishlist</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={()=>Addtocart(product)} >Add to Cart</button>
          </ListGroup>
        </ListGroup>
      </Card>
      ))
    }
    </div>
   </>
  )
}

export default Wishlsit