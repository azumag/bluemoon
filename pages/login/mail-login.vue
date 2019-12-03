<template lang="pug">
v-container
  v-layout(wrap)
    v-flex(xs12)
      v-form(ref="form", v-model="valid", lazy-validation)
        v-label name
        v-text-field(v-model="email", required)
        v-label mail address
        v-text-field(v-model="password", required)
        v-btn
          | Sign Up / Login
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      email,
      password
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.user.displayName
    }
  },
  watch: {
    isLoggedIn(v) {
      if (v) {
        this.$router.push('/')
      }
    }
  },
  created() {
    if (this.isLoggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    ...mapActions('auth', ['mailLogin'])
  }
}
</script>
<style lang="sass" scoped>
$logo-height: 120px
$sm: 600px
</style>
