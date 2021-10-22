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
          | Account Link
      v-card-text
        v-form(ref="form", v-model="valid")
          v-form(ref="formValidate", v-model="valid")
            v-text-field.mt-7.mb-2(v-model="form.email", required,
              :label="$t('email')"
              outlined
            )
            v-text-field.mt-7.mb-2(v-model="form.password", required,
              :label="$t('password')"
              :rules="passwordRules"
              hint='6文字以上必須です'
              type='password'
              outlined
            )
        v-divider.ma-2
        v-btn.ma-2(@click='link' v-show="!loading" block outlined color="primary")
          | {{ $t('Link') }}
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'
import Validation from '@/lib/validation'

export default {
  data() {
    return {
      valid: true,
      passwordRules: [Validation.required(), Validation.password()],
      form: {
        password: '',
        email: '',
      },
      loading: false,
    }
  },
  mounted() {
    if (this.isEmailLinked()) {
      this.$router.back()
    }
  },
  methods: {
    isEmailLinked() {
      if (this.$firebase.currentUser) {
        this.$firebase.currentUser.providerData.forEach((profile) => {
          if (profile.providerId === 'password') {
            return true
          }
        })
        console.log(this.$firebase.currentUser.providerData)
      } else {
        return false
      }
    },
    link() {
      const credential = this.$firebase.auth.EmailAuthProvider.credential(
        this.form.email,
        this.form.password
      )
      this.$firebase.currentUser
        .linkWithCredential(credential)
        .then(() => {
          const msg = this.$i18n.t('Account linking suceed')
          this.$message.show(msg)
          this.$router.push('/profile')
        })
        .catch((error) => {
          this.$message.show(error)
        })
    },
  },
}
</script>
