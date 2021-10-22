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
              :label="$t('UserName')"
              outlined
            )
            v-text-field.mt-7.mb-2(v-show="isEmailLinked()" v-model="form.email", required,
              :label="$t('email')"
              outlined
            )
            v-btn.ma-2(v-show="!isEmailLinked()" block outlined color="primary")
              nuxt-link(to="profile/account-link")
                | {{ $t('AccountLink') }}
        v-divider.ma-2
        v-btn.ma-2(@click='update' v-show="!loading" block outlined color="primary")
          | {{ $t('Update') }}
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
  mounted() {
    if (this.$firebase.currentUser) {
      console.log(this.$firebase.currentUser.providerData)
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
    isEmailLinked() {
      if (this.$firebase.currentUser) {
        let linked = false
        this.$firebase.currentUser.providerData.forEach((profile) => {
          if (profile.providerId === 'password') {
            console.log(profile.providerId)
            linked = true
          }
        })
        return linked
      } else {
        // console.log('false2')
        return false
      }
    },
    update() {
      if (this.$firebase.currentUser.displayName !== this.form.displayName) {
        this.$firebase.currentUser
          .updateProfile({
            displayName: this.form.displayName,
          })
          .then(() => {
            const msg = this.$i18n.t('updated')
            this.$message.show(msg)
          })
          .catch((error) => {
            this.$error.show(error)
          })
      }
      if (
        this.$firebase.currentUser.email &&
        this.$firebase.currentUser.email !== this.form.email
      ) {
        console.log(this.$firebase.currentUser.email)
        this.$firebase.currentUser
          .updateEmail(this.form.email)
          .then(() => {
            const msg = this.$i18n.t('updated')
            this.$message.show(msg)
          })
          .catch((error) => {
            this.$message.show(error.toString())
          })
      }
    },
  },
}
</script>
