<template>
    <q-dialog
      :value="showed"
      prevent-close
      @input="$emit('show', $event)"
    >
      <span slot="title">{{messages.title}}</span>
      <span slot="message">{{messages.message}}</span>
      <div slot="body">
        <q-field
          class="q-mb-md"
          icon="wifi"
          icon-color="amber"

        >
          <q-input v-model="isArticle.title" float-label="Please, enter title"/>
        </q-field>
        <q-field
          icon="wifi"
          icon-color="red"

        >
          <q-input
            v-model="isArticle.text"
            float-label="Please, enter text"
            type="textarea"
            :max-height="100"
            rows="2"/>
        </q-field>
      </div>
      <template slot="buttons" slot-scope="props">
          <q-btn
            flat
            label="Save"
            @click="isOkHandler(props.ok)"/>
          <q-btn
            flat
            label="Cancel"
            @click="props.cancel" />
      </template>
    </q-dialog>
</template>

<style>
</style>

<script>

export default {
  name: 'createEditDialog',
  data () {
    return {
      isShow: this.show,
      isArticle: this.article,
      messages: {
        title: this.edit ? 'Edit Article' : 'Create new Article',
        message: this.edit ? 'You are realy want to change this article?' : 'Please, type data for new article.',
        positive: (title) => { return this.edit ? `Article "${title}" was changed!` : `Article ${title} created!` },
        negative: (title) => { return this.edit ? `Can't change "${title}" article!` : `Can't create article ${title}!` }
      }
    }
  },
  model: {
    prop: 'showed',
    event: 'show'
  },
  props: {
    showed: Boolean,
    edit: {
      type: Boolean,
      default: true
    },
    article: Object,
    okHandler: Function
  },
  methods: {
    async isOkHandler (okFn) {
      if (this.isArticle.title.length === 0 || this.isArticle.text.length === 0) {
        // this.error = true
        this.$q.dialog({
          title: 'Please fill in all fields!',
          message: `All field must be filled.`
        })
      } else {
        await okFn()
        this.okHandler(this.isArticle)
          .then(() => {
            this.$q.notify({
              message: this.messages.positive(this.isArticle.title),
              type: 'positive'
            })
          })
          .catch(() => {
            this.$q.notify({
              message: this.messages.negative(this.isArticle.title),
              type: 'negative'
            })
          })
      }
    }
  }
}
</script>
