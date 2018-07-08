<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
        dir="rtl"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Alex Morozov App
          <div slot="subtitle">Simple CRUD-app, used Vue.js and Quasar</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      side="right"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        dir="rtl"
        no-border
        link
        inset-delimiter
      >
        <q-list-header>תפריט</q-list-header>
        <q-item @click.native="openURL('http://alexm-quasar-app.herokuapp.com/')">
          <q-item-side icon="school" />
          <q-item-main label="פריט בתפריט" sublabel="כל תוכן שמופיע כאן" />
        </q-item>
        <q-item @click.native="openURL('http://alexm-quasar-app.herokuapp.com/')">
          <q-item-side icon="code" />
          <q-item-main label="פריט בתפריט" sublabel="כל תוכן שמופיע כאן" />
        </q-item>
        <q-item @click.native="openURL('http://alexm-quasar-app.herokuapp.com/')">
          <q-item-side icon="chat" />
          <q-item-main label="פריט בתפריט" sublabel="כל תוכן שמופיע כאן" />
        </q-item>
        <q-item @click.native="openURL('http://alexm-quasar-app.herokuapp.com/')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="פריט בתפריט" sublabel="כל תוכן שמופיע כאן" />
        </q-item>
        <q-item @click.native="openURL('http://alexm-quasar-app.herokuapp.com/')">
          <q-item-side icon="rss feed" />
          <q-item-main label="פריט בתפריט" sublabel="כל תוכן שמופיע כאן" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer reveal>
      <q-toolbar
          color="black"
          :glossy="$q.theme === 'mat'"
          :inverted="$q.theme === 'ios'"
        >
          <q-toolbar-title>
            Very nice Footer
          </q-toolbar-title>
        </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
