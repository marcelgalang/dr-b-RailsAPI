import { createStore, applyMiddleware } from 'redux'
import { reducer, combineReducers } from './modules/Auth'
import thunk from 'redux-thunk'
import { getAllProducts } from './modules/Products'
import createLogger from 'redux-logger'



const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())
