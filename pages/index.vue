<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm8, md6)
    v-card(color='rgb(100, 100, 100, 0.4)')
      v-card-title.headline
        | Welcome to the BlueMoon
      v-card-text
        p
          | 自分のレパートリーを登録し，他の人と共通のレパートリーを検索できます．
          | 嘘です．今はログインしか出来ません.
        p
          | 使い方のガイドとかがここに入る予定
        hr
        span(v-if='$firebase.currentUser')
          | Welcome! {{ $firebase.currentUser.displayName }}
        span(v-else)
          v-card-actions
            v-btn(color='white', outlined=true, block=true, text, nuxt, to='/login')
              | ログイン / 新規登録
</template>

<script>
export default {}
</script>

<style>
.transparent {
  background-color: white !important;
  opacity: 0.85;
  border-color: transparent !important;
}
</style>
