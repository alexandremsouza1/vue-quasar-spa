/*
export const someAction = (state) => {}
 */
import api from '../../api/index'

export const getAllArticles = async ({ commit, state }) => {
  await api
    .readArticles()
    .then(res => {
      commit('SET_ARTICLES', res)
    })
    .catch(err => {
      console.log(err)
    })
}
export const addArticle = ({ commit, state }, article) => {
  api
    .createArticle(article)
    .then(req => {
      commit('ADD_ARTICLE', article)
    })
    .catch(err => console.log(err))
}
export const deleteArticle = ({ commit, state }, article) => {
  console.log(article)
  // api
  //   .deleteArticle(article)
  //   .then(req => {
  //     commit('DELETE_ARTICLE', article)
  //   })
  //   .catch(err => console.log(err))
}
