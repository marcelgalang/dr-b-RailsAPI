import React, { Component } from 'react'

export default class Products extends Component {

    constructor(props) {

        super(props)

        this.state = {
            products: [],
            title: '',
            description: '',
            price:null
        }

        this.fetchProducts = this.fetchProducts.bind(this)
    }

    componentDidMount() {

        this.fetchProducts()
    }

    fetchProducts() {

        fetch('/api/products')
            .then(response => response.json())

            .then(data => this.setState({ products: data }))

    }

    render() {

        const childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {
            fetchProducts: this.fetchProducts
        }))

        const products = this.state.products.map((product) => (

            <div key={product.id}>
                <h1>{product.title}</h1>
                <p>
                    Description: {product.description} | Price: {product.price} |
                </p>
            </div>
        ))


        return (
            <div>
                <h1>Product Inventory</h1>

                {childrenWithProps || products}

            </div>
        )
    }
}
