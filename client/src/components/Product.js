import React from 'react'

const Product = ({ price, quantity, title, category }) => (

  <div>
    {category.title}:{title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)





export default Product
