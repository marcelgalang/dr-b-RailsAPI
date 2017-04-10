import React, { Component } from 'react'
import { Button } from 'reactstrap';
import { Link  } from 'react-router-dom';




class ProductIndexItem extends Component{


  render(){
    const { product, onAddToCartClicked } = this.props
    
    return (
      <div>
        <div>
          <div>{product.category.title}:
          <Link to={`/products/${product.id}`}> {product.title}</Link>
           | &#36;{product.price}</div>
        </div>
        <Button
          outline color="success" size="sm"
          onClick={onAddToCartClicked}>
          add to cart
        </Button>
        <hr/>
      </div>
    )
  }
}




export default ProductIndexItem
