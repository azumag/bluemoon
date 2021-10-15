<template>
  <NavLink :item="item">
    <div
      class="link"
      :class="{
        'route-match': routeMatch($route.path),
      }"
      @click="$emit('close')"
    >
      <font-awesome-icon class="self-center" :icon="item.icon" />
      <div class="ml-8">
        {{ item.i18n ? $t(item.i18n) : item.title }}
      </div>
    </div>
  </NavLink>
</template>
<script lang="ts" setup>
import NavLink from './NavLink.vue';
import type { Nav } from '@/lib/nav';

const props = defineProps<{
  item: Nav;
}>();

defineEmits<{ (e: 'close'): void }>();

const routeMatch = (path: string) => {
  return props.item.to === path;
};
</script>

<style scoped>
.link {
  @apply py-3 px-4 text-lg font-semibold transition-all duration-300 hover:bg-gray-700 flex;
}

.route-match {
  @apply bg-gray-600;
}
</style>
