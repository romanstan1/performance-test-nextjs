import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer, {initialState} from './reducer'

const customMiddleWare = store => next => action => {
  // console.log('store and action in middleware!:', store, action)
  next(action);
}
const middleware = [
  customMiddleWare,
  thunkMiddleware
  ,logger
]

export function initializeStore (initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}

function logger({getState}) {
  return (next) => (action) => {
    console.log('dispatching', action)
    let val = next(action)
    console.log('state', getState())
    return val
  }
}
