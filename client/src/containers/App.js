import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Products from './Products'
import Carts from './Carts'
import Checkout from './Checkout'
import About from './About'

const App = () => (
  <Router >
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About}
      </Switch>
    </div>
  </Router>
)


export default App
