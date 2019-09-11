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
    v-btn(icon, @click.stop='miniVariant = !miniVariant')
      v-icon {{ `chevron_${miniVariant ? 'right' : 'left'}` }}
    v-btn(icon, @click.stop='clipped = !clipped')
      v-icon web
    v-btn(icon, @click.stop='fixed = !fixed')
      v-icon remove
    v-toolbar-title(v-text='title')
      v-spacer
        v-btn(icon, @click.stop='rightDrawer = !rightDrawer')
          v-icon menu
  v-content
    v-container
      nuxt
  v-navigation-drawer(v-model='rightDrawer', :right='right', temporary, fixed)
    v-list
      v-list-item(@click.native='right = !right')
        v-list-item-action
          v-icon(light)
            | compare_arrows
        v-list-item-title Switch drawer (click me)
  v-footer(:fixed='fixed', app)
    span © 2019
</template>

<script>
import clonedeep from 'lodash.clonedeep'

export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.auth.user.displayName
    },
    menuItems() {
      const items = clonedeep(this.items)
      if (this.isLoggedIn) {
        items.push({
          icon: 'person',
          title: 'Logout',
          to: '/logout'
        })
      } else {
        items.push({
          icon: 'person',
          title: 'Login',
          to: '/login'
        })
      }
      return items
    }
  },
  async mounted() {
    const user = await this.auth()
    this.$store.commit('auth/setUser', user)
  },
  methods: {
    auth() {
      return new Promise((resolve, reject) => {
        this.$auth.onAuthStateChanged((user) => {
          resolve(user || false)
        })
      })
    }
  }
}
</script>
