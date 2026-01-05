<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || title" class="card-header" :class="headerClasses">
      <slot name="header">
        <h3 v-if="title" class="text-lg font-semibold text-neutral-900">{{ title }}</h3>
      </slot>
    </div>
    
    <div class="card-body" :class="bodyClasses">
      <slot></slot>
    </div>
    
    <div v-if="$slots.footer" class="card-footer" :class="footerClasses">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'bordered' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  title?: string
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  padding: 'md',
  hoverable: false,
})

const cardClasses = computed(() => {
  const base = 'rounded-xl overflow-hidden transition-all duration-200'
  
  const variants = {
    default: 'bg-white',
    bordered: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-soft',
  }
  
  const hover = props.hoverable ? 'hover:shadow-medium cursor-pointer' : ''
  
  return [base, variants[props.variant], hover].join(' ')
})

const headerClasses = computed(() => {
  const paddings = {
    none: '',
    sm: 'px-3 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
  }
  
  return [paddings[props.padding], 'border-b border-neutral-100'].join(' ')
})

const bodyClasses = computed(() => {
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  }
  
  return paddings[props.padding]
})

const footerClasses = computed(() => {
  const paddings = {
    none: '',
    sm: 'px-3 py-2',
    md: 'px-6 py-4',
    lg: 'px-8 py-6',
  }
  
  return [paddings[props.padding], 'border-t border-neutral-100 bg-neutral-50'].join(' ')
})
</script>
