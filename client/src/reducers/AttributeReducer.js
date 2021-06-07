import constants from '../constants'

var initialState = {
  all: null
}

const attributeReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case (constants.ATTRIBUTES_RECEIVED):
      newState['all'] = action.data
      return newState
    case (constants.ATTRIBUTE_CREATED):
        newState.all.push(action.data)
        return newState
    default: 
      return state
  }
}

export default attributeReducer