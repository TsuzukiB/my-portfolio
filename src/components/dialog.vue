<template>
  <v-dialog v-model="dialog" max-width="1200" :fullscreen="displaySP">
    <v-card>
      <v-card-title :class="displaySP ? 'px-0' : ''">
        <v-img
          :max-width="displaySP ? 320 : 800"
          :src="siteData.imgsrc"
          :alt="siteData.title"
          class="mx-auto"
        >
        </v-img>
      </v-card-title>
      <v-card-text>
        <v-simple-table class="mb-5 contents_dialog">
          <tbody>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td
                :class="displaySP ? 'grey lighten-3' : 'dialog-table-heading'"
              >
                サイト名
              </td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">
                {{ siteData.title }}
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">サイトURL</td>
              <td :class="displaySP ? ['text-right', 'py-1', 'site_url'] : ''">
                <a :href="siteData.url" target="_blanc"> {{ siteData.url }}</a>
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">製作日数</td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">
                {{ siteData.days }}
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">制作人数</td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">
                {{ siteData.count }}
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">ターゲット</td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">
                {{ siteData.target }}
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">スキル・ツール</td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">
                {{ siteData.skill }}
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td
                :class="
                  displaySP ? ['contents_dialog_last_td', 'grey lighten-3'] : ''
                "
              >
                補足・説明
              </td>
              <td class="white-space-pre-wrap">
                {{ parseDescription }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-btn
          block
          color="blue-grey lighten-2 white--text"
          @click="dialog = !dialog"
        >
          <v-icon>mdi-close</v-icon>閉じる
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    siteData: Object,
    displaySP: Boolean
  },
  data: () => ({
    dialog: false
  }),
  computed: {
    parseDescription: function() {
      return this.siteData.description.replace(/<br>/g, '\r\n')
    }
  },
  methods: {
    open: function() {
      this.dialog = true
    }
  }
}
</script>

<style scoped>
.dialog-table-heading {
  width: 200px;
}
.white-space-pre-wrap {
  white-space: pre-wrap;
}
.contents_dialog td {
  height: auto;
}
.site_url {
  word-break: break-all;
}
.contents_dialog_last_td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
