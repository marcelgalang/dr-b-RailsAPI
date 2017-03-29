import React, { PropTypes, Component } from 'react'



const Product = ({ price, quantity, title }) => (

  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
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

export default Product
