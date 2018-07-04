<template>
  <div style="width: 500px;max-width: 90vw;">
    <q-list inset-separator class="q-mt-md">
      <q-item v-for="(item, index) of getArticles" :key="index">
        <!-- <q-item-side avatar="statics/boy-avatar.png" /> -->
        <q-item-main label="item.title" />
        <q-item-side right>
          <q-btn flat round dense icon="more_vert">
            <q-popover>
              <q-list link>
                <q-item v-close-overlay>
                  <q-item-main label="Reply" />
                </q-item>
                <q-item v-close-overlay>
                  <q-item-main label="Forward" />
                </q-item>
                <q-item v-close-overlay>
                  <q-item-main label="Delete" />
                </q-item>
              </q-list>
            </q-popover>
          </q-btn>
        </q-item-side>
      </q-item>
      <q-item>
        <!-- <q-item-side avatar="statics/boy-avatar.png" /> -->
        <q-item-main label="Brunch this weekend?" />
        <q-item-side right>
          <!-- <q-chip square color="primary" class="shadow-2">10k</q-chip> -->
        </q-item-side>
      </q-item>
      <q-item>
        <!-- <q-item-side avatar="statics/boy-avatar.png" /> -->
        <q-item-main label="Brunch this weekend?" />
        <q-item-side right>
          <q-item-tile stamp>10 min ago</q-item-tile>
          <span class="text-amber">
            <q-item-tile icon="star" v-for="n in 2" :key="n" />
          </span>
        </q-item-side>
      </q-item>
    </q-list>
  </div>

</template>

<style>
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ListView',
  computed: {
    ...mapGetters['getArticles']
  }
}
</script>
