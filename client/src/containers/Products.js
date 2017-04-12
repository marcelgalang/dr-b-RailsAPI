import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsList from '../components/ProductsList'
import ProductDetail from '../components/ProductDetail'
import ProductIndexItem from '../components/ProductIndexItem'
import { Route } from 'react-router-dom'
import { getVisibleProducts } from '../redux/modules/Products'
import { Root, Main, Sidebar, SidebarItem } from '../styles/ProductStyle'
import { addToCart } from '../redux/modules/Cart'
import CartContainer from '../containers/CartContainer'

class Products extends Component {
  render() {
    const { products, addToCart, cart } = this.props
    console.log(cart)
    return(
      <Root>
        <Sidebar>
          <div>{products.map((product) => (
            <SidebarItem key={product.id}>
              <ProductIndexItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product.id)}
                />
            </SidebarItem>
          ))}</div>
        </Sidebar>
        <Main>
          {
            <Route path="/products/:productId"  render={({match}) => (
              <ProductDetail product=        {products.find(product => product.id == match.params.productId)}/>
            )}/>
            ||
            <CartContainer/>
          }

        </Main>
      <ProductsList/>
      </Root>
    )
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  product: state.product,
  cart: state.cart
})

export default connect(
  mapStateToProps, { addToCart }
)(Products)
