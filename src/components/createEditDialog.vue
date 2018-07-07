<template>
    <q-dialog
      dir="rtl"
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
          <q-input v-model="isArticle.title" float-label="אנא, הזן כותרת"/>
        </q-field>
        <q-field
          icon="wifi"
          icon-color="red"

        >
          <q-input
            v-model="isArticle.text"
            float-label="בבקשה, הזן טקסט"
            type="textarea"
            :max-height="100"
            rows="2"/>
        </q-field>
      </div>
      <template slot="buttons" slot-scope="props">
          <q-btn
            flat
            label="שמור"
            @click="isOkHandler(props.ok)"/>
          <q-btn
            flat
            label="לְבַטֵל"
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
        title: this.edit ? 'ערוך מאמר' : 'צור מאמר חדש',
        message: this.edit ? 'אתה באמת רוצה לשנות את המאמר הזה?' : 'אנא, הקלד נתונים עבור מאמר חדש.',
        positive: (title) => { return this.edit ? `מאמר "${title}" שונה!` : `מאמר ${title} נוצר!` },
        negative: (title) => { return this.edit ? `לא ניתן לשנות "${title}" מאמר!` : `לא ניתן ליצור מאמר ${title}!` }
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
          title: 'בבקשה מלא את כל השדות!',
          message: `יש למלא את כל השדות.`
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
