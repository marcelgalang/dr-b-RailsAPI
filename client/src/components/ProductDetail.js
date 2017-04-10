import React, { Component } from 'react'
import { addToCart } from '../redux/modules/Cart'




class ProductDetail extends Component{


  render(){
    const { product, match } = this.props

    return (
      <div>
        <div>
          <div>{product.category.title} service</div>
          <h1>{product.title}</h1>
          <h2>description: {product.description}</h2> <div>&#36;{product.price}</div>
        </div>

      </div>
    )
  }
}




export default ProductDetail
