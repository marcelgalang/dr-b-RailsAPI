import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'
import ProductDetail from './ProductDetail'
import Product from './Product'
import ProductForIndex from './ProductForIndex'
import { Link, Route } from 'react-router-dom'


const ProductsIndex = ({ title, children, addToCart, onAddToCartClicked }) =>
(
  
    <div>
      <h3>{title}</h3>
      <h4>{children}</h4>
    </div>

)


const Root = (props) => (
  <div style={{
    display: 'flex'
  }} {...props}/>
)

const Sidebar = (props) => (
  <div style={{
    width: '33vw',
    height: '100vh',
    overflow: 'auto',
    background: '#eee'
  }} {...props}/>
)

const SidebarItem = (props) => (
  <div style={{
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: '5px 10px'
  }} {...props}/>
)

const Main = (props) => (
  <div style={{
    flex: 1,
    height: '100vh',
    overflow: 'auto'
  }}>
    <div style={{ padding: '20px'}} {...props}/>
  </div>
)

export default ProductsIndex
