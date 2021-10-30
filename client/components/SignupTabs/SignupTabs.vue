<template>
  <div>
    <div class="flex">
      <div
        class="tab"
        :class="{ active: tab === 'signin' }"
        @click="tab = `signin`"
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
    <div
      v-if="tab === 'signin'"
      class="border-gray-100 border border-t-0 rounded-b-md p-10"
    >
      <Form>
        <Input
          name="email"
          label="email"
          v-model="signinValue.email"
          rules="required|email"
        />
        <Input
          class="mt-7"
          name="password"
          label="password"
          v-model="signinValue.password"
          rules="required|min:6"
          type="password"
          autocomplete="on"
        />
      </Form>
    </div>
    <div
      v-if="tab === 'signup'"
      class="border-gray-100 border border-t-0 rounded-b-md p-10"
    >
      <Form>
        <Input
          name="email"
          label="email"
          v-model="signupValue.email"
          rules="required|email"
        />
        <Input
          class="mt-7"
          name="password"
          label="password"
          v-model="signupValue.password"
          rules="required|min:6"
          type="password"
          autocomplete="on"
        />
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Form } from 'vee-validate';
import Input from '@/components/Forms/Input.vue';

let tab = ref('signin');
let signinValue = ref({
  email: '',
  password: '',
});
let signupValue = ref({
  email: '',
  password: '',
});
</script>

<style scoped>
.tab {
  @apply text-white border border-gray-300 cursor-pointer py-2 px-4 rounded-t-md;
}

.active {
  @apply border-b-0;
}
</style>
