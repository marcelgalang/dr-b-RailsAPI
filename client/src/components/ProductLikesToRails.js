import React, { Component } from 'react';
import { updateProduct } from '../redux/api/ProductsApi.js';
import { Button } from 'reactstrap';



class ProductLikesToRails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      product: this.props.product
    };

     this.handleClick = this.handleClick.bind(this);
  }





  handleClick() {
      this.setState({
        counter: ++this.state.product.upvote,
      });
      updateProduct(this.props.product)
    }

  render() {
    const { product } = this.props
    return(
      <div><Button
      color="secondary" size="sm"
      onClick={this.handleClick}
      id={product.id}>
      likes: {product.upvote}
      </Button>
      </div>
    )
  }
}





export default ProductLikesToRails
