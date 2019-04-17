<template lang="pug">
v-layout
  v-flex(text-xs-center)
    v-card
      v-toolbar(color="deep-purple" dark)
        v-toolbar-side-icon
        v-toolbar-title 楽曲一覧
      v-list
        v-list-tile(v-for="(song, index) in songs" :key="index" :to="{path:`/song/detail/${song.id}`}" ripple)
          v-list-tile-content
            v-list-tile-title {{song.name}}

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
                id: doc.id,
                name: doc.data().name
              })
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
