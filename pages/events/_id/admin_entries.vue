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
    //- v-row(v-if="availableVote && !$firebase.currentUser")
    //-   v-col(cols=12)
    //-     v-card(color='rgb(100, 100, 100, 0.4)' outlined)
    //-       v-card-title.headline
    //-         | 人気投票する場合はログインをお願いいたします
    //-         div
    //-           v-btn.mx-2(@click="gotoLogin()"
    //-             block
    //-             outlined
    //-           )
    //-             | ログイン
    //- v-col(cols=12)
    //-     v-card(color='rgb(100, 100, 100, 0.4)')
    //-       v-chip(
    //-         class="ma-2"
    //-         color="red"
    //-         text-color="white"
    //-       )
    //-         | 放送URL
    //-       span.title
    //-         a(href="https://www.youtube.com/watch?v=vah8gAsdyNA")
    //-           | 当日（5月4日19時から）こちらで放送を行います
    v-row
      v-col(cols=12)
        v-card(color='rgb(100, 100, 100, 0.4)' outlined)
          v-card-title.headline
            | エントリーリスト
          v-card-text
            | (順不同・放送順ではありません)
          v-expansion-panels
            v-expansion-panel(v-for="(entry, i) in entries" :key="entry.id")
              v-expansion-panel-header
                | {{ entry.name }}
              v-expansion-panel-content.text--secondary
                div.ma-2 {{ entry.description }}
                //- div.ma-2 {{ {...entry} }}
                div(v-if="entry.fileNames")
                  div(v-for="filename in entry.fileNames" :key='filename')
                    | {{ filename }}
                div(v-if="entry.fileURLs")
                  | {{ entry.fileURLs }}

                div(v-if="entry.publishAgree")
                  v-chip アーカイブ可能

</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'
import moment from 'moment'

export default {
  data() {
    return {
      a: '',
      entries: [],
      votes: [],
    }
  },
  computed: {
    availableVote() {
      const deadline = moment('2020-05-06 23:59:59')
      return moment().isBefore(deadline)
    },
  },
  async mounted() {
    if (this.$firebase.currentUser) {
      if (
        this.$firebase.currentUser.uid === '9OxUbixjH0NhepFvA2ZImgrNfAB3' ||
        this.$firebase.currentUser.uid === 'ujmwQq1n0rWQPyTtI5RYLBmykYE2' ||
        this.$firebase.currentUser.uid === 'tekzU5qfJPXWP3r2y2PnTcpTXI23' ||
        this.$firebase.currentUser.uid === 'mxtWRtvtuehpy91AG6KuRPfM5Nz2'
      ) {
      } else {
        this.$router.push('/')
      }
    } else {
      this.$router.push('/login/')
    }
    if (this.$firebase.currentUser) {
      // await this.$firestore
      //   .collection('votes')
      //   .doc(this.$firebase.currentUser.uid)
      //   .get()
      //   .then((res) => {
      //     console.log(res.data())
      //     this.votes = res.data().entryIds
      //   })
      //   .catch((err) => {
      //     console.log('Error getting documents', err)
      //   })
    }
    await this.$firestore
      .collection('entries')
      .where('eventId', '==', this.$route.params.id)
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
    // unvote(entry) {
    //   const index = this.votes.indexOf(entry.id)
    //   this.votes.splice(index, 1)
    //   this.$firestore
    //     .collection('votes')
    //     .doc(this.$firebase.currentUser.uid)
    //     .get()
    //     .then((doc) => {
    //       if (doc.exists) {
    //         return this.$firestore
    //           .collection('votes')
    //           .doc(this.$firebase.currentUser.uid)
    //           .set({
    //             entryIds: this.votes,
    //           })
    //           .then(() => {
    //             this.$message.show('取り消しました')
    //           })
    //       }
    //     })
    // },
    // vote(entry) {
    //   if (this.$firebase.currentUser) {
    //     if (this.isVoted(entry)) {
    //       return this.unvote(entry)
    //     }
    //     this.$firestore
    //       .collection('votes')
    //       .doc(this.$firebase.currentUser.uid)
    //       .get()
    //       .then((doc) => {
    //         console.log(doc.exists)
    //         if (!doc.exists) {
    //           return this.$firestore
    //             .collection('votes')
    //             .doc(this.$firebase.currentUser.uid)
    //             .set({
    //               entryIds: [entry.id],
    //             })
    //             .then(() => {
    //               this.votes = [entry.id]
    //               this.$message.show('投票しました')
    //             })
    //         } else {
    //           const data = doc.data()
    //           if (data.entryIds.length >= 3) {
    //             this.$message.show('投票数上限を超えています')
    //             return
    //           }
    //           if (
    //             data.entryIds.find((e) => {
    //               return e === entry.id
    //             })
    //           ) {
    //             this.$message.show('すでにあります')
    //           } else {
    //             data.entryIds.push(entry.id)
    //             return this.$firestore
    //               .collection('votes')
    //               .doc(this.$firebase.currentUser.uid)
    //               .set({
    //                 entryIds: data.entryIds,
    //               })
    //               .then(() => {
    //                 this.votes = data.entryIds
    //                 this.$message.show('投票しました')
    //               })
    //           }
    //         }
    //       })
    //       .catch((err) => {
    //         console.log('Error getting document', err)
    //       })
    //   } else {
    //     this.$message.show('投票するためにログインをお願いいたします🙇‍♂')
    //   }
    // },
  },
}
</script>
