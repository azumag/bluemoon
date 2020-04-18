<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' tile)
          v-card-title.headline
            v-row
              v-col(cols="8")
                | エントリー編集
              v-col(cols="4")
                v-btn(@click.stop="deleteEntry()" color='red')
                  | 取り消す
          v-card-text
            v-form(ref="form", v-model="valid")
              v-label エントリー名
              v-text-field(v-model="form.name", required,
                placeholder="例）バンド名，個人名"
                :rules="requiredRule"
              )
              v-divider
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
              v-file-input(v-show="!loading" accept="video/*" label="直接アップロードする(複数選択可)"
                show-size
                counter
                chips
                multiple
                v-model="files"
              )
              span(v-show="form.fileNames.length > 0")
                v-label アップロード済みファイル
                v-list(v-show="!loading")
                  v-list-item(v-for="(upfile, i) in form.fileNames" :key="upfile")
                    v-list-item-content
                      v-list-item-title(v-html="upfile")
                    v-list-item-action
                      v-btn(@click.stop="deleteFile(upfile)" color='red')
                        | 削除
              v-divider
              v-btn(@click='update' v-show="!loading" block=true outlined=true)
                | 更新する
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
  computed: {
    filePath() {
      return (
        'users/' +
        this.form.userId +
        '/events/' +
        this.form.eventId +
        '/entries/' +
        this.$route.params.id +
        '/'
      )
    }
  },
  mounted() {
    if (this.$firebase.currentUser) {
      if (this.$firebase.currentUser.email) {
        this.form.email = this.$firebase.currentUser.email
      }
      this.$firestore
        .collection('entries')
        .doc(this.$route.params.id)
        .get()
        .then((entry) => {
          if (entry.exists) {
            this.form = entry.data()
          } else {
            console.log('error:', entry)
            this.$router.back()
          }
        })
    } else {
      this.$router.back()
    }
  },
  methods: {
    deleteEntry() {
      if (!confirm('削除します。よろしいですか？')) {
        return
      }
      const storageRef = this.$firestorage().ref()
      storageRef
        .child(this.filePath)
        .listAll()
        .then((dir) => {
          return Promise.all(
            dir.items.map((fileRef) => {
              console.log(fileRef.name)
              return storageRef.child(this.filePath + fileRef.name).delete()
            })
          )
        })
        .then((res) => {
          return this.$firestore
            .collection('entries')
            .doc(this.$route.params.id)
            .delete()
        })
        .then((res) => {
          this.$store.commit('info/setSnackbar', '削除しました')
          this.$router.back()
        })
        .catch((e) => {
          this.$store.commit('info/setSnackbar', '削除に失敗しました')
        })
    },
    deleteFile(filename) {
      if (!confirm('削除します。よろしいですか？')) {
        return
      }
      const storageRef = this.$firestorage().ref()
      storageRef
        .child(this.filePath + filename)
        .delete()
        .then((res) => {
          const index = this.form.fileNames.indexOf(filename)
          this.form.fileNames.splice(index, 1)
          return this.updateForm()
        })
        .then((res) => {
          this.$store.commit('info/setSnackbar', '削除しました')
        })
        .catch((e) => {
          this.$store.commit('info/setSnackbar', '削除に失敗しました')
        })
    },
    updateForm() {
      return this.$firestore
        .collection('entries')
        .doc(this.$route.params.id)
        .set(this.form)
    },
    update() {
      if (this.files || this.form.fileURLs) {
        this.loading = true
        if (this.files) {
          this.files.forEach((file) => {
            const index = this.form.fileNames.indexOf(file.name)
            if (index === -1) {
              this.form.fileNames.push(file.name)
            }
          })
        }
        this.updateForm()
          .then((result) => {
            if (this.files) {
              const storageRef = this.$firestorage().ref()
              const uploadTasks = this.files.map((file) => {
                const filesRef = storageRef.child(this.filePath + file.name)
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
          .then((result) => {
            this.$store.commit('info/setSnackbar', 'エントリーを更新しました')
          })
          .catch((e) => {
            console.log('Error getting documents', e)
            this.$store.commit(
              'info/setSnackbar',
              'ファイルアップロード時にエラーが起こりました'
            )
            const storageRef = this.$firestorage().ref()
            storageRef
              .child(this.filePath)
              .listAll()
              .then((dir) => {
                this.form.fileNames = dir.items.map((fileRef) => {
                  return fileRef.name
                })
              })
          })
          .finally(() => {
            this.loading = false
            this.errors = []
            this.entryId = null
            this.uploadStatuses = {}
            this.files = null
          })
      } else {
        this.$store.commit('info/setSnackbar', '動画が登録されていません')
      }
    }
  }
}
</script>
