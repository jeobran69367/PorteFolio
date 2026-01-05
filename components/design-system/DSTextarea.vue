<template>
  <div class="w-full">
    <label v-if="label" :for="textareaId" class="block text-sm font-medium text-neutral-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <textarea
      :id="textareaId"
      v-model="textareaValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :rows="rows"
      :class="textareaClasses"
      @blur="handleBlur"
      @focus="handleFocus"
    ></textarea>
    
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-neutral-500">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Props {
  modelValue?: string
  label?: string
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  required?: boolean
  rows?: number
}

const props = withDefaults(defineProps<Props>(), {
  rows: 4,
  disabled: false,
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'blur'): void
  (e: 'focus'): void
}>()

const textareaId = ref(`textarea-${Math.random().toString(36).substring(2, 9)}`)
const textareaValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value ?? ''),
})

const textareaClasses = computed(() => {
  const base = 'block w-full rounded-lg border px-4 py-2 text-base transition-colors duration-200 focus:outline-none focus:ring-2 resize-y'
  
  const state = props.error
    ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
    : 'border-neutral-300 text-neutral-900 focus:ring-primary-500 focus:border-primary-500 hover:border-neutral-400'
  
  const disabled = props.disabled
    ? 'bg-neutral-100 cursor-not-allowed opacity-60'
    : 'bg-white'
  
  return [base, state, disabled].join(' ')
})

const handleBlur = () => {
  emit('blur')
}

const handleFocus = () => {
  emit('focus')
}
</script>
