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
      return { ...newState, all: [ ...newState.all, action.data ] }
    case (constants.ATTRIBUTE_DELETED):
      return { ...newState, 
        all: newState.all.filter(attribute => attribute._id !== action.data._id 
          && attribute.parentId !== action.data._id) }
    default: 
      return state
  }
}

export default attributeReducer