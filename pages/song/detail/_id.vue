
<template lang="pug">
v-layout
  v-flex(text-xs-center)
    v-card
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()

@Component
export default class SongDetail extends Vue {
  song: {
    name: string
  } = {}

  getSong() {
    const id: string = this.$route.params.id
    const songRef = db.collection('songs').doc(id)
    songRef.get().then(doc => {
      this.song = {
        name: doc.data().name
      }
    })
  }

  created() {
    this.getSong()
  }
}
</script>
