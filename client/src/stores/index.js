import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {attributeReducer, valueReducer} from '../reducers';

let store = null;

// Be sure to ONLY add this middleware in development!
const middleware =
  process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];

const reducer = {
  createStore: () => {
    const reducers = combineReducers({
      attribute: attributeReducer,
      value: valueReducer,
    });

    store = createStore(reducers, applyMiddleware(...middleware));

    return store;
  },

  currentStore: () => {
    return store;
  },
};

export default reducer;
