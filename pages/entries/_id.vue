<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12, lg12)
    v-card(color='rgb(100, 100, 100, 0.4)')
      v-img(
        class="white--text align-end"
        height="150px"
        src="/entryedit-sm.jpg"
      )
      v-card-title.headline
        div.pa-2.ma-2
          | {{ $t('edit') }}
        v-btn.ml-auto(@click.stop="deleteEntry()" color='red'
          class="float-right"
        )
          | {{ $t('withdraw') }}
      v-card-text
        v-form(ref="form", v-model="valid")
          v-form(ref="formValidate", v-model="valid")
              v-text-field.mt-7.mb-2(v-model="form.name", required,
                :hint="$t('formNameHint')"
                :label="$t('formEntryLabel')"
                placeholder="The Monroe Brothers"
                :rules="requiredRule"
                outlined
              )
              v-text-field.mt-2(v-model.email="form.email", required,
                placeholder="xxxxxx.yyyy.zzzzz@bluemoon.works"
                :hint="$t('formEmailHint')"
                :label="$t('formEmailLabel')"
                :rules="requiredRule"
                outlined
              )
              v-textarea(v-model="form.description", required,
                :rules="requiredRule"
                outlined
                :hint="$t('formDescriptionHint')"
                :label="$t('formDescriptionLabel')"
              )
              v-card(color='transparent')
                v-alert(outlined color='rgb(100, 100, 100, 0.8)')
                  v-label {{ $t('formVideoTypeLabel') }}
                  v-radio-group(row outlined v-model="form.videoType")
                    v-radio(:label="$t('formVideoTypeOnlineLabel')" value='online')
                    v-radio(:label="$t('formVideoTypeOfflineLabel')" value='offline')
                    v-radio(:label="$t('formVideoTypeMixedLabel')" value='mixed')
                    v-radio(:label="$t('formVideoTypeShortLabel')" value='short')
              v-textarea(v-model="form.fileURLs", required,
                outlined
                :label="$t('formFileURLLabel')"
                hint="（例）\nhttps://www.youtube.com/watch?v=xxxxxxx"
              )
              v-file-input(v-show="!loading" accept="video/*" 
                :label="$t('formUploadLabel')"
                show-size
                counter
                chips
                multiple
                v-model="files"
                outlined
              )
          span.ma-2(v-show="form.fileNames.length > 0")
            v-label {{ $t('uploadedFiles') }}
            v-list(v-show="!loading")
              v-list-item(v-for="(upfile, i) in form.fileNames" :key="upfile")
                v-list-item-content
                  v-list-item-title(v-html="upfile")
                v-list-item-action
                  v-btn(@click.stop="deleteFile(upfile)" color='red')
                    | {{ $t('delete') }}
          v-card(color='transparent')
                v-alert(outlined color='rgb(100, 100, 100, 0.8)')
                  v-card-body
                    v-checkbox(outlined :label="$t('formPublishAgreeLabel')" v-model="form.publishAgree")
                  v-card-text.red--text
                    | {{ $t('formPublishAgreeNotice') }}
          v-divider
          v-btn.ma-2(@click='update' v-show="!loading" block outlined color="primary")
            | {{ $t('update') }}
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
        videoType: null,
        publishAgree: null,
      },
      requiredRule: [
        (v) => {
          return !!v || this.$i18n.t('required')
        },
      ],
      loading: false,
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
    },
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
      const msg = this.$i18n.t('deleteConfirmation')
      if (!confirm(msg)) {
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
        .then(() => {
          return this.$firestore
            .collection('entries')
            .doc(this.$route.params.id)
            .delete()
        })
        .then(() => {
          const msg = this.$i18n.t('deleted')
          this.$message.show(msg)
          this.$router.back()
        })
        .catch(() => {
          const msg = this.$i18n.t('deleteError')
          this.$message.show(msg)
        })
    },
    deleteFile(filename) {
      const msg = this.$i18n.t('deleteConfirmation')
      if (!confirm(msg)) {
        return
      }
      const storageRef = this.$firestorage().ref()
      storageRef
        .child(this.filePath + filename)
        .delete()
        .then(() => {
          const index = this.form.fileNames.indexOf(filename)
          this.form.fileNames.splice(index, 1)
          return this.updateForm()
        })
        .then(() => {
          const msg = this.$i18n.t('deleted')
          this.$message.show(msg)
        })
        .catch(() => {
          const msg = this.$i18n.t('deleteError')
          this.$message.show(msg)
        })
    },
    updateForm() {
      return this.$firestore
        .collection('entries')
        .doc(this.$route.params.id)
        .set(this.form)
    },
    update() {
      // if (this.files || this.form.fileURLs || this.form.fileNames.length > 0) {
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
        .then(() => {
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
        .then(() => {
          const msg = this.$i18n.t('updateEntry')
          this.$message.show(msg)
        })
        .catch((e) => {
          console.log('Error getting documents', e)
          const msg = this.$i18n.t('fileUploadError')
          this.$message.show(msg)
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
      // } else {
      //   this.$message.show('動画が登録されていません')
      // }
    },
  },
}
</script>
