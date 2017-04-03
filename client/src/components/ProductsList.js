import React, { Component, PropTypes } from 'react';
import { Route, Link,  match } from 'react-router-dom';
import { Root, Main, Sidebar, SidebarItem } from '../styles/ProductStyle'
import ProductDetail from '../components/ProductDetail'
import { addToCart } from '../redux/modules/Cart'

class ProductsList extends Component {

  static contextTypes = {
    router: PropTypes.object,
  }

  handleSelectProduct = product => this.props.selectProduct(product, this.context.router)

  render() {
    const { products } = this.props


    return (
      <Root>
        
      </Root>

    )
  }
}


export default ProductsList
