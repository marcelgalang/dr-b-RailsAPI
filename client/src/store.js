
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'


export function configureStore(){
  return createStore(reducer,
  applyMiddleware(...[ thunk ]))
}

export const store = configureStore()
