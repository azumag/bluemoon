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
type VForm = Vue & { validate: () => boolean }

@Component
export default class MailSignupin extends Vue {
  email = ''
  password = ''
  nickname = ''
  valid: boolean = true
  loading = false
  emailRules = [Validation.required(), Validation.email()]
  passwordRules = [Validation.required(), Validation.password()]

  signin() {
    return this.$firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$message.show('サインインしました')
        this.$router.push('/')
      })
      .catch((e: any) => {
        this.$message.show(e)
      })
  }

  submit() {
    if (!(this.$refs.form as VForm).validate()) {
      return
    }
    this.loading = true
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
      .catch((e: any) => {
        console.log(e)
        // console.log(e.code)
        if (e.code === 'auth/email-already-in-use') {
          return this.signin()
        } else {
          this.$message.show(e)
        }
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
