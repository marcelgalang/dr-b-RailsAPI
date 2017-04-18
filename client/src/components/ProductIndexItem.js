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
          outline color="secondary" size="sm"
          onClick={onAddToCartClicked}>
          add to cart
        </Button>
        
      </div>
    )
  }
}


export default ProductIndexItem

class ProductLikes extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      counter: ++this.state.counter,
    });
  }



  render() {

    return(
      <div><button
      onClick={this.handleClick}>
      Likes
      </button>
       {this.state.counter}
      </div>
    )
  }
}
