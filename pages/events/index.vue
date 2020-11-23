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
          | {{$t('openEvent')}}
      v-card-text
        | {{$t('eventDescription')}}
        span.ma-4
          v-btn(v-for="locale in availableLocales" :key='locale' color='orange' outlined)
            nuxt-link(:key="locale" :to="switchLocalePath(locale)") {{ $t(locale) }}
    v-row
      v-col(cols="12")
        v-card(color='rgb(100, 100, 100, 0.4)'
          shaped
        )
          v-card-title
            span.headline {{ $t('scheduledEvent')}} 
          v-card-text
            v-list
              v-list-item(v-for="(event, i) in openEvents" :key="event.id")
                v-list-item-content
                  v-list-item-title(v-html="event.title")
                v-list-item-icon
                  v-btn(@click="gotoEvent(event)" outlined)
                    | {{ $t('detail') }}
    v-row
      v-col(cols="12")
        v-card(color='rgb(100, 100, 100, 0.4)'
          shaped
        )
          v-card-title
            span.headline {{ $t('finishedEvent') }} 
          v-card-text
            v-list
              v-list-item(v-for="(event, i) in closedEvents" :key="event.id")
                v-list-item-content
                  v-list-item-title(v-html="event.title")
                v-list-item-icon
                  v-btn(@click="gotoEvent(event)" outlined)
                    | {{ $t('detail') }}
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
  computed: {
    availableLocales() {
      // console.log(this.$i18n.locales)
      // console.log(this.$i18n.locale)
      return this.$i18n.locales.filter((i) => i !== this.$i18n.locale)
    },
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    gotoEvent(event) {
      this.$router.push(this.localePath('events') + '/' + event.id)
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
