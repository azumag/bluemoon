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
          | Profile
      v-card-text
        v-form(ref="form", v-model="valid")
          v-form(ref="formValidate", v-model="valid")
            v-text-field.mt-7.mb-2(v-model="form.displayName", required,
              label="User Name"
              outlined
            )
            v-text-field.mt-7.mb-2(v-model="form.email", required,
              label="email"
              outlined
            )
        v-divider
        v-btn.ma-2(@click='update' v-show="!loading" block outlined color="primary")
          | Update
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      valid: true,
      form: {
        displayName: '',
        email: '',
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
      if (this.$firebase.currentUser.displayName) {
        this.form.displayName = this.$firebase.currentUser.displayName
      }
      if (this.$firebase.currentUser.email) {
        this.form.email = this.$firebase.currentUser.email
      }
    } else {
      this.$router.back()
    }
  },
  methods: {
    update() {
      if (this.$firebase.currentUser.displayName !== this.form.displayName) {
        this.$firebase.currentUser
          .updateProfile({
            displayName: this.form.displayName,
          })
          .then(() => {
            this.$message.show('Updated User Name')
          })
          .catch((error) => {
            this.$error.show(error)
          })
      }
      if (this.$firebase.currentUser.email !== this.form.email) {
        this.$firebase.currentUser
          .updateEmail(this.form.email)
          .then(() => {
            this.$message.show('Updated Email')
          })
          .catch((error) => {
            this.$message.show(error.toString())
          })
      }
    },
  },
}
</script>
