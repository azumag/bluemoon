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
        v-autocomplete(
          label="Search" :items="itemSearch" clearable=true
          no-data-text="楽曲名の登録がありません"
          :search-input.sync="search"
          v-model="model"
          return-object
        )
          template(v-slot:no-data)
            v-list-item
              v-list-item-title(v-if="search")
                | {{ search }} が見つかりません。
                v-btn(@click="openDialog")
                  | 追加する
        v-btn(v-if="model" outlined=true block=true dark @click="addRepertory")
          | {{ model.text }} を自分のレパートリーとして登録

    v-dialog(v-model="dialog" persistent max-width="600px")
      v-card
        v-card-title
          span.headline 楽曲名を追加
        v-card-text
          v-text-field(label="楽曲名" required v-model="search")
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" text @click="dialog = false")
            | やめる
          v-btn(color="blue darken-1" text @click="addTune")
            | 追加

    v-card(color='rgb(100, 100, 100, 0.4)')
      v-card-title
        span.headline 持ち曲
      v-card-text
        v-list
          v-list-item(v-for="(item, i) in repertories" :key="item.id")
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
      return this.items.map((x) => {
        return {
          text: x.title,
          value: x.id
        }
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
      const value = {
        title: this.search,
        authorRef: this.$firebase.currentUser.uid
      }
      const item = await this.$firestore.collection('tunes').add(value)
      // console.log(item)
      this.$store.commit('info/setSnackbar', '登録しました')

      this.items.push({ ...value, id: item.id })
      this.dialog = false
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
