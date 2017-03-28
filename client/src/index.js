import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './containers/App'
import ProductsContainer from './containers/ProductsContainer'
import ProductsIndexContainer from './containers/ProductsIndexContainer'
import CartContainer from './containers/CartContainer'
import Checkout from './components/Checkout'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { getAllProducts } from './actions'
import {createLogger} from 'redux-logger'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())


render(
  <Provider store={store}>
    <Router >
      <div>
        <Route path="/" exact={true} component={App} />
        <Route  path="/products" component={ProductsIndexContainer} />
        <Route  path="/products/:id" component={ProductDetail} />

        <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
