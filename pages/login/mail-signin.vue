<template lang="pug">
v-container
  v-layout(wrap)
    v-flex(xs12)
      v-form(ref="form", v-model="valid", lazy-validation)
        v-label E-Mail
        v-text-field(v-model="email", required)
        v-label Password
        v-text-field(v-model="password", required)
        v-btn(@click='submit' v-show="!loading")
          | Sign In
        v-progress-circular(v-show="loading" indeterminate color="primary")
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      valid: true,
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          this.$store.commit('info/setSnackbar', 'Signed in')
          this.$router.push('/')
        })
        .catch((e) => {
          console.log(e)
          // TODO: handling error msg
          this.$store.commit('info/setSnackbar', e)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
