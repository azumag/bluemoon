<template>
  <div class="container px-5 mt-20">
    <div class="mx-auto max-w-lg">
      <SignupTabs />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth();
const router = useRouter();
onAuthStateChanged(auth, (user) => {
  if (user) {
    router.push('/');
  }
});
</script>
