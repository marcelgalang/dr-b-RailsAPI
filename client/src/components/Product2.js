import React, { PropTypes, Component } from 'react'
import Product_ from './Product'
import { Button } from 'reactstrap';


const Product = ({ product, onAddToCartClicked }) => (

  <h1>XX{product}XX</h1>

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

export default Product
