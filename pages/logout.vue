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
          this.$message.show('Logout')
          this.$router.push('/')
        })
    },
  },
}
</script>
