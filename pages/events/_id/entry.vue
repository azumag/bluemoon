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
              v-textarea(v-model="form.fileURLs", required,
                placeholder="例）\nhttps://www.youtube.com/watch?v=xxxxxxx\nhttps://www.youtube.com/watch?v=yyyyyyyy\nhttps://www.youtube.com/watch?v=zzzzzzz"
              )
              v-file-input(accept="video/*" label="直接アップロードする(複数選択可)"
                show-size
                counter
                chips
                multiple
                v-model="files"
              )
              v-btn(@click='submit' v-show="!loading" block=true outlined=true)
                | エントリーする
              v-progress-circular(v-show="loading" indeterminate color="primary")
              div(v-show="true")
                v-progress-linear(
                  color="light-blue"
                  height="10"
                  :value="this.uploadStatuses[0]"
                  striped
                )

</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      valid: false,
      files: null,
      errors: [],
      entryId: null,
      uploadStatuses: 0,
      progress: 0,
      uploadedFileNum: null,
      form: {
        eventId: '',
        name: '',
        description: '',
        fileURLs: '',
        email: '',
        userId: '',
        fileNames: []
      },
      requiredRule: [
        (v) => {
          return !!v || '必須項目です'
        }
      ],
      loading: false
    }
  },
  watch: {
    uploadedFileNum(v) {
      console.log('v', v)
      console.log('l', this.files.length)
      console.log(this.uploadStatuses)
      if (this.loading && v >= this.files.length) {
        this.uploadFinish()
      }
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
    async deleteEntry(entryId) {
      await this.$firestore
        .collection('entries')
        .doc(entryId)
        .delete()
      this.$store.commit(
        'info/setSnackbar',
        'ファイルアップロード時にエラーが起こりました'
      )
      this.errors = []
      this.entryId = null
      this.loading = false
    },
    uploadFinish() {
      console.log('errors', this.errors)
      if (this.errors.length > 0) {
        // console.log('entryId', this.entryId)
        this.deleteEntry(this.entryId)
        // TODO: to be transactional process
      } else {
        this.$store.commit('info/setSnackbar', 'エントリーを登録しました')
        this.$router.push('/entries/')
      }
    },
    submit() {
      if (!this.valid) {
        return
      }
      this.loading = true
      if (this.files || this.form.fileURLs) {
        this.form.userId = this.$firebase.currentUser.uid
        this.form.eventId = this.$route.params.id
        if (this.files) {
          this.uploadedFileNum = 0
          this.form.fileNames = this.files.map((file) => {
            return file.name
          })
        }
        this.$firestore
          .collection('entries')
          .add(this.form)
          .then((result) => {
            if (this.files) {
              const storageRef = this.$firestorage().ref()
              const uploadTasks = this.files.map((file) => {
                const filesRef = storageRef.child(
                  'users/' +
                    this.form.userId +
                    '/events/' +
                    this.form.eventId +
                    '/entries/' +
                    result.id +
                    '/' +
                    file.name
                )
                return filesRef.put(file)
              })
              const firestorage = this.$firestorage
              const _this = this
              // todo new Promise
              uploadTasks.forEach((uploadTask) => {
                uploadTask.on(
                  'state_changed',
                  function(snapshot) {
                    const progress =
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                    _this.uploadStatuses[0] = progress
                    switch (snapshot.state) {
                      case firestorage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused')
                        break
                      case firestorage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running')
                        break
                    }
                  },
                  function(error) {
                    console.log('taskprogresserror', error)
                    _this.errors.push(error)
                    _this.entryId = result.id
                    _this.uploadedFileNum += 1
                    // console.log(result.id)
                  },
                  function() {
                    _this.uploadedFileNum += 1
                    console.log('upload finish')
                  }
                )
              })
            } else {
              this.$store.commit('info/setSnackbar', 'エントリーを登録しました')
              this.$router.push('/entries/')
            }
          })
          .catch((e) => {
            console.log('Error getting documents', e)
            this.loading = false
          })
      } else {
        this.$store.commit('info/setSnackbar', '動画が登録されていません')
        this.loading = false
        // return
      }
    }
  }
}
</script>
