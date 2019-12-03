<template lang="pug">
v-container
  v-row
    v-text-field(label='楽曲名' v-model='name')
  v-row
    v-btn(color='primary' @click='addSong') 登録
</template>
<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    async addSong() {
      const value = {
        name: this.name
      }
      const song = await this.$firestore.collection('songs').add(value)
      this.$router.push(`/song/edit/${song.id}`)
    }
  }
}
</script>
