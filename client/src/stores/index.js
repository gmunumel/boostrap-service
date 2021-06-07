import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { attributeReducer, valueReducer } from '../reducers'

let store = null

const reducer = {
  createStore: () => {
    const reducers = combineReducers({
      attribute: attributeReducer,
      value: valueReducer
    })

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }
}

export default reducer