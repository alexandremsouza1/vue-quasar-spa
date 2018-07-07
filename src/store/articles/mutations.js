/*
export const someMutation = (state) => {}
 */
export const SET_ARTICLES = (state, articles) => {
  state.articles = articles
}
export const ADD_ARTICLE = (state, article) => {
  state.article.push(article)
}
export const UPDATE_ARTICLE = (state, article) => {
  state.articles = article
}
export const DELETE_ARTICLE = (state, article) => {
  state.articles = article
}
export const SET_OBTAINING_DATA = (state, data) => {
  state.obtainingData = data
}
