<template>
  <v-card max-width="800" class="about mx-auto">
    <v-card-title class="justify-center">My Profile</v-card-title>
    <v-card-text>
      <v-simple-table class="myprof_table">
        <template v-slot:default>
          <thead v-show="!displaySP">
            <tr>
              <th class="myprof_table_th">Heading</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">
                名前(イニシャル)
              </td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">S.T</td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">年齢</td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">32歳</td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">性別</td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">男性</td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">主なスキル</td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">
                HTML5, CSS, JavaScript, VBA
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">
                ツール、フレームワーク
              </td>
              <td :class="displaySP ? ['text-right', 'py-1'] : ''">
                WordPress, jQuery, Vue.js, Vuetify
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td :class="displaySP ? 'grey lighten-3' : ''">略歴</td>
              <td class="py-2" :class="displaySP ? ['py-1'] : ''">
                Webデザイナー・クリエイター養成校を卒業後、SEの人材派遣業にてヘルプデスク業務に従事。
                <br />約半年後、一身上の都合により退職し、一年ほど塾講師を務める。
                <br />現在はIT業界へと復帰し、フロントエンドエンジニアを目標にWebコーダーとして活動中。
              </td>
            </tr>
            <tr :class="displaySP ? ['d-flex', 'flex-column'] : ''">
              <td
                :class="
                  displaySP ? ['mayprof_table_last_td', 'grey lighten-3'] : ''
                "
              >
                実務経験
              </td>
              <td class="py-2" :class="displaySP ? 'py-1' : ''">
                経歴１:
                金融系システムのヘルプデスク業務に7か月間従事。各部署・他社への伝達や、エラーの監視を主に行い、他部署の業務手伝いなどの雑事も行う。
                <br />
                経歴２:
                WordPressで作られたコーポレートサイトを、デザイナーの指示によりテーマを自作し、4か月かけて一人で改修。
                <br />
                経歴３:
                Vue.jsとVuetifyを使用し、求人広告掲載サイトのフロント制作に三か月参加。バック側とのやりとりをし、顧客要望を聞き取りながら、ほぼ一人でフロント開発に従事。
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'about',
  props: { displaySP: Boolean }
}
</script>

<style scoped>
.myprof_table_th {
  width: 200px;
}
.myprof_table td {
  height: auto;
}
.mayprof_table_last_td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
