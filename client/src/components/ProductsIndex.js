import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import ProductIndexItem from './ProductIndexItem'
import ProductsList from './ProductsList'
import Product from './Product'


const ProductsIndex = ({ products }) => (
  <ProductsList title="Products">
    {products.map(product =>
      <ProductIndexItem
        key={product.id}
        product={product}
     />
    )}
  </ProductsList>
)

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps

)(ProductsIndex)
