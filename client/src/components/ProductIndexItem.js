import React, { Component } from 'react'
import { Button } from 'reactstrap';
import Product from './Product'
import { Route, Link, match } from 'react-router-dom';
import { Main } from '../styles/ProductStyle'
import { addToCart } from '../redux/modules/Cart'




class ProductIndexItem extends Component{


  render(){
    const { product, onAddToCartClicked, match } = this.props
    console.log(product.category.title)



    return (
      <div>
        <div>
          <div>{product.category.title}:
          <Link to={`/products/${product.id}`}> {product.title}</Link>
           | &#36;{product.price}</div>
        </div>
        <Button
          outline color="success" size="sm"
          onClick={() => addToCart(product.id)}>
          add to cart
        </Button>
      </div>
    )
  }
}




export default ProductIndexItem
