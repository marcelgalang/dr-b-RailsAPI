import React from 'react'
import CartContainer from './CartContainer'
import ProductsContainer from './ProductsContainer'
// import PContainer from './PContainer'

const App = () => (
  <div>
      <h1>DR.B Mac Repair</h1>
      <h2>WE FIX JUST ABOUT EVERYTHING</h2>
      <h3>MACS, PCS, TABLETS, CONSOLES, & SMART PHONES</h3>

      <ProductsContainer/>
      <CartContainer/>

  </div>
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

export default App
