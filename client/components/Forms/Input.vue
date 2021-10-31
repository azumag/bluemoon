<template>
  <div class="flex justify-center items-center">
    <div
      class="relative h-10 w-full"
      :class="{
        empty: (modelValue === '' || modelValue === null) && !placeholder,
      }"
    >
      <input
        class="
          h-full
          w-full
          border-gray-300
          px-2
          transition-all
          border-blue
          rounded
        "
        :class="{
          'border-red-500': haveError,
        }"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="onInput"
        @click="$emit('click')"
      />
      <label class="absolute left-2 transition-all bg-white px-1">
        {{ label }}
      </label>
      <p class="text-red-500 text-xs italic">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate';

interface Props {
  modelValue: string | number;
  placeholder?: string;
  label?: string;
  type?: string;
  name: string;
  disabled?: boolean;
  readonly?: boolean;
  isInvalid?: boolean;
  rules?: string | Object;
  errorMessages?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  label: '',
  type: 'text',
  name: '',
  disabled: false,
  readonly: false,
  isInvalid: false,
  errorMessages: () => [],
  rules: () => {
    return {};
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'click'): void;
}>();
const { value, errorMessage } = useField<string | number>(
  props.name,
  props.rules,
  { initialValue: props.modelValue }
);

const haveError = computed(() => {
  return props.isInvalid && !props.disabled;
});

const onInput = (event) => {
  value.value = event.target.value;
  emit('update:modelValue', event.target.value);
};
</script>

<style scoped>
label {
  top: 0%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: rgba(37, 99, 235, 1);
  @apply text-blue-500 bg-black;
}
.empty input:not(:focus) + label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
}
input:not(:focus) + label {
  color: rgba(150, 150, 150, 1);
}
input {
  @apply border bg-black text-white;
}

input:-webkit-autofill {
  transition: all 100000s ease-in-out 0s !important;
}

input:focus {
  outline: none;
  border-color: rgba(37, 99, 235, 1);
}
</style>
