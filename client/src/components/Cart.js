import React, { PropTypes } from 'react'
import Product from './Product'
import { Button } from 'reactstrap';


const CartDetail  = ({ products, total, onCheckoutClicked, onCartClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        category={product.category}
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Your cart is empty.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <Button color="primary"
        onclick={onCartClicked}>
        Save Cart</Button>
      <Button
        color="success"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </Button>
    </div>
  )
}

CartDetail.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default CartDetail
