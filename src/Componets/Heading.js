import React from 'react'
import { Link } from 'react-router-dom';

const Heading = ({data}) => {
    const mystyle={
            fontSize: "44px",
            fontWeight: "bold",
            color: "#333",
            margin: "100px 20px"
          }
    
  return (
    <>
    <div className='conatiner'>
    <h2 style={mystyle}>{data}</h2>
    <p style={{ textAlign: "center" }}>
                <Link to="/home" >Go to Home </Link>
            </p>
    </div>
    </>
  )
}

export default Heading;