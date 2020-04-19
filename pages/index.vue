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
            src="/bluemoon1.jpg"
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
          v-img(
            class="white--text align-end"
            height="100px"
            src="/fes2.jpg"
            @click.stop="$router.push('/events/')"
          )
            v-card-title.title(
              style="background-color: rgba(80, 80, 80, 0.4)"
            )
              | Bluegrass Lockdown Music Festival エントリー募集中！
              //- v-btn.ml-auto(
              //-   @click.stop="$router.push('/events/')"
              //-   color='red'
              //-   class="float-right ma-2"
              //- )
                | 詳細
          a(href="https://www.facebook.com/RockyTopTokyo/posts/2670280893228677?__xts__[0]=68.ARDHkjV9GOVE-nfhPgXgKlz8cCzsjj9_ao3UpNwn8Yz-deQvfoAcFGKrX9oF4dvGYxTbLMC2KHB9_--6gxKNpYq0eRIegA8BQHkS0cgTfu37AaTIGqmEDfkHhdzJVk95DyU-TQsBFeliYSrwkiD865FtFBCQGAQo6aCv_veb1ilMpSMV1FjCqjmkDon9hTBVspWofxkxEHwvrT-xpOhj28NttSlibjlGrY0DKYZxel2pUSQw4vjJSVAZz6fIRufQ9wapOFWYR-WERX-hGxMBpVUCJbIFc8N2Y1KlVUrJY5iVal9HmDMjaRlczZrm7RSGOs9FkHheq9uLfgGrptilDqFy&__tn__=-R")
            v-img(
              class="white--text align-end"
              height="100px"
              src="/events2.jpg"
            )
              v-card-title.title(
                style="background-color: rgba(100, 100, 100, 0.4)"
              )
                | 銀座ロッキートップ存続のための支援のお願い
              //- v-btn.ml-auto(
              //-   class="ma-2"
              //-   color="red"
              //-   text-color="white"
              //-   href="https://www.facebook.com/RockyTopTokyo/posts/2670280893228677?__xts__[0]=68.ARDHkjV9GOVE-nfhPgXgKlz8cCzsjj9_ao3UpNwn8Yz-deQvfoAcFGKrX9oF4dvGYxTbLMC2KHB9_--6gxKNpYq0eRIegA8BQHkS0cgTfu37AaTIGqmEDfkHhdzJVk95DyU-TQsBFeliYSrwkiD865FtFBCQGAQo6aCv_veb1ilMpSMV1FjCqjmkDon9hTBVspWofxkxEHwvrT-xpOhj28NttSlibjlGrY0DKYZxel2pUSQw4vjJSVAZz6fIRufQ9wapOFWYR-WERX-hGxMBpVUCJbIFc8N2Y1KlVUrJY5iVal9HmDMjaRlczZrm7RSGOs9FkHheq9uLfgGrptilDqFy&__tn__=-R"
              //- )
                | 詳細
          a(href="https://camp-fire.jp/projects/view/254796")
            v-img(
              class="white--text align-end"
              height="100px"
              src="/fes3.jpg"
            )
              v-card-title.title(
                style="background-color: rgba(100, 100, 100, 0.6)"
              )
                | 打倒コロナ！本郷「アルマジロ」から届け！
              //- v-btn.ml-auto(
              //-   class="ma-2"
              //-   color="red"
              //-   text-color="white"
              //-   href="https://camp-fire.jp/projects/view/254796"
              //- )
                | 詳細
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | レパートリー機能
          hr
          v-card-text
            p
              | 自分のレパートリーを登録し，他の人と共通のレパートリーを検索できます．
            p
              | STEP 1. レパートリーを登録
            p
              | STEP 2. グループを作成しメンバーを登録
            p
              | STEP 3. 共通曲を検索
            v-btn(block outlined @click.stop="$router.push('/repertories/')")
              | 試す
</template>
<script>
// import bgImage from '@/assets/img/bluemoon_bg4.png'
export default {
  data() {
    return {
      bgImage: ''
    }
  }
}
</script>
