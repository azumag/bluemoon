<template>
  <nuxt-link :to="item.to">
    <div
      class="link"
      :class="{
        'route-match': routeMatch($route.path),
      }"
      @click="$emit('close')"
    >
      {{ item.i18n ? $t(item.i18n) : item.title }}
    </div>
  </nuxt-link>
</template>

<script lang="ts" setup>
interface Nav {
  icon: string;
  title?: string;
  i18n?: string;
  to: string;
}

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
  @apply p-2 text-lg font-semibold transition-all duration-300 hover:bg-gray-700;
}

.route-match {
  @apply bg-gray-600;
}
</style>
