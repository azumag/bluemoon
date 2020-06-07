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
          ref="recordedVideo" id="recordedVideo"
          @loadeddata='onloadeddata'
        )
      div
        video(
          width='300px'
          ref="recording" id="recording"
          autoplay
          muted
        )
      div
        | {{ position }}
        v-progress-linear(:value='position')
      div
        v-btn(@click="start")
          | Start
        v-btn(@click="stop")
          | Stop
      div
        v-btn(@click="startRec")
          | StartRec
        v-btn(@click="stopRec")
          | StopRec
      footer
        small
          em
            | &mdash;DEBUG VERSION
</template>

<script>
import Timingsrc from '~/assets/lib/timingsrc/v2/timingsrc.js'

export default {
  data() {
    return {
      srcLoaded: false,
      recording: '',
      recordingState: false,
      position: 0,
      to: new Timingsrc.TimingObject(),
      mediaRecorder: null,
      recordedBlobs: [],
      recordStarted: false,
    }
  },
  watch: {
    // position(v) {
    //   if (
    //     v > 0.1 &&
    //     this.mediaRecorder &&
    //     this.mediaRecorder.state === 'inactive' &&
    //     this.recordingState
    //   ) {
    //     this.mediaRecorder.start(10)
    //   }
    // }
  },
  mounted() {
    this.recording = this.$refs.recording
    this.setRecord()
    this.to.query()
    this.to.on('timeupdate', () => {
      this.position = this.to.query().position.toFixed(2)
    })
  },
  methods: {
    setRecord() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        return navigator.mediaDevices
          .getUserMedia({
            video: true,
            audio: true,
          })
          .then((stream) => {
            this.recording.srcObject = stream
            this.recording.play()
            this.mediaRecorder = new MediaRecorder(stream, {})
            this.recordedBlobs = []
            this.mediaRecorder.ondataavailable = (event) => {
              if (event.data && event.data.size > 0) {
                this.recordedBlobs.push(event.data)
              }
            }
          })
      }
    },
    startRec() {
      this.$refs.recordedVideo.src = null
      this.$refs.recordedVideo.srcObject = null
      this.recordedBlobs = []
      this.mediaRecorder.start(10)
      this.start()
    },
    stopRec() {
      this.mediaRecorder.stop()
      this.stop()
    },
    start() {
      if (this.recordedBlobs.length > 0) {
        const superBuffer = new Blob(this.recordedBlobs, { type: 'video/webm' })
        this.$refs.recordedVideo.src = null
        this.$refs.recordedVideo.srcObject = null
        this.$refs.recordedVideo.src = window.URL.createObjectURL(superBuffer)
        this.$refs.recordedVideo.controls = true
      }
      this.to.update({ position: 0.0 })
      this.to.update({ velocity: 1.0 })
    },
    stop() {
      this.to.update({ velocity: 0.0 })
      this.to.update({ position: 0.0 })
    },
    onloadeddata(ev) {
      ev.target.volume = 0.2
      Timingsrc.MediaScape.mediaSync(ev.target, this.to, {
        skew: 0.2,
        debug: true,
      })
    },
  },
}
</script>
