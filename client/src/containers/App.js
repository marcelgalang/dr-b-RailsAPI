import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'


const App = () => (
  <div>
      <h2 className="text-info" >DR.B Service Shop</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
