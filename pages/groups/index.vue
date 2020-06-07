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

    v-dialog(v-model="openCommonTunes" persistent max-width="600px")
      v-card
        v-card-title
        v-card-text
          v-list-item(v-for="(item, i) in commonTunes" :key="i")
            v-list-item-icon
              v-icon
                | mdi-music
            v-list-item-content
              v-list-item-title(v-html="item.title")
        v-card-actions
          v-spacer
          v-btn(color="blue darken-1" text @click="commonTunes = []")
            | とじる

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
      editGroupMembers: [],
      commonTunes: [],
    }
  },
  computed: {
    memberSearch() {
      return this.users.map((x) => {
        return {
          text: x.name,
          value: x.uid,
        }
      })
    },
    openCommonTunes() {
      return this.commonTunes.length > 0
    },
  },
  mounted() {
    this.$firestore
      .collection('groups')
      .where('authorRef', '==', this.$firebase.currentUser.uid)
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
    getTuneData(commonTunes) {
      // TODO: fix later
      const _commonTunes = commonTunes
      // const _commonTunes = commonTunes[0]
      if (_commonTunes === undefined) {
        return []
      }
      if (_commonTunes.length <= 0) {
        return []
      }
      // console.log('ctunes', _commonTunes)
      return Promise.all(
        _commonTunes.map((ct) => {
          return this.$firestore.collection('tunes').doc(ct).get()
        })
      )
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
    async matching(group) {
      const members = await this.getMembers(group)
      // console.log(members)
      if (members.length <= 0) {
        this.$store.commit(
          'info/setSnackbar',
          'メンバーがいません: ' + new Date()
        )
        return
      }
      const memberRepertories = {}
      // TODO: sohisticate

      const mrefs = await Promise.all(
        members.map(async (member) => {
          const ref = await this.$firestore
            .collection('repertories')
            .where('userRef', '==', member.memberRef)
            .get()
          const aref = ref.docs.map((doc) => {
            return doc.data().tuneRef
          })
          return {
            memberRef: member.memberRef,
            aref,
          }
        })
      )

      mrefs.forEach((mr) => {
        if (memberRepertories[mr.memberRef] === undefined) {
          memberRepertories[mr.memberRef] = []
        }
        memberRepertories[mr.memberRef].push(mr.aref)
      })

      // console.log(memberRepertories)

      // TODO: 3-nest loop (hideously)
      const commonTunes = []
      for (const keyi in memberRepertories) {
        const tuneRefs = memberRepertories[keyi][0]
        // console.log('tunerefs', tuneRefs)
        // console.log('keiy', keyi)
        tuneRefs.forEach((tuneRef) => {
          // console.log('tuneref', tuneRef)
          let isCommonTune = true
          for (const keyj in memberRepertories) {
            // console.log('keij', keyj)
            if (keyi === keyj) {
              continue
            }
            const targetRef = memberRepertories[keyj][0]
            // console.log('targetref', targetRef)
            if (targetRef.includes(tuneRef)) {
              // console.log('true')
              continue
            } else {
              // console.log('false', tuneRef)
              isCommonTune = false
              break
            }
          }
          if (isCommonTune) {
            commonTunes.push(tuneRef)
          }
        })
      }
      // TODO: fixme
      const _commonTunes = await this.getTuneData(
        commonTunes.filter((elem, index, self) => self.indexOf(elem) === index)
      )
      // uniq
      this.commonTunes = _commonTunes.map((ct) => {
        // console.log(ct)
        return ct.data()
      })

      // console.log(this.commonTunes)

      if (this.commonTunes.length <= 0) {
        this.$store.commit(
          'info/setSnackbar',
          '共通曲がありません: ' + new Date()
        )
      }

      // console.log(this.commonTunes)
    },
    openAddGroupDialog() {
      this.addGroupDialog = true
    },
    async openEditGroupDialog(item) {
      // TODO: FIX
      this.editGroupMembers = await this.getMembers(item)
      this.editGroupDialog = true
      this.editGroup = item
    },
    async delGroup() {
      const item = this.editGroup
      // TODO: delete with ref
      if (confirm('グループを削除します。よろしいですか？')) {
        await this.$firestore.collection('groups').doc(item.id).delete()
        const index = this.items.indexOf(item)
        this.items.splice(index, 1)
      }
      this.editGroup = null
    },
    async delGroupMembers(item) {
      await this.$firestore.collection('groupMembers').doc(item.id).delete()
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
        authorRef: this.$firebase.currentUser.uid,
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
        authorRef: this.$firebase.currentUser.uid,
      }
      const item = await this.$firestore.collection('groupMembers').add(value)
      this.$store.commit(
        'info/setSnackbar',
        this.memberModel.text + 'を追加しました'
      )
      this.editGroupMembers.unshift({ ...value, id: item.id })
      this.memberModel = null
      this.search = null
    },
  },
}
</script>
