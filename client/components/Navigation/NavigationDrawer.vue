<template>
  <div class="relative">
    <div class="content" :class="{ open: modelValue }">
      <AccordionMenu @close="close" :nav="nav"></AccordionMenu>
    </div>
    <div
      class="overlay"
      :class="{
        hidden: !modelValue,
      }"
      @click="close"
    />
  </div>
</template>

<script lang="ts" setup>
import AccordionMenu from './AccordionMenu.vue';
import type { Nav } from '@/lib/nav';

defineProps<{
  modelValue: boolean;
  nav: Nav[];
}>();
const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();

const close = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped>
.content {
  @apply bg-gray-800 fixed top-0 left-0 z-50 h-full w-full max-w-xs;
  transition: 0.3s ease-in-out;
  transform: translateX(-105%);
}
.open {
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
}
.overlay {
  @apply fixed z-40 top-0 left-0 w-full h-full bg-black opacity-50;
}
</style>
