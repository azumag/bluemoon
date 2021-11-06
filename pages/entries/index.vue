<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-img(
            class="white--text align-end"
            height="200px"
            src="/entrylist.jpg"
          )
            v-card-title.headline
              | {{ $t('entryList') }}
    v-row(v-for="(entry, i) in entries" :key="entry.id")
      v-col(v-if="entry.event.status === 'open'" cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' shaped outlined)
          v-card-title.headline
            | {{ entry.name }}
          v-card-text
            v-btn(@click='gotoDetail(entry)' block=true outlined=true)
              | {{ $t('edit') }}
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      a: '',
      entries: [],
    }
  },
  async mounted() {
    await this.$firestore
      .collection('entries')
      .where('userId', '==', this.$firebase.currentUser.uid)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          const status = () => {
            // this is instant resort
            // TODO: get event status
            if (doc.data().eventId === 'VTH7oiZR2vmMCPgcW8xC') {
              return 'open'
            } else {
              return 'close'
            }
          }
          this.entries.push({ ...doc.data(), id: doc.id, event: { status } })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  methods: {
    gotoDetail(entry) {
      this.$router.push(this.localePath('entries') + '/' + entry.id)
    },
  },
}
</script>
