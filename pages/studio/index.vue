<template lang="pug">
  v-layout
    v-flex.text-xs-center
      div
        video(
          width='300px'
          src='~/assets/video/test.mp4'
          @loadeddata='onloadeddata'
        )
        //- video(
        //-   width='300px'
        //-   src='~/assets/video/test.mp4'
        //-   @loadeddata='onloadeddata'
        //- )
        video(
          width='300px'
          ref="recording" id="recording"
          autoplay
          muted
        )
        video(
          width='300px'
          ref="recordedVideo" id="recordedVideo"
          @loadeddata='onloadeddata'
        )
      div
        | {{ position }}
      div
        v-btn(@click="start")
          | Start
        v-btn(@click="stop")
          | Stop
        v-btn(@click="startRec")
          | StartRec
        v-btn(@click="stopRec")
          | StopRec
      div
        v-btn(@click="playRec")
          | StartAll
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
      recording: '',
      position: 0,
      to: new a.TimingObject({ range: [0, 100] }),
      mediaRecorder: null,
      recordedBlobs: null,
      recordStarted: false
    }
  },
  watch: {
    'mediaRecorder.state'(v) {
      console.log(v)
      if (v === 'recording') {
        this.start()
      }
    }
  },
  mounted() {
    this.recording = this.$refs.recording
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 128, height: 72 },
          audio: true
        })
        .then((stream) => {
          this.recording.srcObject = stream
          this.recording.play()
        })
    }
    this.to.query()
    this.to.on('timeupdate', () => {
      this.position = this.to.query().position.toFixed(2)
    })
  },
  methods: {
    startRec() {
      this.recordedBlobs = []
      this.mediaRecorder = new MediaRecorder(this.recording.srcObject, {})
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data)
        }
      }
      this.mediaRecorder.start(10)
    },
    stopRec() {
      this.mediaRecorder.stop()
      this.stop()
    },
    playRec() {
      const superBuffer = new Blob(this.recordedBlobs, { type: 'video/webm' })
      this.$refs.recordedVideo.src = null
      this.$refs.recordedVideo.srcObject = null
      this.$refs.recordedVideo.src = window.URL.createObjectURL(superBuffer)
      this.$refs.recordedVideo.controls = true
      this.$refs.recordedVideo.play()
      this.start()
    },
    start() {
      this.to.update({ position: 0.0 })
      this.to.update({ velocity: 1.0 })
    },
    stop() {
      this.to.update({ velocity: 0.0 })
      this.to.update({ position: 0.0 })
    },
    onloadeddata(ev) {
      a.MediaSync.mediaSync(ev.target, this.to)
    }
  }
}
</script>
