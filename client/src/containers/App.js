import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './Products'
import CartContainer from './CartContainer'
import Checkout from '../components/Checkout'
import About from '../components/About'
import Home from '../components/Home'
import Navbar from '../components/Navbar'


const App = () => (
  <Router >
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  </Router>
)

export default App
