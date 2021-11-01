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
      <Form v-slot="{ validate, errors }">
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
        <div class="mt-3 flex justify-center">
          <Button
            @click="
              () => {
                validate().then(({ valid }) => {
                  if (valid) signin();
                });
              }
            "
          >
            ログイン
          </Button>
        </div>
      </Form>
    </div>
    <div
      v-if="tab === 'signup'"
      class="border-gray-100 border border-t-0 rounded-b-md p-10"
    >
      <Form v-slot="{ validate, errors }">
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
        <div class="flex justify-center">
          <Button
            @click="
              () => {
                validate().then(({ valid }) => {
                  if (valid) signup();
                });
              }
            "
          >
            新規登録
          </Button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate';
import Input from '@/components/Forms/Input.vue';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { useToast } from 'vue-toastification';

let tab = ref('signin');
let signinValue = reactive({
  email: '',
  password: '',
});
let signupValue = reactive({
  email: '',
  password: '',
});
const router = useRouter();
const toast = useToast();

const signin = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, signinValue.email, signinValue.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      router.push('/');
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

const signup = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, signupValue.email, signupValue.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      router.push('/');
    })
    .catch((error) => {
      toast.error(error.message);
    });
};
</script>

<style scoped>
.tab {
  @apply text-white border border-gray-300 cursor-pointer py-2 px-4 rounded-t-md;
}

.active {
  @apply border-b-0;
}
</style>
