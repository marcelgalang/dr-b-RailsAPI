import { receiveProducts } from '../modules/Products'

export const getAllProducts = () => dispatch => {
  fetch('/api/products')
    .then(response => response.json())
    .then(products => {
    dispatch(receiveProducts(products))
  })
}
