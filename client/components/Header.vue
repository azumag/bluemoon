<template>
  <div class="bg-gray-800 p-4 text-xl tracking-wider">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

type Props = {
  title: String;
};

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  setup() {
  },
})
</script>
