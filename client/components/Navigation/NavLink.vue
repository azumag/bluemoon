<template>
  <div>
    <nuxt-link v-if="item.to" :to="item.to">
      <slot />
    </nuxt-link>
    <div v-else class="cursor-pointer" @click="item.action">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Nav } from '@/lib/nav';

const props = defineProps<{
  item: Nav;
}>();
</script>
