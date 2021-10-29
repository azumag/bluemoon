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
        @input="$emit('input', $event.target.value)"
        @click="$emit('click')"
      />
      <label class="absolute left-2 transition-all bg-white px-1">
        {{ label }}
      </label>
      <p v-if="haveError" class="text-red-500 text-xs italic">
        {{ errorMessages[0] }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  modelValue: string | number;
  placeholder: string;
  label: string;
  type: string;
  disabled: boolean;
  readonly: boolean;
  isInvalid: boolean;
  errorMessages: string[];
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  label: '',
  type: 'text',
  disabled: false,
  readonly: false,
  isInvalid: false,
  errorMessages: () => [],
});

defineEmits<{
  (e: 'input', value: string | number): void;
  (e: 'click'): void;
}>();

const haveError = computed(() => {
  return props.isInvalid && !props.disabled;
});
</script>

<style scoped>
label {
  top: 0%;
  transform: translateY(-50%);
  font-size: 0.7rem;
  color: rgba(37, 99, 235, 1);
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
  border-width: 1px;
}
input:focus {
  outline: none;
  border-color: rgba(37, 99, 235, 1);
}
</style>
