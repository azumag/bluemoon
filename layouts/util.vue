<template lang="pug">
v-app
  v-content.bg
    v-container
      nuxt
  v-footer(:fixed='fixed', app)
    span Bluemoon Ver. {{ version }} - 2020.
</template>

<script>
import clonedeep from 'lodash.clonedeep'

export default {
  data() {
    return {
      meta: {
        description: 'ブルーグラスオンラインフェス',
      },
      version: '1.0.4',
      clipped: false,
      drawer: true,
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
      user: null,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i !== this.$i18n.locale)
    },
    snackbarText() {
      return this.$store.state.info.snackbarText
    },
    menuItems() {
      const items = clonedeep(this.items)
      if (this.$firebase.currentUser) {
        items.push({
          icon: 'bubble_chart',
          title: this.$i18n.t('events'),
          to: '/events',
        })
        items.push({
          icon: 'bubble_chart',
          title: this.$i18n.t('entries'),
          to: '/entries',
        })
        // items.push({
        //   icon: 'bubble_chart',
        //   title: 'レパートリー登録',
        //   to: '/repertories',
        // })
        // items.push({
        //   icon: 'bubble_chart',
        //   title: 'グループ',
        //   to: '/groups',
        // })
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
