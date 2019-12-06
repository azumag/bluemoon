<template lang="pug">
v-container
  v-layout(wrap)
    v-flex(xs12)
      v-form(ref="form", v-model="valid", lazy-validation)
        v-label E-Mail
        v-text-field(v-model="email", required)
        v-label Password
        v-text-field(v-model="password", required)
        v-btn(@click='submit')
          | Sign Up
</template>
<script>
// import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      password: '',
      valid: true
    }
  },
  methods: {
    submit() {
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
    }
  }
}
</script>
