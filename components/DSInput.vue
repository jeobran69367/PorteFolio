<template>
  <div class="w-full">
    <label v-if="label" :for="inputId" class="block text-sm font-medium text-neutral-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    
    <div class="relative">
      <div v-if="$slots.prefix" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <slot name="prefix"></slot>
      </div>
      
      <input
        :id="inputId"
        v-model="inputValue"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      
      <div v-if="$slots.suffix" class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <slot name="suffix"></slot>
      </div>
    </div>
    
    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    <p v-else-if="hint" class="mt-1 text-sm text-neutral-500">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Props {
  modelValue?: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
  label?: string
  placeholder?: string
  hint?: string
  error?: string
  disabled?: boolean
  required?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  disabled: false,
  required: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'blur'): void
  (e: 'focus'): void
}>()

const inputId = ref(`input-${Math.random().toString(36).substring(2, 9)}`)
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value ?? ''),
})

const inputClasses = computed(() => {
  const base = 'block w-full rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2'
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  }
  
  const hasPrefix = !!props.error || !!props.hint
  const prefix = hasPrefix ? 'pl-10' : ''
  const suffix = hasPrefix ? 'pr-10' : ''
  
  const state = props.error
    ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500'
    : 'border-neutral-300 text-neutral-900 focus:ring-primary-500 focus:border-primary-500 hover:border-neutral-400'
  
  const disabled = props.disabled
    ? 'bg-neutral-100 cursor-not-allowed opacity-60'
    : 'bg-white'
  
  return [base, sizes[props.size], prefix, suffix, state, disabled].join(' ')
})

const handleBlur = () => {
  emit('blur')
}

const handleFocus = () => {
  emit('focus')
}
</script>
