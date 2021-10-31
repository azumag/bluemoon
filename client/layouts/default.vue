<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { nav } from '../lib/nav';
import { useI18n } from 'vue-i18n';
import { setLocale } from '@vee-validate/i18n';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const app = getCurrentInstance();
let open = ref(false);

const openNav = () => {
  open.value = true;
};

const { locale } = useI18n({ useScope: 'global' });
const changeLocale = () => {
  if (locale.value === 'en') {
    setLocale('ja');
    locale.value = 'ja';
  } else {
    locale.value = 'en';
    setLocale('en');
  }
};

nav.push({
  icon: 'globe',
  i18n: 'nav.other_language',
  action: changeLocale,
});

let loggedIn = ref(false);
onAuthStateChanged(auth, (user) => {
  if (user) {
    loggedIn.value = true;
  } else {
    loggedIn.value = false;
  }
});

const filteredNav = computed(() => {
  return nav.filter((v) => {
    if (!loggedIn.value && v.onlyLoggedIn) {
      return false;
    }
    if (loggedIn.value && v.onlyNotLoggedIn) {
      return false;
    }
    return true;
  });
});
</script>

<template>
  <div class="bg-black text-white h-screen">
    <Header title="Bluemoon" @click="openNav" />
    <NavigationDrawer v-model="open" :nav="filteredNav" />
    <slot />
  </div>
</template>

<style>
@import '@/assets/css/index.css';
</style>
