<template>
  <q-page class="row justify-center layout-padding">
    <list-view></list-view>
    <create-artilce
      v-model="showCreateDialog"
      :edit="false"
      :article="article"
      >

    </create-artilce>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" icon="alarm" @click="newDialogModel"/>
    </q-page-sticky>
  </q-page>
</template>

<style>
</style>

<script>
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
      }
    }
  },
  methods: {
    newDialogModel () {
      this.showCreateDialog = true
    }
  }

}
</script>
