<template lang="pug">
v-layout
  v-flex(text-xs-center)
    v-card
      v-card-title.headline 楽曲を追加
      v-card-text
        v-text-field(v-model='songName' label='曲名')
      v-card-actions
        v-spacer
        v-btn(@click='addSong') 登録
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from '@/plugins/firebase'

const db = firebase.firestore()

@Component
export default class AddSong extends Vue {
  songName: string = ''

  addSong() {
    db.collection('songs').add({
      name: this.songName
    })
  }
}
</script>
