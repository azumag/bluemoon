<template lang="pug">
  div
   | YOUR ACCESS TOKEN:
   div.title
    | {{ token }}
</template>

<script>
export default {
  layout: 'util',
  data() {
    return {
      user: null,
    }
  },
  computed: {
    token() {
      const endIndex = this.$route.hash.indexOf('&')
      return this.$route.hash.substring(14, endIndex)
    },
  },
}
</script>
