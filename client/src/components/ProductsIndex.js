import React, { Component} from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import { addToCart } from '../actions/index'
import { getVisibleProducts } from '../reducers/products'
import { Link } from 'react-router-dom'


class ProductsIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      currentProduct: null,
      title: '',
    }

  }

  componentDidMount() {

       fetch('/api/products')
            .then(response => response.json())
            .then(data => this.setState({
                products: data,
                currentProduct: data[0]
            }))
  }

  setProduct(id){
    const currentProduct = this.state.products.filter(product => product.id === id)[0]
    this.setState({
      currentProduct
    })
  }

  render() {

    const products = this.state.products.map((product) => (
      <Link to={`/product/${product.id}`} key={product.id}>
        <h3 className="product-link" onClick={() => this.setProduct(product.id)}>
            {product.title}
        </h3>
      </Link>
    ))

    return (
      <Root>
        <Sidebar>
            {products}
        </Sidebar>
        <Main>
            {
                this.state.currentProduct

                ?

                <ProductItem product={this.state.currentProduct}
                key={this.state.currentProduct.id}
                onAddToCartClicked={() => addToCart(this.state.currentProduct.id)} />

                :

                <h4>...loading</h4>
            }
        </Main>
      </Root>

    )
  }
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

const Root = (props) => (
  <div style= {{
    display: 'flex'
  }} {...props}/>
)

const Sidebar = (props) => (
  <div style= {{
    width: '33vw',
    height: '100vh',
    overflow: 'auto',
    background: '#eee'
  }} {...props}/>
)

const Main = (props) => (
  <div style= {{
    flex: 1,
    height: '100vh',
    overflow: 'auto'
  }}>
    <div style={{ padding: '20px'}} {...props}/>
  </div>
)

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsIndex)
