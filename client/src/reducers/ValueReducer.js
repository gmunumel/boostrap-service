import constants from '../constants';

const initialState = {
  _id: '',
  name: '',
  value: '',
  all: null,
};

const valueReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case constants.SET_ATTRIBUTE_PARAMS:
      newState['_id'] = action.data._id;
      newState['name'] = action.data.name;
      newState['value'] = action.data.value;
      return newState;
    case constants.ATTRIBUTE_CREATED:
      return {...newState, all: [...newState.all, action.data]};
    case constants.ATTRIBUTES_FILTERED:
      newState['all'] = action.data;
      return newState;
    case constants.ATTRIBUTE_DELETED:
      return {
        ...newState,
        all: newState.all.filter(
            (attribute) =>
              attribute._id !== action.data._id &&
            attribute.parentId !== action.data._id,
        ),
      };
    case constants.ATTRIBUTE_UPDATED_VALUES: {
      if (newState.all === null) {
        return state;
      }

      const index = newState.all.findIndex(
          (attribute) => attribute._id === action.data._id,
      );

      const newArray = [
        ...newState.all.slice(0, index), // everything before current post
        {
          ...newState.all[index],
          name: action.data.name,
          type: action.data.type,
          value: action.data.value,
          parentId: action.data.parentId,
        },
        ...newState.all.slice(index + 1), // everything after current post
      ];

      return {...newState, all: newArray};
    }
    default:
      return state;
  }
};

export default valueReducer;
