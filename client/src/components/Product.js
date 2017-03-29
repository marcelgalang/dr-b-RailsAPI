import React, { PropTypes } from 'react'
import { Button } from 'reactstrap';
import CartContainer from '../containers/CartContainer'
import { addToCart } from '../actions'
import {onAddToCartClicked} from '../containers/ProductsIndexContainer'


const Product = ({ product, addToCart, onAddToCartClicked }) =>
  (
    <div>
      <div>
        <h3>service: {product.title}</h3>
        {product.description} - &#36;{product.price}
      </div>
      <button

        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
      <CartContainer/>
    </div>
  );

  Product.propTypes = {
    product: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCartClicked: PropTypes.func.isRequired
  }




export default Product
