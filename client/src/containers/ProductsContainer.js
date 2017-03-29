import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductDetail from '../components/ProductDetail'
import ProductsList from '../components/ProductsList'
import ProductIndexItem from '../components/ProductIndexItem'
import Product from '../components/Product'
import ProductsIndex from '../components/ProductsIndex'
import ProductForIndex from '../components/ProductForIndex'


const ProductsContainer = ({ products, addToCart }) => (

  <ProductsList title="Products">
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToCartClicked={() => addToCart(product.id)} />
    )}
  </ProductsList>

)



const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
