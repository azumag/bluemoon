<template lang="pug">
div
</template>
<script>
export default {
  created() {
    this.$auth.signOut().then(() => {
      this.$store.commit('info/setSnackbar', 'Logout')
      this.$router.push('/')
    })
  }
}
</script>
