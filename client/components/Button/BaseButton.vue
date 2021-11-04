<template>
  <button
    class="button"
    :class="buttonClass"
    type="button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  bgColor: string;
  bgOpacity: string;
  hoverBgOpacity: string;
  disabled: boolean;
  block: boolean;
}

const props = defineProps<Props>();
const buttonClass = computed(() => {
  interface ButtonClass {
    [key: string]: boolean;
  }
  const buttonClass: ButtonClass = {
    disabled: props.disabled,
  };
  buttonClass[props.bgColor] = true;
  buttonClass[props.bgOpacity] = true;
  buttonClass[props.hoverBgOpacity] = !props.disabled;
  if (props.block) {
    buttonClass['w-full'] = true;
  }
  return buttonClass;
});

defineEmits<{
  (e: 'click'): void;
}>();
</script>

<style scoped>
.button {
  @apply py-1 px-3 rounded;
}
.disabled {
  opacity: 0.7;
}
</style>
