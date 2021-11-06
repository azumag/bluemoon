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
    v-row
      v-col(cols="12")
        v-card(color='rgb(100, 100, 100, 0.4)'
          shaped
        )
          v-card-title
            span.headline {{ $t('scheduledEvent')}} 
          v-card-text
            v-list
              v-list-item(v-for="(entry, i) in openEntries" :key="entry.id")
                v-list-item-content
                  v-list-item-title
                    | {{ entry.name }}
                v-list-item-icon
                  v-btn(@click='gotoDetail(entry)' block=true outlined=true)
                    | {{ $t('edit') }}
    v-row
      v-col(cols="12")
        v-card(color='rgb(100, 100, 100, 0.4)'
          shaped
        )
          v-card-title
            span.headline {{ $t('finishedEvent') }} 
          v-card-text
            v-list
              v-list-item
                v-list-item-content
              v-list-item(v-for="(entry, i) in closedEntries" :key="entry.id")
                v-list-item-content
                  v-list-item-title
                    | {{ entry.name }}
                v-list-item-icon
                  v-btn(@click='gotoDetail(entry)' block=true outlined=true)
                    | {{ $t('edit') }}
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      a: '',
      openEntries: [],
      closedEntries: [],
    }
  },
  async mounted() {
    await this.$firestore
      .collection('entries')
      .where('userId', '==', this.$firebase.currentUser.uid)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          // this is instant resort
          // TODO: get event status from firestore
          if (doc.data().eventId === 'VTH7oiZR2vmMCPgcW8xC') {
            this.openEntries.push({ ...doc.data(), id: doc.id })
          } else {
            this.closedEntries.push({ ...doc.data(), id: doc.id })
          }
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
