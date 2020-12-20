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
            | 投票する場合はログインをお願いいたします
            div
              v-btn.mx-2(@click="gotoLogin()"
                block
                outlined
              )
                | ログイン
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

                span(v-if="(entry.videoType === 'live' || entry.videoType === 'mixed')" color='blue')
                  span(v-if="isVoted('ライブ動画賞')")
                    v-btn.ma-4(color="red" small v-if="availableVote && $firebase.currentUser" @click="vote(entry, 'ライブ動画賞')")
                      | {{voteString('ライブ動画賞')}}
                  span(v-if="!isVoted('ライブ動画賞')")
                    v-btn.ma-4(color="indigo" small v-if="availableVote && $firebase.currentUser" @click="vote(entry, 'ライブ動画賞')")
                      | ライブ動画賞
                
                span(v-for="(voteKind, i) in prizes" :key='voteKind')
                  v-btn.ma-4(:color="voteColor(voteKind)" small v-if="availableVote && $firebase.currentUser" @click="vote(entry, voteKind)")
                    | {{ voteString(voteKind) }}
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'
// import moment from 'moment'

export default {
  data() {
    return {
      a: '',
      entries: [],
      votes: {},
      prizes: [
        'とにかく端的に好き',
        '動画編集技術賞',
        '音声技術賞',
        'ブルーグラス愛を感じる賞',
        '独創独自賞',
        '演奏すごい賞',
        '心にしみた賞',
      ],
    }
  },
  computed: {
    availableVote() {
      // const deadline = moment('2020-05-06 23:59:59')
      // return moment().isBefore(deadline)
      return true
    },
  },
  async mounted() {
    // if (this.$firebase.currentUser) {
    //   if (
    //     this.$firebase.currentUser.uid === '9OxUbixjH0NhepFvA2ZImgrNfAB3' ||
    //     this.$firebase.currentUser.uid === 'ujmwQq1n0rWQPyTtI5RYLBmykYE2' ||
    //     this.$firebase.currentUser.uid === 'tekzU5qfJPXWP3r2y2PnTcpTXI23' ||
    //     this.$firebase.currentUser.uid === 'mxtWRtvtuehpy91AG6KuRPfM5Nz2'
    //   ) {
    //   } else {
    //     this.$router.push('/')
    //   }
    // } else {
    //   this.$router.push('/login/')
    // }
    if (this.$firebase.currentUser) {
      await this.$firestore
        .collection('votes')
        .doc(this.$firebase.currentUser.uid)
        .get()
        .then((res) => {
          // console.log(res.data())
          // this.votes = res.data().entryIds
          this.votes = res.data().entryKinds
        })
        .catch((err) => {
          console.log('Error getting documents', err)
        })
    }
    await this.$firestore
      .collection('entries')
      .where('eventId', '==', this.$route.params.id)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          this.entries.push({ ...doc.data(), id: doc.id })
        })
        console.log(this.entries)
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  methods: {
    voteString(kind) {
      if (this.isVoted(kind)) {
        const entryID = this.votes[kind]
        // console.log(entryID)
        // console.log(this.entries)
        const targetEntry = this.entries.find((e) => {
          return e.id === entryID
        })

        return kind + ' : ' + targetEntry.name + 'への投票済みを取り消す'
      }
      return kind
    },
    voteColor(kind) {
      if (this.isVoted(kind)) {
        return 'red'
      }
      return 'indigo'
    },
    gotoLogin() {
      this.$router.push('/login/')
    },
    isVoted(kind) {
      if (this.votes === undefined) {
        return false
      }
      return Object.keys(this.votes).find((e) => {
        return e === kind
      })
    },
    unvote(kind) {
      delete this.votes[kind]
      this.$firestore
        .collection('votes')
        .doc(this.$firebase.currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const createdAt = doc.data().createdAt
              ? doc.data().createdAt
              : new Date()
            return this.$firestore
              .collection('votes')
              .doc(this.$firebase.currentUser.uid)
              .set({
                entryKinds: this.votes,
                updatedAt: new Date(),
                createdAt,
              })
              .then(() => {
                console.log(this.votes)
                this.votes = { ...this.votes }
                this.$message.show('取り消しました')
              })
          }
        })
    },
    vote(entry, kind) {
      if (this.$firebase.currentUser) {
        if (this.isVoted(kind)) {
          return this.unvote(kind)
        }
        this.$firestore
          .collection('votes')
          .doc(this.$firebase.currentUser.uid)
          .get()
          .then((doc) => {
            const entryKinds = {}
            entryKinds[kind] = entry.id
            console.log(doc.exists)
            if (!doc.exists) {
              return this.$firestore
                .collection('votes')
                .doc(this.$firebase.currentUser.uid)
                .set({ entryKinds, createdAt: new Date() })
                .then(() => {
                  this.votes = entryKinds
                  this.$message.show('投票しました')
                })
            } else {
              const data = doc.data()
              // if (data.entryIds.length >= 3) {
              //   this.$message.show('投票数上限を超えています')
              //   return
              // }
              if (
                data.entryKinds !== undefined &&
                Object.keys(data.entryKinds).find((e) => {
                  return e === kind
                })
              ) {
                this.$message.show('すでにあります')
              } else {
                if (data.entryKinds === undefined) {
                  data.entryKinds = {}
                }
                data.entryKinds[kind] = entry.id
                const createdAt = data.createdAt ? data.createdAt : new Date()
                return this.$firestore
                  .collection('votes')
                  .doc(this.$firebase.currentUser.uid)
                  .set({
                    entryKinds: data.entryKinds,
                    createdAt,
                    updatedAt: new Date(),
                  })
                  .then(() => {
                    this.votes = data.entryKinds
                    this.$message.show('投票しました')
                  })
              }
            }
          })
          .catch((err) => {
            console.log('Error getting document', err)
          })
      } else {
        this.$message.show('投票するためにログインをお願いいたします🙇‍♂')
      }
    },
  },
}
</script>
