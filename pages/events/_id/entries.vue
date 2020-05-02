<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-img(
            class="white--text align-end"
            height="200px"
            src="/entryedit-sm.jpg"
          )
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-card-title.headline
            | エントリーリスト
          v-expansion-panels
            v-expansion-panel(v-for="(entry, i) in entries" :key="entry.id")
              v-expansion-panel-header
                | {{ entry.name }}
              v-expansion-panel-content.text--secondary
                div.ma-2 {{ entry.description }}
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
      .where('eventId', '==', '2pbLysWMNdNXnSvgBNr2')
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
