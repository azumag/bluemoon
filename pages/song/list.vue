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
}
</script>
