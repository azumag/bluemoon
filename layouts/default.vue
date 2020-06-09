<template lang="pug">
v-app
  v-navigation-drawer(v-model='drawer', :mini-variant='miniVariant', :clipped='clipped', fixed, app)
    v-list
      v-list-item(v-for='(item, i) in menuItems', :key='i', :to='item.to', router, exact)
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text='item.title')
  v-app-bar(:clipped-left='clipped', app)
    v-app-bar-nav-icon(@click='drawer=!drawer')
    // v-btn(icon, @click.stop='miniVariant = !miniVariant')
    //   v-icon {{ `chevron_${miniVariant ? 'right' : 'left'}` }}
    // v-btn(icon, @click.stop='clipped = !clipped')
    //   v-icon web
    // v-btn(icon, @click.stop='fixed = !fixed')
    //   v-icon remove
    v-toolbar-title(v-text='title')
      v-spacer
        v-btn(icon, @click.stop='rightDrawer = !rightDrawer')
          v-icon menu
  v-content.bg
    v-container
      nuxt
    v-snackbar(v-model="snackbar" color='info' :bottom="true", :right="true", :timeout="3000")
      | {{ snackbarText }}
  //- v-navigation-drawer(v-model='rightDrawer', :right='right', temporary, fixed)
  //-   v-list
  //-     v-list-item(@click.native='right = !right')
  //-       v-list-item-action
  //-         v-icon(light)
  //-           | compare_arrows
  //-       v-list-item-title Switch drawer (click me)
  v-footer(:fixed='fixed', app)
    span Bluemoon Ver. {{ version }} - 2020.
</template>

<script>
import clonedeep from 'lodash.clonedeep'

export default {
  data() {
    return {
      meta: {
        description:
          '今最もクールな ウェブとして 注目されているのが Bluemoon だ',
      },
      version: '0.0.4',
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Bluemoon',
      snackbar: false,
      user: null,
    }
  },
  computed: {
    snackbarText() {
      return this.$store.state.info.snackbarText
    },
    menuItems() {
      const items = clonedeep(this.items)
      if (this.$firebase.currentUser) {
        items.push({
          icon: 'bubble_chart',
          title: '開催行事',
          to: '/events',
        })
        items.push({
          icon: 'bubble_chart',
          title: 'エントリーリスト',
          to: '/entries',
        })
        items.push({
          icon: 'bubble_chart',
          title: 'レパートリー登録',
          to: '/repertories',
        })
        items.push({
          icon: 'bubble_chart',
          title: 'グループ',
          to: '/groups',
        })
        items.push({
          icon: 'person',
          title: 'Logout',
          to: '/logout',
        })
      } else {
        items.push({
          icon: 'person',
          title: 'Login',
          to: '/login',
        })
      }
      return items
    },
  },
  watch: {
    snackbarText(v) {
      if (v !== '') {
        this.snackbar = true
      }
    },
  },
}
</script>

<style scoped>
.bg {
  background-color: #000 !important;
}
.transparent {
  background-color: white !important;
  opacity: 0.85;
  border-color: transparent !important;
}
</style>
