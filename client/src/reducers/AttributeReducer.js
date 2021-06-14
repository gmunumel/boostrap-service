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
    case (constants.ATTRIBUTE_UPDATED):
      const index = newState.all.findIndex(attribute => attribute._id === action.data._id)

      const newArray = [ ...newState.all ]

      newArray[index].name = action.data.name
      newArray[index].type = action.data.type
      newArray[index].value = action.data.value
      newArray[index].parentId = action.data.parentId

      return { ...newState, all: newArray }
    default: 
      return state
  }
}

export default attributeReducer