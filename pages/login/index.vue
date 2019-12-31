<template lang="pug">
v-container
  v-layout(wrap)
    v-flex(xs12)
      v-row(v-for='loginMethod in loginMethods' :key="loginMethod.title")
        v-col
          v-card(color='rgb(100, 100, 100, 0.4)' raised=true)
            span(v-if='loginMethod.action')
              v-btn(block=true outlined=true @click='loginMethod.action')
                | {{ loginMethod.title }}
            span(v-else)
              v-btn(block=true outlined=true :to='loginMethod.to')
                | {{ loginMethod.title }}
</template>
<script>
export default {
  data() {
    return {
      loginMethods: [
        {
          title: 'Facebook',
          action: this.facebookLogin
        },
        {
          title: 'Google',
          action: this.googleLogin
        },
        {
          title: 'Twitter',
          action: this.twitterLogin
        },
        {
          title: 'Email Signup',
          to: '/login/mail-signup'
        },
        {
          title: 'Email Login',
          to: '/login/mail-signin'
        }
      ]
    }
  },
  mounted() {
    if (this.$firebase.currentUser) {
      this.$store.commit('info/setSnackbar', 'Signed in')
      this.$router.push('/')
    }
  },
  methods: {
    async twitterLogin() {
      const provider = new this.$firebase.auth.TwitterAuthProvider()
      await this.$firebase.auth().signInWithRedirect(provider)
    },
    async googleLogin() {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      await this.$firebase.auth().signInWithRedirect(provider)
    },
    async facebookLogin() {
      const provider = new this.$firebase.auth.FacebookAuthProvider()
      await this.$firebase.auth().signInWithRedirect(provider)
    }
  }
}
</script>
<style lang="sass" scoped>
$logo-height: 120px
$sm: 600px

.logo-wrapper
  height: 60px
  margin-top: 15px
  cursor: pointer

  @media (min-width: $sm)
    height: 120px
    margin-top: 30px

.logo-text
  padding-left: 10px
  height: 100%
  width: calc(100% - 60px)
  color: #555
  line-height: 60px
  vertical-align: center
  font-size: 20px
  font-weight: bold

  @media (min-width: $sm)
    width: calc(100% - 120px)
    line-height: 120px
    font-size: 35px
    padding-left: 30px

.logo
  height: 100%

.google-logo
  background-color: #4285F4
  .logo-text
    color: #FFF
</style>
