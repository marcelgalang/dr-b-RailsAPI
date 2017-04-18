import { receiveProducts } from '../modules/Products'

export const getAllProducts = () => dispatch => {
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
    dispatch(receiveProducts(products))
  })
}



export const updateProduct = (product) => {
  console.log(JSON.stringify({product: product}))
  fetch(`/api/products/${product.id}`, {
    method: 'PUT',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({product: product})
  })
  .then(response => response.json()
    ).catch(error => {
      return error;
    });
    
  }

  export const updateProducts = (products) => {
    fetch(`/api/products/`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({products: products})
    })
    .then(response => response.json()
      ).catch(error => {
        return error;
      });
    }
