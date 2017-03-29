import React, { PropTypes } from 'react'
import ProductItem from './ProductItem'
import ProductDetail from './ProductDetail'
import Product from './Product'
import ProductForIndex from './ProductForIndex'
import { Link, Route } from 'react-router-dom'


const ProductsIndex = ({ title, children, addToCart, onAddToCartClicked }) =>
(
  <Root>
  <Sidebar>
    <div>
      <h3>{title}</h3>
      <div>{children.map((product) => (
          <SidebarItem key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title}
            </Link>
          </SidebarItem>
      ))}</div>
    </div>
  </Sidebar>
  <Main>

    <Route path="/products/:productId"  render={({match}) =>

    (
      <Product
        product={children.find(product => product.id == match.params.productId)}
        
        />

    )}/>
  </Main>
  </Root>
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
