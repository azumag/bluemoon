<template lang="pug">
v-container
  v-layout(wrap)
    v-flex(xs12)
      v-form(ref="form", v-model="valid", lazy-validation)
        v-label E-Mail
        v-text-field(v-model="email", required)
        v-label Password
        v-text-field(v-model="password", required)
        v-label Nickname
        v-text-field(v-model="nickname", required)
        v-btn(@click='submit' v-show="!loading")
          | Sign Up
        v-progress-circular(v-show="loading" indeterminate color="primary")
</template>
<script>
// import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      nickname: '',
      valid: true,
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true
      // TODO: validation error with form
      this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          return result.user.updateProfile({
            displayName: this.nickname
          })
        })
        .then((result) => {
          return this.$firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
        })
        .then((result) => {
          this.$store.commit('info/setSnackbar', 'Signed in')
          this.$router.push('/')
        })
        .catch((e) => {
          console.log(e)
          this.$store.commit('info/setSnackbar', e)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
