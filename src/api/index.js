import axios from 'axios'

const ENDPOINT = 'https://react-my-burger-34c89.firebaseio.com'

export default {
  readArticles () {
    return axios.get(ENDPOINT + '/articles')
  },
  createArticle (data) {
    return axios.post(ENDPOINT, data)
  },
  updateArticle (data) {
    return axios.post(ENDPOINT, data)
  },
  deleteArticle (data) {
    return axios.delete(ENDPOINT, data)
  }
}
