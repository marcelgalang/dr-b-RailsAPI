import { combineReducers } from 'redux'

export const selectProduct = (product, router) => dispatch => {
  ({
    type: 'SELECT_PRODUCT',
    product
  })
  router.history.replace(`/products/${product.id}`)
}



const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_PRODUCT':
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      return state
  }
}

export default combineReducers({
  reducer
})
