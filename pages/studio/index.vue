<template lang="pug">
  v-layout
    v-flex.text-xs-center
      video(
        width='100px'
        src='~/assets/video/test.mp4'
        @loadeddata='onloadeddata'
      )
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
      b: ''
      // to: new TIMINGSRC.TimingObject({range:[0,100]})
    }
  },
  mounted() {
    console.log(a)
  },
  methods: {
    onloadeddata(ev) {
      // a.mediaSync(ev, a.TimingObject)
    }
  }
}
</script>
