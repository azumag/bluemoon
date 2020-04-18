<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' tile)
          v-card-title.headline
            | Your Entries
    v-row(v-for="(entry, i) in entries" :key="entry.id")
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' tile)
          v-card-title.headline
            | {{ entry.name }}
          v-card-text
            v-btn(@click='gotoDetail(entry)' v-show="!loading" block=true outlined=true)
              | エントリー確認・編集
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      a: '',
      entries: []
    }
  },
  async mounted() {
    await this.$firestore
      .collection('entries')
      .where('userId', '==', this.$firebase.currentUser.uid)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          this.entries.push({ ...doc.data(), id: doc.id })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  methods: {
    gotoDetail(entry) {
      this.$router.push('/entries/' + entry.id)
    }
  }
}
</script>
