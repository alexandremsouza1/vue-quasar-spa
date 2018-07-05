<template>
    <q-dialog
      :value="showed"
      prevent-close
      @input="$emit('show', $event)"
    >
      <span v-if="edit" slot="title">Edit Article</span>
      <span v-if="!edit" slot="title">Create new Article</span>
      <span v-if="edit" slot="message">You are realy want to change this article?</span>
      <span v-if="!edit" slot="message">Please, type data for new article.</span>
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
      isArticle: this.article
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
        this.$q.notify(`Ok ${this.isArticle.title}, going with ${this.isArticle.text}`)
      }
    }
  }
}
</script>
