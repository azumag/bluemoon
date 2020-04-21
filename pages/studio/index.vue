<template lang="pug">
  v-layout
    v-flex.text-xs-center
      div
        video(
          width='300px'
          src='~/assets/video/test.mp4'
          @loadeddata='onloadeddata'
        )
        video(
          width='300px'
          src='~/assets/video/test.mp4'
          @loadeddata='onloadeddata'
        )
      div
        v-btn(@click="start")
          | Start
      footer
        small
          em
            | &mdash;John Johnson
</template>

<script>
// import mediascape from '~/assets/lib/mediasync.js'
import a from '~/assets/lib/timingsrc/v2/timingsrc.js'

export default {
  data() {
    return {
      b: '',
      to: new a.TimingObject({ range: [0, 100] })
    }
  },
  mounted() {
    console.log(a)
  },
  methods: {
    start() {
      this.to.query()
      this.to.update({ velocity: 1.0 })
    },
    onloadeddata(ev) {
      a.MediaSync.mediaSync(ev.target, this.to)
    }
  }
}
</script>
