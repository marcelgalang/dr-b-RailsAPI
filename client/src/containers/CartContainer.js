import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkout } from '../redux/modules/Cart'
import { getTotal, getCartProducts } from '../redux/modules/reducers'
import Cart from '../components/Cart'
import { Root, Main, Sidebar, SidebarItem } from '../styles/ProductStyle'
import Products from './Products'


const CartContainer = ({ products, total, checkout }) => (
  <Root>
  <Sidebar>
    <Products/>
  </Sidebar>
  <Main>
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    />
  </Main>
  </Root>
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})



export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
