import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Route, match } from 'react-router-dom'
import { addToCart } from '../redux/modules/Cart'
import { getVisibleProducts } from '../redux/modules/Products'
import ProductsList, { selectProduct } from '../components/ProductsList'
import ProductDetail from '../components/ProductDetail'

class Products extends Component {
  render() {
    const { selectProduct, products } = this.props

    return (
      <div>
        <ProductsList products={products} selectProduct={selectProduct} />
        
      </div>
    )
  }
}

export default connect(
  state => ({
    products: state.products,
    product: state.product,
    cart: state.cart
  }), { addToCart, selectProduct }
)(Products)
