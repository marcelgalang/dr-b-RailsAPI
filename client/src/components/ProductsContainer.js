import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductForIndex from '../components/ProductForIndex'

import ProductsList from '../components/ProductsList'
import { Link } from 'react-router-dom'

const ProductsContainer = ({ products, addToCart }) => (
  <div>
  <ProductsList title="Products">
    {products}
  </ProductsList>

  </div>
)

const products = {products}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart },
)(ProductsContainer)
