<template>
  <div class="flex bg-gray-800 px-4 py-3 text-xl tracking-wider">
    <button
      class="
        hover:bg-gray-500
        rounded-full
        w-10
        h-10
        flex
        items-center
        justify-center
      "
      @click="$emit('click')"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div class="ml-8 leading-loose align-middle">
      {{ title }}
    </div>
  </div>
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
  emits: ["click"],
  setup() {
  },
})
</script>
