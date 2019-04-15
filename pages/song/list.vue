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
export default class SongList extends Vue {
  songs: any[] = []

  getSongs() {
    return db
      .collection('songs')
      .get()
      .then(
        (querySnapshot: any): void => {
          querySnapshot.forEach(
            (doc: any): void => {
              this.songs.push({
                name: doc.data().name
              })
              console.log(doc.data())
            }
          )
        }
      )
  }

  created() {
    this.getSongs()
  }
}
</script>
