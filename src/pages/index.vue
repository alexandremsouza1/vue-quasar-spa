<template>
  <q-page class="row justify-center layout-padding">
    <div class="full-width">
      <q-chips-input v-model="searchQuery" placeholder="Typing a search query..."/>
      <list-view></list-view>
      <create-artilce
        v-model="showCreateDialog"
        :edit="false"
        :article="article"
        :okHandler="addArticle"
        >

      </create-artilce>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" icon="alarm" @click="newDialogModel"/>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions } from 'vuex'
import listView from '../components/list'
import createArtilce from '../components/createEditDialog'

export default {
  name: 'PageIndex',
  components: {
    listView,
    createArtilce
  },
  data () {
    return {
      showCreateDialog: false,
      article: {
        title: '',
        text: ''
      },
      searchQuery: []
    }
  },
  methods: {
    ...mapActions('articles', ['getAllArticles', 'addArticle', 'searchArticles']),
    newDialogModel () {
      this.showCreateDialog = true
    }
  },
  watch: {
    searchQuery: function (val, oldVal) {
      if (val.length > 0) {
        this.searchArticles(val.join(' '))
      } else {
        this.getAllArticles()
      }
    }
  }

}
</script>
