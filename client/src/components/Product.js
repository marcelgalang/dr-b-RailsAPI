import React, { PropTypes } from 'react'

const Product = ({ price, inventory, title, category, description }) => (
  <div>
    
    <h3>service: {title}</h3>
    {description} - &#36;{price}{inventory ? ` x ${inventory}` : null}
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

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string
}

export default Product
