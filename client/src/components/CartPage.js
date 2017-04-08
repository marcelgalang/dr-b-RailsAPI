import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import * as cartActions from '../redux/modules/Carts'
import CartList from './CartList'
import createFragment from 'react-addons-create-fragment'

class CartPage extends Component {

  render(){
    const carts = this.props.carts
    console.log(this.props.carts)
    return(
      <div className="col-md-12">
        <h1>Carts</h1>
        <div className="col-md-4">
          {carts}
          <CartList carts={this.props.carts} />
        </div>
      </div>
    )
  }
}

CartPage.propTypes= {
  carts: PropTypes.object.isRequired
};



export default connect(
  state =>({ carts: state.carts.key})
)(CartPage);
