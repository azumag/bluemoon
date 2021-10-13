<template>
  <div class="bg-black text-white h-screen">
    <Header title="bluemoon" />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
})
</script>
