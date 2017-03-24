import React, { Component} from 'react'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from './ProductItem'
import ProductsList from './ProductsList'
import Product from './Product'


export default class ProductsIndex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: [],
      currentProduct: null,
      title: '',
    }

  }

  componentDidMount() {

       this.fetchProducts()
  }

  fetchProducts() {
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
      <div key={product.id}>
        <h3 className="product-link" onClick={() => this.setProduct(product.id)}>
            {product.title}
        </h3>
      </div>
    ))

    return (
      <div id="main-container">
        <div id="products-container">
            {/*<Link to="/products/new">Add A product</Link>*/}
            {products}
        </div>
        <div id="product-main-container">
            {
                this.state.currentProduct

                ?

                <ProductItem product={this.state.currentProduct} />

                :

                <h4>...loading</h4>
            }
        </div>
      </div>

    )
  }

}
