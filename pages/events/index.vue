<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-card(color='rgb(100, 100, 100, 0.4)')
      v-img(
        class="white--text align-end"
        height="200px"
        src="/events2-sm.jpg"
      )
        v-card-title.headline
          | 開催行事
      v-card-text
        | 行事の情報・参加登録等
        hr
    v-row
      v-col(cols="12")
        v-card(color='rgb(100, 100, 100, 0.4)'
          shaped
        )
          v-card-title
            span.headline 開催予定
          v-card-text
            v-list
              v-list-item(v-for="(event, i) in openEvents" :key="event.id")
                v-list-item-content
                  v-list-item-title(v-html="event.title")
                v-list-item-icon
                  v-btn(@click="gotoEvent(event)" outlined)
                    | 詳細
    v-row
      v-col(cols="12")
        v-card(color='rgb(100, 100, 100, 0.4)'
          shaped
        )
          v-card-title
            span.headline 開催終了
          v-card-text
            v-list
              v-list-item(v-for="(event, i) in closedEvents" :key="event.id")
                v-list-item-content
                  v-list-item-title(v-html="event.title")
                v-list-item-icon
                  v-btn(@click="gotoEvent(event)" outlined)
                    | 詳細
</template>

<script>
// TODO: consider: this page will be moved to headless CMS

export default {
  data() {
    return {
      // bgImage,
      openEvents: [],
      closedEvents: [],
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    gotoEvent(event) {
      this.$router.push('/events/' + event.id)
    },
    async getEvents() {
      await this.$firestore
        .collection('events')
        .get()
        .then((res) => {
          res.forEach((doc) => {
            if (doc.data().status === 'open') {
              this.openEvents.push({ ...doc.data(), id: doc.id })
            } else if (doc.data().status === 'closed') {
              this.closedEvents.push({ ...doc.data(), id: doc.id })
            }
          })
        })
        .catch((err) => {
          console.log('Error getting documents', err)
        })
      // this.openEvents = [
      //   {
      //     id: 'CAtHuz0HJkkl3AKPKkAu',
      //     title: 'Bluegrass Lockdown Music Festival Vol.2',
      //   },
      // ]
      // this.closedEvents = [
      //   {
      //     id: '2pbLysWMNdNXnSvgBNr2',
      //     title: 'Bluegrass Lockdown Music Festival',
      //   },
      // ]
    },
  },
}
</script>
