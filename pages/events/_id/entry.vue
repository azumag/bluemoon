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
            | {{ $t('entryForm') }}
          v-card-text.red--text
            | {{ $t('entryDescription') }}
            hr.mt-2.mb-2
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
                :label="$t('formDescriptionLabel')"
                :hint="$t('formDescriptionHint')"
              )
              v-card(color='transparent')
                v-alert(outlined color='rgb(100, 100, 100, 0.8)')
                  v-label {{ $t('formVideoTypeLabel') }}
                  v-radio-group(row outlined v-model="form.videoType")
                    v-radio(:label="$t('formVideoTypeCraftedLabel')" value='crafted')
                    v-radio(:label="$t('formVideoTypeLiveLabel')" value='live')
                    v-radio(:label="$t('formVideoTypeMixedLabel')" value='mixed')
                  v-card-text.red--text
                    | {{ $t('formVideoTypeNotice') }}
              v-textarea(v-model="form.fileURLs"
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
              v-card(color='transparent')
                v-alert(outlined color='rgb(100, 100, 100, 0.8)')
                  v-card-body
                    v-checkbox(outlined :label="$t('formPublishAgreeLabel')" v-model="form.publishAgree")
                  v-card-text.red--text
                    | {{ $t('formPublishAgreeNotice') }}
              v-btn(@click='submit' v-show="!loading" block=true color="primary")
                | {{ $t('submit') }}
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
          return !!v || this.$i18n.t('required')
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
    t(key) {
      return this.$i18n.t(key)
    },
    async deleteEntry(entryId) {
      await this.$firestore.collection('entries').doc(entryId).delete()
    },
    submit() {
      this.$refs.formValidate.validate()
      if (!this.valid) {
        return
      }
      // if (this.files || this.form.fileURLs) {
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
          const msg = this.$i18n.t('registrationFinished')
          this.$message.show(msg)
          const localePath = this.localePath('entries')
          this.$router.push(localePath + '/')
        })
        .catch((e) => {
          console.log('Error getting documents', e)
          const msg = this.$i18n.t('fileUploadError')
          this.$message.show(msg)
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
      // } else {
      //   this.$message.show('動画が登録されていません')
      // }
    },
  },
}
</script>
