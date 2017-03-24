import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'

const ProducForIndex = ({title}) => (
  <Link to={`/products/${title.id}`}>
    {title}
  </Link>
)

ProducForIndex.propTypes = {

  title: PropTypes.string
}

export default ProducForIndex
