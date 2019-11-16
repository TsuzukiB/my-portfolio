<template>
  <v-card max-width="900" class="contents mx-auto">
    <v-card-title class="justify-center">
      画像をクリックすると詳細が見れます
    </v-card-title>
    <v-card-text>
      <v-row class="justify-center">
        <v-col
          :cols="displaySP ? '12' : '4'"
          v-for="item in siteList"
          :key="item.id"
        >
          <v-card color="grey lighten-1" @click="openDialog(item.id)">
            <v-img :src="item.imgsrc" :alt="item.title + '画像'"></v-img>
            <v-card-text class="py-0 white--text">{{ item.title }}</v-card-text>
          </v-card>
          <dialogComponent
            ref="dialog"
            :site-data="item"
            :displaySP="displaySP"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import dialogComponent from '@/components/dialog.vue'
export default {
  name: 'contents',
  props: { displaySP: Boolean },
  components: {
    dialogComponent
  },
  computed: {
    ...mapState(['siteList'])
  },
  methods: {
    openDialog: function(i) {
      this.$refs.dialog[i - 1].open()
    }
  }
}
</script>
