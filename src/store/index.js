import Vue from 'vue'
import Vuex from 'vuex'

import articles from './articles/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    articles
  }
})

export default store
