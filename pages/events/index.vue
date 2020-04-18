<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-card(color='rgb(100, 100, 100, 0.4)')
      v-card-title.headline
        | 開催行事
      v-card-text
        | 開催されている行事の情報・参加登録等
        hr
    v-card(color='rgb(100, 100, 100, 0.4)')
      v-card-title
        span.headline 募集中
      v-card-text
        v-list
          v-list-item(v-for="(event, i) in events" :key="event.id")
            v-list-item-content
              v-list-item-title(v-html="event.title")
            v-list-item-icon
              v-btn(@click="gotoEvent(event)")
                | 詳細
</template>

<script>
// TODO: consider: this page will be moved to headless CMS

export default {
  data() {
    return {
      // bgImage,
      events: []
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    gotoEvent(event) {
      this.$router.push('/events/' + event.id)
    },
    getEvents() {
      // await this.$firestore
      //   .collection('events')
      //   .where('public', '==', true)
      //   .get()
      //   .then((res) => {
      //     res.forEach((doc) => {
      //       this.events.push({ ...doc.data(), id: doc.id })
      //     })
      //   })
      //   .catch((err) => {
      //     console.log('Error getting documents', err)
      //   })
      this.events = [
        {
          id: '2pbLysWMNdNXnSvgBNr2',
          title: 'オンラインフェス'
        }
      ]
    }
  }
}
</script>
