import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'
import { Route, Link } from 'react-router-dom'
import Product from './Product'
import ProductDetail from './ProductDetail'
import ProductIndexItem from './ProductIndexItem'
import ProductForIndex from './ProductForIndex'
import { addToCart } from '../actions'

const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>
      {children}
    </div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}


export default ProductsList
