import superagent from 'superagent'
import Promise from 'bluebird'

const apiManager = {
  
  handleGet: (url, params) => {
    return new Promise((resolve, reject) => {
      superagent
      .get(url)
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
      .post(url)
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