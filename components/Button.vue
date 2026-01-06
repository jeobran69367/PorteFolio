<template>
  <button
    :class="buttonClasses"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot />
    <span v-if="icon" class="ml-2">
      <svg
        v-if="icon === 'arrow'"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block"
      >
        <path
          d="M7.5 15L12.5 10L7.5 5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else-if="icon === 'download'"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="inline-block"
      >
        <path
          d="M10 13V3M10 13L6 9M10 13L14 9M3 17H17"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'arrow' | 'download' | null
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  icon: null,
  type: 'button',
})

defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const variantClasses = {
    primary: 'bg-primary-cta text-primary-cta-text hover:bg-primary-cta-hover hover:scale-105',
    secondary: 'bg-surface text-text-primary hover:bg-hover border border-border-light',
    outline: 'bg-transparent text-text-primary border-2 border-border-light hover:border-border-strong hover:bg-hover',
    ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-hover',
  }
  
  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
  ].join(' ')
})
</script>
