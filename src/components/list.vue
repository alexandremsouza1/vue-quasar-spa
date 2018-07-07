<template>
  <div class="row justify-center">
    <q-spinner v-if="getObtainingData" color="secondary" :size="30" />
    <q-list v-if="!getObtainingData" inset-separator class="shadow-13 q-mt-md full-width">
      <q-item multiline v-for="(item, index) of getArticles" :key="index">
        <!-- <q-item-side avatar="statics/boy-avatar.png" /> -->
        <q-item-main
          :label=item.title
          label-lines="1"
          :sublabel=item.text
          sublabel-lines="2"/>
        <q-item-side right>
          <q-btn flat round dense icon="more_vert">
            <q-popover>
              <q-list link>
                <q-item v-close-overlay>
                  <q-item-main label="Edit" @click.native="editDialogModel(item)"/>
                </q-item>
                <q-item v-close-overlay>
                  <q-item-main label="Delete" @click.native="confirmHandler(item)"/>
                </q-item>
              </q-list>
            </q-popover>
          </q-btn>
        </q-item-side>
      </q-item>
    </q-list>
    <edit-dialog
      v-model="showEditDialog"
      :article="article"
      :okHandler="updateArticle"
      >
    </edit-dialog>
  </div>

</template>

<style>
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
import editDialog from '../components/createEditDialog'

export default {
  name: 'ListView',
  components: {
    editDialog
  },
  data () {
    return {
      article: {
        title: '',
        text: ''
      },
      showEditDialog: false,
      name: '',
      nameError: false
    }
  },
  methods: {
    ...mapActions('articles', ['getAllArticles', 'updateArticle', 'deleteArticle']),
    editDialogModel (data) {
      this.showEditDialog = true
      this.article.id = data.id
      this.article.title = data.title
      this.article.text = data.text
    },
    confirmHandler (data) {
      this.$q.dialog({
        title: 'Confirm Delete',
        message: `You are agree to delete article "${data.title}"?`,
        ok: 'Agree',
        cancel: 'Disagree'
      })
        .then(() => {
          this.deleteArticle(data)
            .then(() => {
              this.$q.notify({
                message: `Article ${data.title} was deleted.`,
                type: 'positive'
              })
            })
            .catch(() => {
              this.$q.notify({
                message: `Can't delete article ${data.title}!`,
                type: 'negative'
              })
            })
        })
        .catch(() => {
          this.$q.notify('Disagreed...')
        })
    }
  },
  beforeMount: function () {
    this.getAllArticles()
  },
  computed: {
    ...mapGetters('articles', ['getArticles', 'getObtainingData'])
  }
}
</script>
