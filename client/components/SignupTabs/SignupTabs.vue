<template>
  <div>
    <div class="flex">
      <div
        class="tab"
        :class="{ active: tab === 'login' }"
        @click="tab = `login`"
      >
        ログイン
      </div>
      <div
        class="tab"
        :class="{ active: tab === 'signup' }"
        @click="tab = `signup`"
      >
        新規登録
      </div>
      <div class="flex-grow border-gray-300 border-b" />
    </div>
    <div class="border-gray-100 border border-t-0 rounded-b-md">コンテンツ</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let tab = ref('login');
</script>

<style scoped>
.tab {
  @apply text-white border border-gray-300 cursor-pointer py-2 px-4 rounded-t-md;
}

.active {
  @apply border-b-0;
}
</style>
