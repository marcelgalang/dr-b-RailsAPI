import React, { PropTypes } from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

const CartNavDetail  = ({ products, total, totalQuantity, onCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
      <div> {totalQuantity}</div>
  ) : (
    <em>Your cart is empty.</em>
  )


  return (
    <Button outline color="secondary"
      disabled={hasProducts ? '' : 'disabled'}>
      <Link
        onClick={onCartClicked}
        to={`/cart`}>
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
