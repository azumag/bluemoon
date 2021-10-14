<template>
  <div class="py-2">
    <template v-for="item in nav">
      <AccordionButton
        v-if="item.children"
        :key="`Accordion${item.to}`"
        :item="item"
        @close="$emit('close')"
      />
      <NavBlock
        v-else
        :key="`NavBlock${item.to}`"
        :item="item"
        @close="$emit('close')"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import AccordionButton from './AccordionButton.vue';
import NavBlock from './NavBlock.vue';
import type { Nav } from '@/lib/nav';

const props = defineProps<{
  nav: Nav[];
}>();
defineEmits<{ (e: 'close'): void }>();
</script>
