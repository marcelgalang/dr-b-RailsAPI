import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Product from './Product'
import { Route, match } from 'react-router-dom';
import { Main } from '../styles/ProductStyle'
import { addToCart } from '../redux/modules/Cart'




class ProductDetail extends Component{

   onAddToCartClicked = product => addToCart(product.id)

  render(){
    const { product, onAddToCartClicked, match } = this.props
    console.log(this.props.onAddToCartClicked)
    console.log(product.description)



    return (
      <div>
        <div>
          <div>{product.category.title}</div>
          <h1>service: {product.title}</h1>
          <h2>{product.description} - &#36;{product.price}</h2>
        </div>

      </div>
    )
  }
}




export default ProductDetail
