/*
export const someAction = (state) => {}
 */
import api from '../../api/index'

export const getAllArticles = async ({ commit, state }) => {
  commit('SET_OBTAINING_DATA', true)
  await api
    .readArticles()
    .then(res => {
      commit('SET_OBTAINING_DATA', false)
      commit('SET_ARTICLES', res.data)
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}
export const addArticle = async ({ commit, state, dispatch }, article) => {
  await api
    .createArticle(article)
    .then(req => {
      // commit('ADD_ARTICLE', article)
      dispatch('getAllArticles')
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}
export const updateArticle = async ({ commit, state, dispatch }, article) => {
  await api
    .updateArticle(article)
    .then(req => {
      dispatch('getAllArticles')
      // commit('UPDATE_ARTICLE', article)
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}
export const deleteArticle = async ({ commit, state, dispatch }, article) => {
  await api
    .deleteArticle(article)
    .then(req => {
      // commit('DELETE_ARTICLE', article)
      dispatch('getAllArticles')
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}
export const searchArticles = async ({ commit, state }, query) => {
  commit('SET_OBTAINING_DATA', true)
  await api
    .searchArticles(query)
    .then(res => {
      commit('SET_OBTAINING_DATA', false)
      commit('SET_ARTICLES', res.data)
    })
    .catch(err => {
      console.log(err)
      throw err
    })
}
