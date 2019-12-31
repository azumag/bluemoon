<template lang="pug">
v-parallax(dark :src='bgImage')
  v-layout(column, justify-center, align-center)
    v-flex(xs12, sm8, md6)
      v-card(color='rgb(100, 100, 100, 0.4)')
        v-card-title.headline
          | Welcome to the BlueMoon
        v-card-text
          p
            | 自分のレパートリーを登録し，他の人と共通のレパートリーを検索できます．
          p
            | STEP 1. レパートリーを登録
          p
            | STEP 2. グループを作成しメンバーを登録
          p
            | STEP 3. 共通曲を検索
          hr
          span(v-if='$firebase.currentUser')
            | Welcome...
            | {{ $firebase.currentUser.displayName }}
          span(v-else)
            v-card-actions
              v-btn(color='white', outlined=true, block=true, text, nuxt, to='/login')
                | ログイン / 新規登録
</template>
<script>
import bgImage from '@/assets/img/bluemoon_bg4.png'
export default {
  data() {
    return {
      bgImage
    }
  }
}
</script>
