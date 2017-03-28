import React, { PropTypes }  from 'react'
import ProductForIndex from './ProductForIndex'
import Product from './Product'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions'
import { Button } from 'reactstrap';


const ProductIndexItem = ({ product, onAddToCartClicked }) => (

  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price} />
    <Button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </Button>
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

ProductIndexItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired
}

export default ProductIndexItem
