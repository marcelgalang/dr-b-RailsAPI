import React, { PropTypes } from 'react'
import { Button } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import Checkout from './Checkout'
import CartContainer from '../containers/CartContainer'

const CartNavDetail  = ({ products, total, totalQuantity, onCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
      <div> {totalQuantity}</div>
  ) : (
    <em>Your cart is empty.</em>
  )


  return (
    <Button outline color="success">
      <Link 
        onClick={onCartClicked}
        disabled={hasProducts ? '' : 'disabled'}
        to={`/cart`}
        render={CartContainer}
        >
        Cart:{nodes}
      </Link>

    </Button>
  )
}

CartNavDetail.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  totalQuantity: PropTypes.number,
  onCheckoutClicked: PropTypes.func
}

export default CartNavDetail
