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
            | {{ entry.votes }}
            //- div.red--text(v-if="Object.keys(entry.votes).length > 0") {{ entry.votes.length }}
            //- div.ma-2(v-if="Object.keys(entry.votes).length" v-for="(votekey) in Object.keys(entry.votes)")
              div {{ votekey }}
              //- span {{ entry.votes[votekey] }}
              //- div.blue--text {{ users.find((u) => { return u.uid === vote.id }).name }}
              //- div Entry length {{ vote.entryKinds.length }}
              //- div.ma-2(v-for="(key, k) in Object.keys(vote.entryKinds)" :key="entryJ")
                //- div {{ entries.find((e) => {return e.id === entryJ}).name }}
                | {{ key }}

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
      .get()
      .then((res) => {
        res.forEach((doc) => {
          const data = doc.data()
          if (data.entryKinds) {
            this.votes.push({ ...doc.data(), id: doc.id })
          }
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    console.log({ vote: this.votes })
    const results = {}
    this.votes.forEach((vote) => {
      console.log(vote.entryKinds)
      Object.keys(vote.entryKinds).forEach((ekey) => {
        const entryID = vote.entryKinds[ekey]
        if (results[entryID]) {
          results[entryID].push(ekey)
        } else {
          results[entryID] = [ekey]
        }
      })
    })
    await this.$firestore
      .collection('entries')
      .where('eventId', '==', 'nWIe42DjxjQ4sircilRw')
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
      entry.votes = {}
      Object.keys(results).forEach((resultKey) => {
        if (entry.id === resultKey) {
          results[resultKey].forEach((nkey) => {
            console.log({ nkey })
            if (entry.votes[nkey]) {
              entry.votes[nkey] += 1
            } else {
              entry.votes[nkey] = 1
            }
          })
          console.log(results[resultKey])
        }
      })
      console.log({ vo: entry.votes })
    })

    console.log(this.entries)
    this.entries.sort((a, b) => {
      return (b.votes ? b.votes.length : 0) - (a.votes ? a.votes.length : 0)
    })
  },
}
</script>
