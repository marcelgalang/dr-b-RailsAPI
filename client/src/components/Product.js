import React, { PropTypes } from 'react'
import { Button } from 'reactstrap';
import CartContainer from '../containers/CartContainer'
import { addToCart } from '../actions'
import {onAddToCartClicked} from '../containers/ProductsIndexContainer'


const Product = ({ product, addToCart }) =>
  (
    <div>
      <div>
        <h3>service: {product.title}</h3>
        {product.description} - &#36;{product.price}
      </div>
      <Button
        onClick= {() => addToCart(product.id)}
        >
        Add to cart
      </Button>
      <CartContainer/>
    </div>
  );






export default Product
