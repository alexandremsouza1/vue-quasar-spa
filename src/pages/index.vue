<template>
  <q-page class="row justify-center layout-padding">
    <div class="full-width">
      <q-chips-input dir="rtl" v-model="searchQuery" placeholder="הקלדת שאילתת חיפוש..."/>
      <list-view></list-view>
      <create-artilce
        v-model="showCreateDialog"
        :edit="false"
        :article="article"
        :okHandler="addArticle"
        >

      </create-artilce>
    </div>
    <q-page-sticky position="bottom" :offset="[18, 18]">
      <q-btn :disabled=getObtainingData round color="primary" icon="add" @click="newDialogModel"/>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('articles', ['getObtainingData'])
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
