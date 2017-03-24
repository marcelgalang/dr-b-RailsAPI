import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import './index.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App'
import ProductsContainer from './components/ProductsContainer'
import CartContainer from './components/CartContainer'
import Checkout from './components/Checkout'
import { store } from './store.js'




render(
  <Provider store={store}>
    <Router >
      <div>
        <Route path="/" component={App} />
        <Route path="/products/${prodcut.id}" />
        <Route path="/products" component={ProductsContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
