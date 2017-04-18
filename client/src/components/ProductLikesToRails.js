import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { counterFunction } from '../redux/modules/Products'
import  *  as actions from '../redux/modules/Products'
import { store } from '../redux/store'
import { addLike } from '../redux/modules/Product'
import { updateProduct } from '../redux/api/ProductsApi.js'

class ProductLikesToRails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      product: this.props.product
    };

     this.handleClick = this.handleClick.bind(this);
     this.updateProductState = this.updateProductState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.product.id != nextProps.product.id) {
      this.setState({product: nextProps.prodcut});
    }
  }

  updateProductState(event) {
    const product = this.state.product;
    const field = event.target.name;
    product[field] = event.target.value;
    return this.setState({product:product})
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
      <div><button
      onClick={this.handleClick}
      id={product.id}>
      Likes
      </button>

       {product.upvote}

      </div>
    )
  }
}





export default ProductLikesToRails
