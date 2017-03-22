import React, { PropTypes } from 'react'

const ProducForIndex = ({title}) => (
  <h3 id='sidebar'>
    {title}
  </h3>
)

ProducForIndex.propTypes = {

  title: PropTypes.string
}

export default ProducForIndex
