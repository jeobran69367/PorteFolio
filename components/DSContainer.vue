<template>
  <div :class="containerClasses">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  centered?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  padding: 'md',
  centered: false,
})

const containerClasses = computed(() => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-[1400px]',
    full: 'max-w-full',
  }
  
  const paddings = {
    none: '',
    sm: 'px-4',
    md: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
  }
  
  const centered = props.centered ? 'mx-auto' : ''
  
  return [sizes[props.size], paddings[props.padding], centered, 'w-full'].join(' ')
})
</script>
