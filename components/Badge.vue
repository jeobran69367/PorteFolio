<template>
  <span :class="badgeClasses">
    <span v-if="type === 'availability'" class="w-2 h-2 rounded-full bg-success mr-2"></span>
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: 'availability' | 'tech' | 'date'
  variant?: 'primary' | 'secondary' | 'muted'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'tech',
  variant: 'primary',
})

const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200'
  
  if (props.type === 'availability') {
      return [
        baseClasses,
        'bg-success bg-opacity-10 text-success border border-success border-opacity-30',
      ].join(' ')
  }
  
  if (props.type === 'date') {
      const variantClasses = {
        // Force date badges to always show black text on white background so labels remain readable
        primary: 'bg-white text-[#0E0E10] border border-border-light text-[11px] px-2 py-1',
        secondary: 'bg-white text-[#0E0E10] border border-border-light text-[11px] px-2 py-1',
        muted: 'bg-white text-[#0E0E10] border border-border-light text-[11px] px-2 py-1',
      }
    return [baseClasses, variantClasses[props.variant]].join(' ')
  }
  
  // Tech badges
  const variantClasses = {
    primary: 'bg-hover text-text-primary border border-border-light',
    secondary: 'bg-surface text-text-secondary',
    muted: 'bg-surface bg-opacity-50 text-text-muted',
  }
  
  return [baseClasses, variantClasses[props.variant]].join(' ')
})
</script>
