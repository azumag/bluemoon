<template lang="pug">
v-layout
  v-flex(text-xs-center)
    v-card
      v-card-title.headline 楽曲を追加
      v-card-text
        v-text-field(label='曲名')
      v-card-actions
        v-spacer
        v-btn 登録
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AddSong extends Vue {}
</script>
