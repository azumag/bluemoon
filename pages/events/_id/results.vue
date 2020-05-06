<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-card-title.headline
            | votes
    v-row(v-for="(entry, i) in entries" :key="entry.id")
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-card-title.headline
            | {{ entry.name }}
          v-card-text.title
            div.red--text(v-if="entry.votes") {{ entry.votes.length }}
            div.ma-2(v-for="(vote, j) in entry.votes")
              //- div {{ vote }}
              div.blue--text {{ users.find((u) => { return u.uid === vote.id }).name }}
              div Entry length {{ vote.entryIds.length }}
              div.ma-2(v-for="(entryJ, k) in vote.entryIds" :key="entryJ.id")
                div {{ entries.find((e) => {return e.id === entryJ}).name }}

</template>
<script>
export default {
  data() {
    return {
      a: '',
      entries: [],
      votes: [],
      users: []
    }
  },
  async mounted() {
    await this.$firestore
      .collection('users')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          this.users.push({ ...doc.data(), id: doc.id })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    await this.$firestore
      .collection('votes')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          this.votes.push({ ...doc.data(), id: doc.id })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    console.log(this.votes)
    const results = {}
    this.votes.forEach((vote) => {
      vote.entryIds.forEach((entryId) => {
        console.log(entryId)
        console.log(results[entryId])
        if (results[entryId]) {
          results[entryId].push(vote)
        } else {
          results[entryId] = [vote]
        }
      })
    })
    await this.$firestore
      .collection('entries')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          this.entries.push({ ...doc.data(), id: doc.id })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    console.log(this.entries)

    console.log(results)
    this.entries.forEach((entry) => {
      Object.keys(results).forEach((resultKey) => {
        if (entry.id === resultKey) {
          entry.votes = results[resultKey]
          console.log(results[resultKey])
        }
      })
    })

    console.log(this.entries)
    this.entries.sort((a, b) => {
      return b.votes.length - a.votes.length
    })
  }
}
</script>
