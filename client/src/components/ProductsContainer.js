import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../redux/modules/Products'
import { getVisibleProducts } from '../redux/modules/Products'
import ProductsList from './ProductsList'

const ProductsContainer = ({ products, addToCart }) => (
  <div>
  <ProductsList title="Products" >
    {products}
  </ProductsList>

  </div>
)



const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart },
)(ProductsContainer)
