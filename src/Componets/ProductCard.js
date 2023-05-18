import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

import '../Styles/productcard.css'


import Rating from './Rating';


const ProductCard = (props) => {


  const navigate = useNavigate();

  const viewProductCard = (id) => {
    navigate(`/details/${id}`);
  }

  return (
    <>
      <Card className='card' onClick={()=>viewProductCard(props.data.id)} >
        <div style={{ display: 'flex', height: '240px', width: '240px' }}>
          <Card.Img variant="top" src={props.data.image} alt="...img" />
        </div>
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Text>
            {props.data.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="contain">
          <Rating rate={props.data.rating.rate} />
          <Card.Text>
            $${props.data.price}
          </Card.Text>
          <button type="button" className="btn btn-secondary btn-sm" onClick={()=>viewProductCard(props.data.id)} >View Product</button>
        </ListGroup>
      </Card>

    </>
  )
}

export default ProductCard