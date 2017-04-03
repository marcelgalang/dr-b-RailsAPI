import React from 'react'
import { Button } from 'reactstrap';

const Product = ({ price, quantity, title }) => (

  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)





export default Product
