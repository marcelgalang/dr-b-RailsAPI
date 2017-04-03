import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductsList, { selectProduct } from '../components/ProductsList'
import ProductDetail from '../components/ProductDetail'
import ProductIndexItem from '../components/ProductIndexItem'
import { Route, Link, match} from 'react-router-dom'
import { getVisibleProducts } from '../redux/modules/Products'
import { Root, Main, Sidebar, SidebarItem } from '../styles/ProductStyle'
import { addToCart } from '../redux/modules/Cart'

class Products extends Component {
  render() {
    const { products, selectProduct, addToCart } = this.props
    console.log(this.props)


    return(
      <Root>
      <ProductsList products={products} selectProduct={selectProduct} addToCart={addToCart}/>

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
          <Route path="/products/:productId"  render={({match}) => (
            <ProductDetail product=
              {products.find(product => product.id == match.params.productId)}/>
          )}/>
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
  mapStateToProps, { selectProduct, addToCart }
)(Products)
