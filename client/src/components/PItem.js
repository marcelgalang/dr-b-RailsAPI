import React, { PropTypes } from 'react'
import ProductX from './ProductX'
import { Button } from 'reactstrap';
import * as Components from '../css/ProductStyle'



const PItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <ProductX
      title={product.title}
      price={product.price} />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </div>
)


ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}


export default PItem
