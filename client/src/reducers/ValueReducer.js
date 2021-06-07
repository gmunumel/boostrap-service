import constants from '../constants'

var initialState = {
  all: null
}

const valueReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case (constants.VALUES_RECEIVED):
      newState['all'] = action.data
      return newState
    case (constants.VALUE_CREATED):
        newState.all.push(action.data)
        return newState
    default: 
      return state
  }
}

export default valueReducer