import React, { Component, PropTypes } from 'react';
import { Root } from '../styles/ProductStyle'

class ProductsList extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  handleSelectProduct = product => this.props.selectProduct(product, this.context.router)

  render() {


    return (
      <Root>

      </Root>

    )
  }
}


export default ProductsList
