import React from 'react';
import ReactStars from 'react-stars'

const Rate = (props) => {
  return (
    <>
<ReactStars count={5} value={props.rate} size={34} color2={'#ffd700'} edit={false} />
</>
  )
}

export default Rate