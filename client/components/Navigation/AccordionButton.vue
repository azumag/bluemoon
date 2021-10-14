<template>
  <div class="accordion">
    <div class="parent" :class="{ open: open }" @click="open = !open">
      {{ item.i18n ? $t(item.i18n) : item.title }}
      <font-awesome-icon icon="chevron-down" />
    </div>
    <ul class="submenu">
      <li
        v-for="(value, key) in item.children"
        :key="key"
        :class="{ 'h-0': !open, 'h-12': open }"
      >
        <nuxt-link :to="value.to">
          <div class="link" @click="$emit('close')">
            {{ value.i18n ? $t(value.i18n) : value.title }}
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
interface Nav {
  icon: string;
  title?: string;
  i18n?: string;
  to: string;
  children?: Nav[];
}
const props = defineProps<{
  item: Nav;
}>();

const open = ref(false);
</script>

<style scoped>
ul {
  list-style-type: none;
}
.accordion .parent {
  @apply cursor-pointer block p-2 hover:bg-gray-700 text-lg font-semibold relative;
}
.accordion .parent >>> svg {
  @apply transition-all duration-300 absolute top-3 right-6 text-lg;
}
.accordion .open >>> svg.fa-chevron-down {
  transform: rotate(180deg);
}
.submenu li {
  @apply transition-all duration-300;
  overflow: hidden;
}
.submenu a {
  @apply block transition-all duration-300 hover:bg-gray-700 p-3 pl-10;
}
</style>
