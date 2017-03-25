import React, { PropTypes } from 'react'

const Product = ({ price, inventory, title, category, description }) => (
  <div>
    <h2>{category.title} repair</h2>
    <h3>service: {title}</h3>
    {description} - &#36;{price}{inventory ? ` x ${inventory}` : null}
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
