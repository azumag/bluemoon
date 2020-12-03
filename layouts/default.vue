<template lang="pug">
v-app
  v-navigation-drawer(v-model='drawer', :mini-variant='miniVariant', :clipped='clipped', fixed, app)
    v-list
      v-list-item(v-for='(item, i) in menuItems', :key='i', :to='localePath(item.to)', router, exact)
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text='item.title')
      v-list-item(v-for="locale in availableLocales" :key="locale" :to="switchLocalePath(locale)")
        v-list-item-action
          v-icon language
        v-list-item-content
          v-list-item-title(:key="locale" v-text='$t(locale)')

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
    v-snackbar(v-model="$message.display" :color='$message.color' :top='$message.top' :bottom="$message.bottom", :right="$message.right", :left='$message.left' :timeout="$message.timeout")
      | {{ $message.text }}
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
