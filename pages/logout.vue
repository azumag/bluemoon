<template lang="pug">
div
</template>
<script>
export default {
  mounted() {
    this.signOut()
  },
  methods: {
    signOut() {
      this.$firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit('info/setSnackbar', 'Logout')
          this.$router.push('/')
        })
    }
  }
}
</script>
