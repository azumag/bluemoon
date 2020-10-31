<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)'
          outlined
        )
          v-img(
            class="white--text align-end"
            height="200px"
            src="/registration.jpg"
          )
          v-card-title.headline
            | エントリーフォーム
          v-card-text.red--text
            | 内容はエントリー送信後，「自分のエントリー」ページから編集・取り下げできます。
            | 一つのアカウントで複数のエントリーは可能ですが，同じ個人，同じバンドでの複数のエントリーは控えていただけると幸いです。
            hr.mt-2.mb-2
            v-form(ref="formValidate", v-model="valid")
              v-text-field.mt-7.mb-2(v-model="form.name", required,
                hint="（例）バンド名，個人名"
                label="エントリー名"
                placeholder="The Monroe Brothers"
                :rules="requiredRule"
                outlined
              )
              v-text-field.mt-2(v-model.email="form.email", required,
                placeholder="xxxxxx.yyyy.zzzzz@bluemoon.works"
                hint="主催から連絡や確認等行う場合があります"
                label="連絡先メールアドレス"
                :rules="requiredRule"
                outlined
              )
              v-textarea(v-model="form.description", required,
                :rules="requiredRule"
                outlined
                label="紹介文，動画説明等"
                hint="（例）\n2010年に結成されたブルーグラスバンド. リーダーの無二のリズム感から生まれるギター＆ボーカルを中心に、個性あふれるストリングスが絡み合って紡ぎ出される、思わず身体を動かさずにはいられなくなるアグレッシブでバウンシーなサウンドが特徴。"
              )
              v-card(color='transparent')
                v-alert(outlined color='rgb(100, 100, 100, 0.8)')
                  v-label エントリー動画の種類
                  v-radio-group(row outlined v-model="form.videoType")
                    v-radio(label="フェス用に作成した動画（15分程度）" value='crafted')
                    v-radio(label="過去行われたライブの録画（10分程度）" value='live')
                    v-radio(label="混在(10分程度）" value='mixed')
                  v-card-text.red--text
                    | ※ 動画がまだなくとも締め切りまで更新可能・取り下げ可能ですので，ぜひまずエントリーを✍
              v-textarea(v-model="form.fileURLs", required
                outlined
                label="エントリー動画への URL（合計時間が枠内ならば複数可）"
                hint="（例）\nhttps://www.youtube.com/watch?v=xxxxxxx"
              )
              v-file-input(v-show="!loading" accept="video/*" label="直接アップロードする(複数選択可)"
                show-size
                counter
                chips
                multiple
                v-model="files"
                outlined
              )
              v-card(color='transparent')
                v-alert(outlined color='rgb(100, 100, 100, 0.8)')
                  v-card-body
                    v-checkbox(outlined label="エントリー動画のアーカイブ公開を許可" v-model="form.publishAgree")
                  v-card-text.red--text
                    | ※ アーカイブ公開を許可すると，オンラインフェス終了後に「フェスのようす」として公開される動画の中に含まれる可能性があります
              v-btn(@click='submit' v-show="!loading" block=true color="primary")
                | エントリーする
              v-progress-circular(v-show="loading" indeterminate color="primary")
              div(v-show="loading" v-for="(file, i) in files" :key="file.id")
                v-progress-circular(indeterminate color='amber')
                | Uploading {{ file.name }}

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
      uploadStatuses: {},
      uploadedFileNum: null,
      form: {
        eventId: '',
        name: '',
        description: '',
        fileURLs: '',
        email: '',
        userId: '',
        fileNames: [],
        videoType: 'crafted',
        publishAgree: false,
      },
      requiredRule: [
        (v) => {
          return !!v || '必須項目です'
        },
      ],
      loading: false,
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
      await this.$firestore.collection('entries').doc(entryId).delete()
    },
    submit() {
      this.$refs.formValidate.validate()
      if (!this.valid) {
        return
      }
      if (this.files || this.form.fileURLs) {
        this.loading = true
        this.form.userId = this.$firebase.currentUser.uid
        this.form.eventId = this.$route.params.id
        if (this.files) {
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
                const uploadTask = filesRef.put(file)

                uploadTask.on(
                  this.$firestorage.TaskEvent.STATE_CHANGED,
                  (snapshot) => {
                    const progress =
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                    this.uploadStatuses[file] = progress
                    switch (snapshot.state) {
                      case this.$firestorage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused')
                        break
                      case this.$firestorage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running')
                        break
                    }
                  },
                  (error) => {
                    console.log('taskprogresserror', error)
                    this.errors.push(error)
                    this.entryId = result.id
                    // console.log(result.id)
                  },
                  () => {
                    console.log('upload finish')
                  }
                )

                return uploadTask
              })

              return Promise.all(uploadTasks)
            }
          })
          .then(() => {
            this.$message.show('参加登録しました')
            this.$router.push('/entries/')
          })
          .catch((e) => {
            console.log('Error getting documents', e)
            this.$message.show('ファイルアップロード時にエラーが起こりました')
            if (this.entryId) {
              this.deleteEntry(this.entryId)
            }
          })
          .finally(() => {
            this.loading = false
            this.errors = []
            this.entryId = null
            this.uploadStatuses = {}
            this.files = null
          })
      } else {
        this.$message.show('動画が登録されていません')
      }
    },
  },
}
</script>
