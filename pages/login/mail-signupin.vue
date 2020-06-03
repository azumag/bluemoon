<template lang="pug">
v-container
  v-layout(wrap)
    v-flex(xs12)
      v-form(ref="form", v-model="valid", lazy-validation)
        v-label メールアドレス
        v-text-field(
          v-model="email",
          :rules="emailRules"
          type='mail'
        )
        v-label パスワード
        v-text-field(
          v-model="password",
          :rules="passwordRules"
          hint='6文字以上必須です'
          type='password'
        )
        v-btn(@click='submit' v-show="!loading")
          | 新規登録 / ログイン

        v-progress-circular(v-show="loading" indeterminate color="primary")
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Validation from '@/lib/validation'

@Component
export default class MailSignupin extends Vue {
  email = ''
  password = ''
  nickname = ''
  valid: boolean = true
  loading = false
  emailRules = [Validation.required()]
  passwordRules = [Validation.required()]

  signin() {
    return this.$firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$store.commit('info/setSnackbar', 'サインインしました')
        this.$router.push('/')
      })
      .catch((e) => {
        this.$store.commit('info/setSnackbar', e)
      })
  }

  submit() {
    this.loading = true
    // TODO: validation error with form
    this.$firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      // .then((result) => {
      //   return result.user.updateProfile({
      //     displayName: this.nickname
      //   })
      // })
      .then(() => {
        return this.signin()
      })
      .catch((e) => {
        console.log(e)
        // console.log(e.code)
        if (e.code === 'auth/email-already-in-use') {
          return this.signin()
        } else {
          this.$store.commit('info/setSnackbar', e)
        }
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
