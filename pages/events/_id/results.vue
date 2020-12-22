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
              //- div.blue--text {{ users.find((u) => { return u.uid === vote.id }).name }}
              //- div Entry length {{ vote.entryKinds.length }}
              div.ma-2(v-for="(entryJ, k) in vote.entryKinds" :key="entryJ")
                //- div {{ entries.find((e) => {return e.id === entryJ}).name }}
                | {{ entryJ }}

</template>
<script>
export default {
  data() {
    return {
      a: '',
      entries: [],
      votes: [],
      users: [],
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
      .where('entryKinds', '!=', 'false')
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
      vote.entryKinds.forEach((ek) => {
        Object.keys(ek).forEach((ekey) => {
          const entryID = ek[ekey]
          if (results[entryID]) {
            results[entryID].push(ekey)
          } else {
            results[entryID] = [ekey]
          }
        })
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
      return (b.votes ? b.votes.length : 0) - (a.votes ? a.votes.length : 0)
    })
  },
}
</script>
