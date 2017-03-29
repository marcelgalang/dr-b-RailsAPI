import React, { PropTypes, Component } from 'react'
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

const ProductsIndexContainer = ({ products, addToCart }) => (

  <ProductsIndex title="Products">
    <Root>
      <Sidebar>
      {products.map((product) => (
          <SidebarItem key={product.id}>
            <Link to={`/products/${product.id}`}
            key={product.id}>
              {product.title}
            </Link>
          </SidebarItem>
      ))}
      </Sidebar>
      <Main>
        <Route path="/products/:productId"  render={({match}) => (
          <Product
            product={products.find(product => product.id
              == match.params.productId)}

            />
        )}/>
      </Main>
    </Root>



  </ProductsIndex>

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

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart },
)(ProductsIndexContainer)
