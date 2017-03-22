import React, { PropTypes }  from 'react'
import ProductForIndex from './ProductForIndex'

const ProductIndexItem = ({ product }) => (
  <div>
    <ProductForIndex
      title={product.title}
     />
  </div>
)

ProductIndexItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired
}

export default ProductIndexItem
