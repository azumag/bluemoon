<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' tile)
          v-card-title.headline
            | エントリーフォーム
          v-card-text
            | 内容はエントリー送信後，「自分のエントリー」ページから編集・取り下げできます。
            | 一つのアカウントで複数のエントリーは可能ですが，同じ個人，同じバンドでの複数のエントリーは控えていただけると幸いです。
            hr
            v-form(ref="form", v-model="valid")
              v-label エントリー名
              v-text-field(v-model="form.name", required,
                placeholder="例）バンド名，個人名"
                :rules="requiredRule"
              )
              v-label 連絡先メールアドレス
              v-text-field(v-model.email="form.email", required,
                placeholder="例）bluegrass.breakdown@bluemoon.works"
                :rules="requiredRule"
              )
              v-label 紹介文，動画説明等
              v-textarea(v-model="form.description", required,
                :rules="requiredRule"
                placeholder="例）\n2010年に結成されたブルーグラスバンド. リーダーの無二のリズム感から生まれるギター＆ボーカルを中心に、個性あふれるストリングスが絡み合って紡ぎ出される、思わず身体を動かさずにはいられなくなるアグレッシブでバウンシーなサウンドが特徴。"
              )
              v-label エントリー動画アドレス（15分程度，合計15分程度ならば複数可）
              div
                | 直接アップロードする場合は，エントリー後，「自分のエントリー」ページからこの「オンラインフェス」エントリー編集画面からアップロードして下さい
              v-textarea(v-model="form.addresses", required,
                :rules="requiredRule"
                placeholder="例）\nhttps://www.youtube.com/watch?v=xxxxxxx\nhttps://www.youtube.com/watch?v=yyyyyyyy\nhttps://www.youtube.com/watch?v=zzzzzzz"
              )
              v-btn(@click='submit' v-show="!loading" block=true outlined=true)
                | エントリーする
              v-progress-circular(v-show="loading" indeterminate color="primary")
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      valid: false,
      form: {
        entryId: '',
        name: '',
        description: '',
        addresses: '',
        email: '',
        userId: ''
      },
      requiredRule: [
        (v) => {
          return !!v || '必須項目です'
        }
      ],
      loading: false
    }
  },
  mounted() {
    if (this.$firebase.currentUser) {
      if (this.$firebase.currentUser.email) {
        this.form.email = this.$firebase.currentUser.email
      }
    } else {
      this.$router.back()
    }
  },
  methods: {
    submit() {
      if (!this.valid) {
        return
      }
      this.form.userId = this.$firebase.currentUser.uid
      this.form.entryId = this.$route.params.id
      this.$firestore
        .collection('entries')
        .add(this.form)
        .then((result) => {
          this.$store.commit('info/setSnackbar', 'エントリーを登録しました')
          this.$router.push('/entries/')
        })
        .catch((e) => {
          console.log('Error getting documents', e)
        })
    }
  }
}
</script>
