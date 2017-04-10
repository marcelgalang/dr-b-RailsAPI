index.js -> Provider -> App.js -> define your React router / Navbar and your routes ->

import Products from './view/Products';

App

  <BrowserRouter>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About}
      </Switch>
    </div>
  </BrowserRouter>


src -> components -> components that are used by more than one once (shareable components)
    -> containers -> Primary setup like App container or root container

    -> views -> /Products -> index.js
                          -> ProductList    -> index.js
                          -> ProductDetail  -> index.js
                          -> Cart           -> index.js
                          -> __tests__      -> Products.test.js
                                            -> ProductList.test.js
                                            -> Cart.test.js
              -> /About   -> index.js
                          -> __tests__

    -> redux -> store.js
             -> modules   -> Auth      -> index.js (reducer and my actions)
                                       -> Auth.reducer.test.js
                                       -> Auth.actions.test.js
                          -> Products  -> index.js (reducer and my actions)
                                       -> Products.reducer.test.js
                                       -> Products.actions.test.js
                          -> Product   -> index.js (reducer and my actions)
                                       -> Product.reducer.test.js
                                       -> Product.actions.test.js
                          -> Cart      -> index.js (reducer and my actions)
                                       -> Cart.reducer.test.js
                                       -> Cart.actions.test.js
    -> styles (css stuff)


class Products extends Component {
  render() {
    const { selectProduct, products } = this.props
    const productDetailsProps = { product, addToCart } = this.props
    return (
      <ProductsList products={products} selectProduct={selectProduct} />
      <Route path={`${match.url}/:productId`} {...productDetailsProps} component={ProductDetail}/>
      <Route exact path={match.url} render={() => (
        <div>Select a Product</div>
      )}/>
    )
  }
}

export default connect(
  state => ({
    products: state.products,
    product: state.product,
    cart: state.cart
  }), { addToCart, removeFromCart, selectProduct }
)(Products)

// ProductDetail/index.js
import React, { Component, PropTypes } from 'react';
class ProductsList extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  handleSelectProduct = product => this.props.selectProduct(product, this.context.router)

  render() {
    const renderProducts = this.props.products.map(product => <span onClick={this.handleSelectProduct(product)}} key={product.id}>{product.name}</span>)

    return (
      <div>
        {renderProjects}
      </div>
    )
  }
}


// /redux/modules/Product/index.js

export const selectProduct = (product, router) => {
  dispatch({ type: 'SELECT_PRODUCT', product })
  router.history.replace(`/products/${product.id}`)
}

export const reducer = (state = {}, action) => {
  switch(action.type) => {
    case 'SELECT_PRODUCT':
      return product;

    default:
      return state;
  }
}
