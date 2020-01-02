<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-card(color='rgb(100, 100, 100, 0.4)')
      v-card-title.headline
        | レパートリー登録
      v-card-text
        p
          | 楽曲を検索し、自分のレパートリーとして登録できます
        p
          | 見つからない場合は楽曲名を追加できます
        v-progress-circular(v-if="loading" )
        v-autocomplete(
          v-if="!loading"
          label="Search" :items="itemSearch" clearable=true
          :search-input.sync="search"
          v-model="model"
          return-object
        )
          template(v-slot:no-data)
            v-list-item
              v-list-item-title
                | {{ search }} が見つかりません。
            p
              v-btn(@click="addTuneAndRepertory" block=true color='info')
                | 追加 &amp; レパートリー登録
            p
              v-btn(@click="addTune" block=true outlined=false color='info')
                | 楽曲データベースに追加
        v-btn(v-if="model" outlined=true block=true dark @click="addRepertory")
          | レパートリー登録

    v-card(color='rgb(100, 100, 100, 0.4)')
      v-card-title
        span.headline 持ち曲
      v-card-text
        v-list
          v-list-item(v-for="(item, i) in repertoryDisplay" :key="item.id")
            v-list-item-content
              v-list-item-title(v-html="item.title")
            v-list-item-icon
              v-btn(@click="delRepertory(item)")
                | 削除
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      // bgImage,
      loading: false,
      title: '',
      dialog: false,
      items: [],
      repertories: [],
      model: null,
      search: null
    }
  },
  computed: {
    itemSearch() {
      return this.items
        .map((x) => {
          return {
            text: x.title,
            value: x.id
          }
        })
        .sort(function(a, b) {
          if (a.title < b.title) {
            return -1
          }
          if (b.title < a.title) {
            return 1
          }
          return 0
        })
    },
    repertoryDisplay() {
      return this.repertories
        .map((x) => {
          return x
        })
        .sort(function(a, b) {
          if (a.title < b.title) {
            return -1
          }
          if (b.title < a.title) {
            return 1
          }
          return 0
        })
    }
  },
  // watch: {
  //   search(val) {
  //     console.log(val)
  //   }
  // },
  mounted() {
    this.$firestore
      .collection('tunes')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          // console.log(doc.data())
          this.items.push({ ...doc.data(), id: doc.id })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })

    this.$firestore
      .collection('repertories')
      .where('userRef', '==', this.$firebase.currentUser.uid)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          // console.log(doc.data())
          this.repertories.push({ ...doc.data(), id: doc.id })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    async delRepertory(item) {
      await this.$firestore
        .collection('repertories')
        .doc(item.id)
        .delete()
      const index = this.repertories.indexOf(item)
      this.repertories.splice(index, 1)
    },
    async addTuneAndRepertory() {
      const tune = await this.addTune()
      this.model = {
        text: tune.title,
        value: tune.id
      }
      await this.addRepertory()
    },
    async addTune() {
      if (
        this.items
          .map((x) => {
            return x.title
          })
          .includes(this.search)
      ) {
        this.$store.commit('info/setSnackbar', 'すでに登録されています')
        return
      }
      this.loading = true
      const value = {
        title: this.search,
        authorRef: this.$firebase.currentUser.uid
      }
      const item = await this.$firestore.collection('tunes').add(value)
      // console.log(item)
      this.$store.commit('info/setSnackbar', '登録しました')

      const tune = { ...value, id: item.id }
      this.items.push(tune)
      this.dialog = false
      this.model = null
      this.loading = false
      return tune
    },
    async addRepertory() {
      if (
        this.repertories
          .map((x) => {
            return x.title
          })
          .includes(this.model.text)
      ) {
        this.$store.commit('info/setSnackbar', 'すでに登録されています')
        return
      }
      const value = {
        title: this.model.text,
        tuneRef: this.model.value,
        userRef: this.$firebase.currentUser.uid
      }
      const repertory = await this.$firestore
        .collection('repertories')
        .add(value)
      this.$store.commit('info/setSnackbar', '登録しました')
      // console.log(item)

      this.repertories.unshift({ ...value, id: repertory.id })
      this.model = null
      this.search = null
      // this.dialog = false
    }
  }
}
</script>
