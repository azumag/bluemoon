<template>
  <div class="py-2">
    <template v-for="item in nav">
      <AccordionButton
        v-if="item.children"
        :key="`Accordion${item.to}`"
        :item="item"
        @close="$emit('close')"
      />
      <NavLink
        v-else
        :key="`NavLink${item.to}`"
        :item="item"
        @close="$emit('close')"
      />
    </template>
  </div>
</template>

<script lang="ts" setup>
import AccordionButton from './AccordionButton.vue';
import NavLink from './NavLink.vue';

interface Nav {
  icon: string;
  title?: string;
  i18n?: string;
  to: string;
  children?: Nav[];
}

const props = defineProps<{
  nav: Nav[];
}>();
defineEmits<{ (e: 'close'): void }>();
</script>
