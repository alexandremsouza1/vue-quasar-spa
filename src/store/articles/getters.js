/*
export const someGetter = (state) => {}
 */
export const getArticles = state => {
  console.log(state.articles)
  return state.articles
}
