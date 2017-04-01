import React, { Component, PropTypes } from 'react';

class ProductsList extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  handleSelectProduct = product => this.props.selectProduct(product, this.context.router)

  render() {
    const renderProducts = this.props.products.map(product => <span onClick={this.handleSelectProduct(product)} key={product.id}>{product.name}</span>)

    return (
      <div>
        {renderProducts}
      </div>
    )
  }
}


export default ProductsList
