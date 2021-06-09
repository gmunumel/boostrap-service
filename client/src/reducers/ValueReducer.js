import constants from '../constants'

var initialState = {
  _id: '',
  name: '',
  value: '',
  all: null
}

const valueReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case (constants.SET_ATTRIBUTE_PARAMS):
      newState['_id'] = action.data._id
      newState['name'] = action.data.name
      newState['value'] = action.data.value
      return newState
    case (constants.VALUE_CREATED):
      newState.all.push(action.data)
      return newState
    case (constants.ATTRIBUTES_FILTERED):
      newState['all'] = action.data
      return newState
    default: 
      return state
  }
}

export default valueReducer