<template lang="pug">
//- v-parallax(dark :src='bgImage')
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm8, md6, lg12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-img(
            class="white--text align-end"
            height="100px"
            src="/bluemoon1-sm.jpg"
          )
          v-card-actions(v-show="!$firebase.currentUser")
            v-btn(color='white', outlined=true, block=true, text, nuxt, to='/login')
              | ログイン / 新規登録
            //- v-card-title.headline.float-right
            //-   | Bluemoon: Your lone journey
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | お知らせ
          v-card-title.title.white--text(
            style="background-image: url('/fes2-sm.jpg'); background-color: rgba(80, 80, 80, 0.4)"
            @click.stop="$router.push(localePath('/events/'))"
          )
            | Bluegrass Lockdown Music Festival Vol.3 開催     
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-chip(
            class="ma-2"
            color="red"
            text-color="white"
          )
            | ご協賛
          // nuxt-link(to="events")
          //  | Bluegrass Lockdown Festival
          //|  の人気投票の賞品をご提供頂きました！
          v-container(
            style="background-image: url('/iwashita-mandolins.jpeg'); background-size: cover"
            height="auto"
          )
            v-container(
              style="background-color: rgba(80, 80, 80, 0.8);"
            )
              v-avatar.ma-2(size=64)
                img(src="/i-icon.jpg")
              a.white--text(href="https://twitter.com/iwashita_md_gt")
                | Iwashita Mandolins & Guitars
              div.ma-4
                div.white--text.body-1
                  | 山梨県韮崎市の弦楽器工房
                div.body-1
                  | フラットマンドリン、アコースティックギターなどの製作や修理等
                div.body-1
                  | 営業時間 10:00～19:00 / 月曜定休
      
      v-col(cols=12)
      //-   v-card(color='rgb(100, 100, 100, 0.4)' shaped)
      //-     v-card-title.headline
      //-       | レパートリー機能
      //-     hr
      //-     v-card-text
      //-       p
      //-         | 自分のレパートリーを登録し，他の人と共通のレパートリーを検索できます．
      //-       p
      //-         | STEP 1. レパートリーを登録
      //-       p
      //-         | STEP 2. グループを作成しメンバーを登録
      //-       p
      //-         | STEP 3. 共通曲を検索
      //-       v-btn(block outlined @click.stop="$router.push('/repertories/')")
      //-         | 試す
</template>
<script>
// import bgImage from '@/assets/img/bluemoon_bg4.png'
export default {
  data() {
    return {
      bgImage: '',
    }
  },
}
</script>
