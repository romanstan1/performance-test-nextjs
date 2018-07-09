import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducer, {initialState} from './reducer'

const customMiddleWare = store => next => action => {
  next(action);
}
const middleware = [
  customMiddleWare,
  thunkMiddleware
]

export function initializeStore (initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
}
