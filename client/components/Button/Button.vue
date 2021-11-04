<template>
  <div class="inline-block" :class="{ 'w-full': block }">
    <nuxt-link v-if="haveTo" :to="to" :target="target">
      <BaseButton
        :bg-color="bgColor"
        :bgOpacity="bgOpacity"
        :hoverBgOpacity="hoverBgOpacity"
        :disabled="disabled"
        :block="block"
        @click="$emit('click')"
      >
        <slot />
      </BaseButton>
    </nuxt-link>
    <a v-else-if="haveHref" :href="href" :target="target">
      <BaseButton
        :bg-color="bgColor"
        :bgOpacity="bgOpacity"
        :hoverBgOpacity="hoverBgOpacity"
        :disabled="disabled"
        :block="block"
        @click="$emit('click')"
      >
        <slot />
      </BaseButton>
    </a>
    <BaseButton
      v-else
      :bg-color="bgColor"
      :bgOpacity="bgOpacity"
      :hoverBgOpacity="hoverBgOpacity"
      :disabled="disabled"
      :block="block"
      @click="$emit('click')"
    >
      <slot />
    </BaseButton>
  </div>
</template>

<script lang="ts" setup>
import BaseButton from './BaseButton.vue';
interface Props {
  to?: string;
  href?: string;
  target?: string;
  bgColor?: string;
  bgOpacity?: string;
  hoverBgOpacity?: string;
  disabled?: boolean;
  block?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  to: '',
  href: '',
  target: '',
  bgColor: 'bg-blue-500',
  bgOpacity: 'bg-opacity-100',
  hoverBgOpacity: 'hover:bg-opacity-80',
  disabled: false,
  block: false,
});

defineEmits<{
  (e: 'click'): void;
}>();

const haveTo = computed(() => {
  return props.to !== '';
});

const haveHref = computed(() => {
  return props.href !== '';
});
</script>
