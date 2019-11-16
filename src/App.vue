<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline text-uppercase">
        S.T PortFolio Site
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs
          v-model="tabModel"
          :centered="!useDisplaySP"
          :vertical="useDisplaySP"
          :hide-slider="useDisplaySP"
          :class="useDisplaySP ? 'justify-center' : ''"
        >
          <v-tab
            v-for="(item, index) in tabContents"
            :key="item.tabName"
            @click="changeComponents(item.componentPath, index)"
          >
            {{ item.tabName }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-content class="align-center d-flex">
      <v-container>
        <router-view :displaySP="useDisplaySP" />
      </v-container>
    </v-content>
    <v-footer dark>
      <v-card width="100%" color="transparent" flat>
        <v-card-text class="text-center">
          Copyrigth &copy; S.T PortFolio Site, <br v-if="useDisplaySP" />All
          Rights Reserved.
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    tabModel: '',
    tabContents: [
      {
        tabName: 'Home',
        componentPath: '/'
      },
      {
        tabName: 'Made Contents',
        componentPath: '/contents'
      },
      {
        tabName: 'About Me',
        componentPath: '/about'
      }
    ]
  }),
  computed: {
    useDisplaySP: function() {
      const display = window.innerWidth <= 768 ? true : false
      return display
    }
  },
  created: function() {
    this.firstTabModel()
  },
  methods: {
    changeComponents: function(path, index) {
      if (this.tabModel != index) {
        this.$router.push(path)
      }
    },
    firstTabModel: function() {
      const url = window.location.href
      const thisPage = url.split('/').slice(-1)[0]
      switch (thisPage) {
        case 'contents':
          this.tabModel = 1
          break
        case 'about':
          this.tabModel = 2
          break
        default:
          this.tabModel = 0
      }
    }
  }
}
</script>
