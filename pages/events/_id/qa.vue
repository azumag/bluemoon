<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12, lg12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-img(
            class="white--text align-end"
            height="200px"
            src="/fes2-sm.jpg"
          )
            v-card-title.headline
              | Questions and Answers
    v-row
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 動画を用意してからエントリーすべき？
          v-card-text
            | 先にエントリーを作成してもらい，（URL欄にはその旨を記載）あとから編集ページでアップロードしてもらっても構いません！
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 動画が15分に満たないのですが
          v-card-text
            | 問題ありません！1曲でも1分でも，投稿いただけるだけで幸いです
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | オールドタイム系はOK？
          v-card-text
            | ブルーグラスの親戚のようなジャンルは歓迎します！（Dawg, Old Tyme, Irish, *Punk)
            | また，奏者が「これはブルーグラス」と言い張る場合も歓迎します。
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | 過去の動画でもよい？
          v-card-text
            | 是非お願いします
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | エントリーできる動画がない
          v-card-text
            | ぜひ多重録画アプリなどで作成してみてほしいです。
            | 別ページの「
            nuxt-link.blue--text(to='/howto/multi-recording')
              | 多重録画アプリの紹介
            |」を参考にぜひ。
      v-col(cols=6)
        v-card(color='rgb(100, 100, 100, 0.4)')
          v-card-title.headline
          v-card-text(v-if="this.$firebase.currentUser")
            v-btn(@click="gotoEntryForm(event)"
              outlined
              block
            )
              | エントリーフォームへ
          v-card-text(v-else)
            | エントリーするにはログインして下さい🙇‍♂️
            | エントリー管理のためログイン必須になっています，お手数ですがご協力下さい
            div
              v-btn.mx-2(@click="gotoLogin()"
                block
                outlined
              )
                | ログイン
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped)
          v-card-title.headline
            | その他の質問
          v-card-text
            | 以下フォームより質問お寄せくだされば順次回答しこちらに追加します
          v-textarea.ma-2(v-model="question" outlined)
          v-btn(@click="sendQuestion" block outlined)
            | 送信
</template>
<script>
export default {
  data() {
    return {
      question: ''
    }
  },
  methods: {
    sendQuestion() {
      if (this.question === '') {
        return
      }
      this.$firestore
        .collection('questions')
        .add({ question: this.question })
        .then((result) => {
          this.question = ''
          this.$store.commit('info/setSnackbar', '質問を送信しました')
        })
    }
  }
}
</script>
