import constants from '../constants';

const initialState = {
  all: null,
};

const attributeReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case constants.ATTRIBUTES_RECEIVED:
      newState['all'] = action.data;
      return newState;
    case constants.ATTRIBUTE_CREATED:
      return {...newState, all: [...newState.all, action.data]};
    case constants.ATTRIBUTE_DELETED:
      return {
        ...newState,
        all: newState.all.filter(
            (attribute) =>
              attribute._id !== action.data._id &&
            attribute.parentId !== action.data._id,
        ),
      };
    case constants.ATTRIBUTE_UPDATED: {
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

export default attributeReducer;
