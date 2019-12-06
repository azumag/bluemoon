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
      valid: true,
      loading: false
    }
  },
  methods: {
    submit() {
      this.loading = true
      // TODO: validation error with form
      this.$auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          // console.log(this.$auth.currentUser)
          console.log('sign up done')
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
