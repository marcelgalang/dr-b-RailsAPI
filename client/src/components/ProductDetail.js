import React, { PropTypes, Component } from 'react'
import Product from './Product'
import { Button } from 'reactstrap';


const ProductDetail = ({ product, onAddToCartClicked }) => (
<Main>
<div style={{ marginBottom: 20 }}>
  <Product
    product={product}
     />
  <button
    onClick={onAddToCartClicked}
    >'Add to cart'
  </button>
</div>
</Main>
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

export default ProductDetail
