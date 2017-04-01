import React, { PropTypes } from 'react'
import { Button } from 'reactstrap';

const Product = ({ product, onAddToCartClicked }) => (
  <div>
    <div>
      <h3>service: {product.title}</h3>
      {product.description} - &#36;{product.price}
    </div>
    <Button
      onClick={onAddToCartClicked}>
      'Add to cart'
    </Button>
  </div>
)




export default Product
