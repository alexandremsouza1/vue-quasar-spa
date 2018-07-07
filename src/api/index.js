import axios from 'axios'

// const ENDPOINT = 'http://localhost:8080'
const ENDPOINT = 'http://spring-vue-quasar.herokuapp.com'

export default {
  readArticles () {
    return axios.get(ENDPOINT + '/article')
  },
  createArticle (data) {
    const changedData = {
      title: data.title,
      text: data.text
    }
    return axios.post(ENDPOINT + '/article', changedData)
  },
  updateArticle (data) {
    return axios.put(ENDPOINT + `/article/${data.id}`, data)
  },
  deleteArticle (data) {
    return axios.delete(ENDPOINT + `/article/${data.id}`)
  },
  searchArticles (query) {
    return axios.get(ENDPOINT + `/article/search?query=${query}`)
  }
}
