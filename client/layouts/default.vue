<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
import { nav } from '../lib/nav';

const app = getCurrentInstance();
let open = ref(false);

const openNav = () => {
  open.value = true;
};
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
