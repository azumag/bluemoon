<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { nav } from '../lib/nav';
import { useI18n } from 'vue-i18n';

const app = getCurrentInstance();
let open = ref(false);

const openNav = () => {
  open.value = true;
};

const { locale } = useI18n({ useScope: 'global' });
const changeLocale = () => {
  if (locale.value === 'en') {
    locale.value = 'ja';
  } else {
    locale.value = 'en';
  }
};

nav.push({
  icon: 'globe',
  i18n: 'nav.other_language',
  action: changeLocale,
});
</script>

<template>
  <div class="bg-black text-white h-screen">
    <Header title="Bluemoon" @click="openNav" />
    <NavigationDrawer v-model="open" :nav="nav" />
    <slot />
  </div>
</template>

<style>
@import '@/assets/css/index.css';
</style>
