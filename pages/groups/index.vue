<template lang="pug">
v-layout(column, justify-center, align-center)
  v-flex(xs12, sm12, md12)
    v-card(color='rgb(100, 100, 100, 0.4)')
      v-card-title.headline
        | グループ
      v-card-text
        | グループを追加し、人を招待することで、グループ内での共通のレパートリーを探すことができます
        hr
        v-btn(@click="openAddGroupDialog" color='secondary')
          | 追加
        v-list
          v-list-item(v-for="(item, i) in items" :key="item.id"
            @click="openEditGroupDialog(item)"
          )
            v-list-item-content
              v-list-item-title(v-html="item.name")
            v-list-item-action
              v-btn(@click.stop="matching(item)" color='primary')
                | 共通曲を探す

    v-dialog(v-model="addGroupDialog" persistent max-width="600px")
      v-card
        v-card-title
          span.headline グループ追加
        v-card-text
          v-text-field(label="グループ名" required v-model="groupName")
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" text @click="addGroupDialog = false")
            | やめる
          v-btn(color="blue darken-1" text @click="addGroup")
            | 追加

    v-dialog(v-model="editGroupDialog" persistent max-width="600px")
      v-card(v-if="editGroup")
        v-card-title
        v-card-text
          v-text-field(label="グループ名" required v-model="editGroup.name")
          v-autocomplete(
            label="メンバーを検索して追加" :items="memberSearch" clearable=true
            no-data-text="NO USER"
            :search-input.sync="search"
            v-model="memberModel"
            return-object
          )
          v-btn(v-if="memberModel" outlined=true block=true dark @click="addMember")
            | {{ memberModel.text }} をグループに追加
          v-list-item(v-for="(item, i) in editGroupMembers" :key="item.id")
            v-list-item-icon
              v-icon
                | mdi-account-circle
            v-list-item-content
              v-list-item-title(v-html="item.memberName")
            v-list-item-action
              v-btn(@click.stop="delGroupMembers(item)")
                | 削除
        v-card-actions
          v-btn(@click="delGroup" color="error darken" text)
            | グループ削除
          v-spacer
          v-btn(color="blue darken-1" text @click="editGroupDialog = false")
            | とじる
          v-btn(color="blue darken-1" text @click="updateGroup")
            | 更新
</template>

<script>
// import bgImage from '@/assets/img/bluemoon_bg1.png'

export default {
  data() {
    return {
      // bgImage,
      title: '',
      addGroupDialog: false,
      editGroupDialog: false,
      items: [],
      users: [],
      editGroup: null,
      groupName: 'Untitled',
      search: null,
      memberModel: null,
      editGroupMembers: []
    }
  },
  computed: {
    memberSearch() {
      return this.users.map((x) => {
        return {
          text: x.name,
          value: x.uid
        }
      })
    }
  },
  mounted() {
    this.$firestore
      .collection('groups')
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
      .collection('users')
      .get()
      .then((res) => {
        res.forEach((doc) => {
          // console.log(doc.data())
          this.users.push({ ...doc.data(), id: doc.id })
        })
      })
      .catch((err) => {
        console.log('Error getting documents', err)
      })
  },
  methods: {
    matching(group) {
      const members = await getMembers(group)
      memberRe
      members.forEach((member) => {
        await this.$firestore
          .collection('repertories')
          .where('userRef', '==', member.memberRef)
          .get()
          .then((res) => {
            res.forEach((doc) => {
              members.push({ ...doc.data(), id: doc.id })
            })
          })
          .catch((err) => {
            console.log('Error getting documents', err)
          })
      })
      
    },
    async getMembers(item) {
      const members = []
      await this.$firestore
        .collection('groupMembers')
        .where('groupRef', '==', item.id)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            members.push({ ...doc.data(), id: doc.id })
          })
        })
        .catch((err) => {
          console.log('Error getting documents', err)
        })
      return members
    },
    openAddGroupDialog() {
      this.addGroupDialog = true
    },
    openEditGroupDialog(item) {
      // TODO: FIX
      this.editGroupMembers = await getMembers(item)
      this.editGroupDialog = true
      this.editGroup = item
    },
    async delGroup() {
      const item = this.editGroup
      // TODO: delete with ref
      if (confirm('グループを削除します。よろしいですか？')) {
        await this.$firestore
          .collection('groups')
          .doc(item.id)
          .delete()
        const index = this.items.indexOf(item)
        this.items.splice(index, 1)
      }
      this.editGroup = null
    },
    async delGroupMembers(item) {
      await this.$firestore
        .collection('groupMembers')
        .doc(item.id)
        .delete()
      const index = this.editGroupMembers.indexOf(item)
      this.editGroupMembers.splice(index, 1)
    },
    async addGroup() {
      if (
        this.items
          .map((x) => {
            return x.name
          })
          .includes(this.groupName)
      ) {
        this.$store.commit('info/setSnackbar', 'すでに登録されています')
        return
      }
      const value = {
        name: this.groupName,
        authorRef: this.$firebase.currentUser.uid
      }
      const item = await this.$firestore.collection('groups').add(value)
      // console.log(item)
      this.$store.commit('info/setSnackbar', '登録しました')

      this.items.unshift({ ...value, id: item.id })
      this.addGroupDialog = false
    },
    async updateGroup() {
      const index = this.items.indexOf(this.editGroup)
      Object.assign(this.items[index], this.editGroup)
      await this.$firestore
        .collection('groups')
        .doc(this.editGroup.id)
        .update({ ...this.editGroup })
      this.$store.commit('info/setSnackbar', '更新しました')
      this.editGroupDialog = false
    },
    async addMember() {
      // TODO: name update with ref
      if (
        this.editGroupMembers
          .map((x) => {
            return x.memberRef
          })
          .includes(this.memberModel.value)
      ) {
        this.$store.commit('info/setSnackbar', 'すでに登録されています')
        return
      }
      const value = {
        groupRef: this.editGroup.id,
        memberRef: this.memberModel.value,
        memberName: this.memberModel.text,
        groupName: this.editGroup.name,
        authorRef: this.$firebase.currentUser.uid
      }
      const item = await this.$firestore.collection('groupMembers').add(value)
      this.$store.commit(
        'info/setSnackbar',
        this.memberModel.text + 'を追加しました'
      )
      this.editGroupMembers.unshift({ ...value, id: item.id })
      this.memberModel = null
      this.search = null
    }
  }
}
</script>
