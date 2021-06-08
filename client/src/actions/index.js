import constants from '../constants'
import { APIManager } from '../utils'

const postData = (path, data, actionType) => {
  return (dispatch) => APIManager
    .handlePost(path, data)
    .then(response => {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: response.results || response.result
        })
      }

      return response
    })
    .catch(err => {
      throw err
    })
}

const getData = (path, params, actionType) => {
  return (dispatch) => APIManager
    .handleGet(path, params)
    .then(response => {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: response.results || response.result
        })
      }

      return response
    })
    .catch(err => {
      throw err
    })
}

// const putData = (path, data, actionType) => {
//   return (dispatch) => APIManager
//     .handlePut(path, data)
//     .then(response => {
//       if (actionType != null) {
//         dispatch({
//           type: actionType,
//           data: response.results || response.result
//         })
//       }

//       return response
//     })
//     .catch(err => {
//       throw err
//     })
// }

const deleteData = (path, actionType) => {
  return (dispatch) => APIManager
    .handleDelete(path)
    .then(response => {
      if (actionType != null) {
        dispatch({
          type: actionType,
          data: response.results || response.result || null
        })
      }

      return response
    })
    .catch(err => {
      throw err
    })
}

const actions = {

  fetchAttributes: (params) => {
    return dispatch => {
      return dispatch(getData('/api/attribute', params, constants.ATTRIBUTES_RECEIVED))
    }
  },

  fetchAttributesBy: (params) => {
    return dispatch => {
      return dispatch(getData('/api/attribute', params, constants.ATTRIBUTES_FILTERED))
    }
  },
  
  createAttribute: (params) => {
    return dispatch => {
      return dispatch(postData('/api/attribute', params, constants.ATTRIBUTE_CREATED))
    }
  },

  updateAttribute: (/*data*/params) => {
    return dispatch => {
      //return dispatch(putData('/api/attribute', data, constants.ATTRIBUTE_UPDATED))
      return dispatch(postData('/api/attribute/update', params, constants.ATTRIBUTE_UPDATED))
    }
  },

  deleteAttribute: (/*data*/params) => {
    return dispatch => {
      return dispatch(deleteData('/api/attribute/delete', params, constants.ATTRIBUTE_DELETED))
    }
  },

  setAttributeParams: (params) => {
    return dispatch => {
      return dispatch({
        type: constants.SET_ATTRIBUTE_PARAMS,
        data: params
      })
    }
  },
}

export default actions