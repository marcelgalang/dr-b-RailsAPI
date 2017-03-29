import React, { PropTypes } from 'react'

const ProductX = ({ price, quantity, title }) => (

  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)



ProductX.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}






export default ProductX
