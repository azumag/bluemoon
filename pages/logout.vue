<template lang="pug">
div
</template>
<script>
export default {
  async created() {
    await this.$auth.signOut()
    this.$store.commit('auth/setUser', {})
    this.$router.push('/')
  }
}
</script>
