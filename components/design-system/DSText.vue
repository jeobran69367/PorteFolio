<template>
  <component :is="tag" :class="textClasses">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  tag?: 'p' | 'span' | 'div' | 'label'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right' | 'justify'
  color?: 'default' | 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'danger'
  italic?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'p',
  size: 'base',
  weight: 'normal',
  align: 'left',
  color: 'default',
  italic: false,
})

const textClasses = computed(() => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
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
    justify: 'text-justify',
  }
  
  const colors = {
    default: 'text-neutral-900',
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    muted: 'text-neutral-500',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
  }
  
  const italic = props.italic ? 'italic' : ''
  
  return [sizes[props.size], weights[props.weight], aligns[props.align], colors[props.color], italic].join(' ')
})
</script>
