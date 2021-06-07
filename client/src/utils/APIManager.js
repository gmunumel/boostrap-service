import superagent from 'superagent'
import Promise from 'bluebird'
import { BASE_URL } from '../base'

const apiManager = {
  
  handleGet: (url, params) => {
    return new Promise((resolve, reject) => {
      superagent
      .get(BASE_URL + url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          reject(err)
          return
        }

        const confirmation = response.body.confirmation
        if (confirmation !== 'success') {
          reject(new Error(response.body.message))
          return
        }

        resolve(response.body)
      })
    })
  },

  handlePost: (url, body) => {
    return new Promise((resolve, reject) => {
      superagent
      .post(BASE_URL + url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          reject(err)
          return
        }

        const confirmation = response.body.confirmation
        if (confirmation !== 'success') {
          reject(new Error(response.body.message))
          return
        }

        resolve(response.body)
      })
    })
  },

  handlePut: () => {

  },

  handleDelete: () => {

  }
}

export default apiManager