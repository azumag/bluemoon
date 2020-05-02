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
    v-row(v-if="availableVote && !$firebase.currentUser")
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-card-title.headline
            | 人気投票する場合はログインをお願いいたします
            div
              v-btn.mx-2(@click="gotoLogin()"
                block
                outlined
              )
                | ログイン
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
                v-btn.ma-4(color="indigo" small v-if="availableVote && $firebase.currentUser" @click="vote(entry)")
                  | {{ voteString(entry) }}
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'
import moment from 'moment'

export default {
  data() {
    return {
      a: '',
      entries: [],
      votes: []
    }
  },
  computed: {
    availableVote() {
      const base = moment('2020-05-01 23:00:00')
      const afterBroadcast = base.isBefore(moment())
      return afterBroadcast
    }
  },
  async mounted() {
    await this.$firestore
      .collection('votes')
      .doc(this.$firebase.currentUser.uid)
      .get()
      .then((res) => {
        console.log(res.data())
        this.votes = res.data().entryIds
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
    await this.$firestore
      .collection('entries')
      // .where('eventId', '==', '2pbLysWMNdNXnSvgBNr2')
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
    gotoLogin() {
      this.$router.push('/login/')
    },
    isVoted(entry) {
      return this.votes.find((e) => {
        return e === entry.id
      })
    },
    voteString(entry) {
      if (this.isVoted(entry)) {
        return '投票を取り消す'
      }
      return '投票する'
    },
    unvote(entry) {
      const index = this.votes.indexOf(entry.id)
      this.votes.splice(index, 1)
      this.$firestore
        .collection('votes')
        .doc(this.$firebase.currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            return this.$firestore
              .collection('votes')
              .doc(this.$firebase.currentUser.uid)
              .set({
                entryIds: this.votes
              })
              .then((result) => {
                this.$store.commit('info/setSnackbar', '取り消しました')
              })
          }
        })
    },
    vote(entry) {
      if (this.$firebase.currentUser) {
        if (this.isVoted(entry)) {
          return this.unvote(entry)
        }
        this.$firestore
          .collection('votes')
          .doc(this.$firebase.currentUser.uid)
          .get()
          .then((doc) => {
            console.log(doc.exists)
            if (!doc.exists) {
              return this.$firestore
                .collection('votes')
                .doc(this.$firebase.currentUser.uid)
                .set({
                  entryIds: [entry.id]
                })
                .then((result) => {
                  this.votes = [entry.id]
                  this.$store.commit('info/setSnackbar', '投票しました')
                })
            } else {
              const data = doc.data()
              if (data.entryIds.length >= 3) {
                this.$store.commit(
                  'info/setSnackbar',
                  '投票数上限を超えています'
                )
                return
              }
              if (
                data.entryIds.find((e) => {
                  return e === entry.id
                })
              ) {
                this.$store.commit('info/setSnackbar', 'すでにあります')
              } else {
                data.entryIds.push(entry.id)
                return this.$firestore
                  .collection('votes')
                  .doc(this.$firebase.currentUser.uid)
                  .set({
                    entryIds: data.entryIds
                  })
                  .then((result) => {
                    this.votes = data.entryIds
                    this.$store.commit('info/setSnackbar', '投票しました')
                  })
              }
            }
          })
          .catch((err) => {
            console.log('Error getting document', err)
          })
      } else {
        this.$store.commit(
          'info/setSnackbar',
          '投票するためにログインをお願いいたします🙇‍♂'
        )
      }
    }
  }
}
</script>
