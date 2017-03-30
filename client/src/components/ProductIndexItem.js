import React, { PropTypes }  from 'react'
import ProductForIndex from './ProductForIndex'
import ProductX from './Product'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
import { addToCart } from '../actions'
import { Button } from 'reactstrap';
import CartContainer from '../containers/CartContainer'


const ProductIndexItem = ({ product, onAddToCartClicked }) => (

  <div>
    <div>
      <h3>service: {product.title}</h3>
      {product.description} - &#36;{product.price}
    </div>
    <Button
      onClick={onAddToCartClicked}>
      'Add to cart'
    </Button>
    <CartContainer/>
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
