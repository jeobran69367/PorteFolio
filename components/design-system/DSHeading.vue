<template>
  <component :is="tag" :class="headingClasses">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  level?: '1' | '2' | '3' | '4' | '5' | '6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right'
  color?: 'default' | 'primary' | 'secondary' | 'muted'
}

const props = withDefaults(defineProps<Props>(), {
  level: '1',
  weight: 'bold',
  align: 'left',
  color: 'default',
})

const tag = computed(() => `h${props.level}`)

const headingClasses = computed(() => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
  }
  
  const defaultSizes = {
    '1': 'text-4xl',
    '2': 'text-3xl',
    '3': 'text-2xl',
    '4': 'text-xl',
    '5': 'text-lg',
    '6': 'text-base',
  }
  
  const weights = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }
  
  const aligns = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }
  
  const colors = {
    default: 'text-neutral-900',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    muted: 'text-neutral-500',
  }
  
  const size = props.size ? sizes[props.size] : defaultSizes[props.level]
  
  return [size, weights[props.weight], aligns[props.align], colors[props.color]].join(' ')
})
</script>
