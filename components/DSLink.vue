<template>
  <component
    :is="to ? 'NuxtLink' : 'a'"
    :to="to"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="linkClasses"
  >
    <slot></slot>
    <svg v-if="external" class="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string
  href?: string
  variant?: 'default' | 'primary' | 'secondary' | 'muted'
  underline?: 'always' | 'hover' | 'none'
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  underline: 'hover',
  external: false,
})

const linkClasses = computed(() => {
  const base = 'inline-flex items-center transition-colors duration-200'
  
  const variants = {
    default: 'text-neutral-900 hover:text-primary-600',
    primary: 'text-primary-600 hover:text-primary-700',
    secondary: 'text-secondary-600 hover:text-secondary-700',
    muted: 'text-neutral-500 hover:text-neutral-700',
  }
  
  const underlines = {
    always: 'underline',
    hover: 'hover:underline',
    none: 'no-underline',
  }
  
  return [base, variants[props.variant], underlines[props.underline]].join(' ')
})
</script>
