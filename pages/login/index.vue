<template lang="pug">
v-container
  v-layout(wrap)
    v-flex(xs12)
      v-layout.logo-wrapper(@click='twitterLogin')
        img.logo(:src='twitterLogo')
        v-sheet.logo-text(color='white')
          | Sign in with Twitter
      v-layout.logo-wrapper(@click='facebookLogin')
        v-sheet.logo-text(color='white')
          | Sign in with Facebook
      v-layout.google-logo.logo-wrapper(@click='googleLogin')
        img.logo(:src='googleLogo')
        v-sheet.logo-text(color='#4285F4')
          | Sign in with Google
      v-btn.outlined(to='/login/mail-signin')
        | Sign in with E-mail
      v-btn.outlined(to='/login/mail-signup')
        | Sign up with E-Mail
</template>
<script>
import twitterLogo from '@/assets/img/logo/twitterLogo.svg'
import googleLogo from '@/assets/img/logo/googleLogo.svg'

export default {
  data() {
    return {
      twitterLogo,
      googleLogo
    }
  },
  mounted() {
    this.$auth.onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('info/setSnackbar', 'Signed in')
        this.$router.push('/')
      }
    })
  },
  methods: {
    twitterLogin() {
      const provider = new this.$firebase.auth.TwitterAuthProvider()
      this.$auth.signInWithRedirect(provider)
    },
    googleLogin() {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$auth.signInWithRedirect(provider)
    },
    facebookLogin() {
      const provider = new this.$firebase.auth.FacebookAuthProvider()
      this.$auth.signInWithRedirect(provider)
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
