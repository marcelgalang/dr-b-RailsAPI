import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App/App'
import Services from './components/Services'
import About from './components/About'
import Home from './components/Home'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/services" component={Services}/>
        <Route path="/about" component={About} />
    </Route>
)
