<template>
  <nav :class="navClasses">
    <DSContainer :centered="true">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <slot name="logo">
            <DSHeading level="3" color="primary" weight="bold">
              {{ brandName }}
            </DSHeading>
          </slot>
        </div>
        
        <div class="hidden md:block">
          <div class="flex items-center space-x-4">
            <slot name="links"></slot>
          </div>
        </div>
        
        <div class="hidden md:block">
          <slot name="actions"></slot>
        </div>
        
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <slot name="mobile-links"></slot>
        </div>
      </div>
    </DSContainer>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  variant?: 'default' | 'transparent' | 'bordered'
  sticky?: boolean
  brandName?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  sticky: false,
  brandName: 'Portfolio',
})

const mobileMenuOpen = ref(false)

const navClasses = computed(() => {
  const base = 'w-full'
  
  const variants = {
    default: 'bg-white shadow-sm',
    transparent: 'bg-transparent',
    bordered: 'bg-white border-b border-neutral-200',
  }
  
  const sticky = props.sticky ? 'sticky top-0 z-50' : ''
  
  return [base, variants[props.variant], sticky].join(' ')
})

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>
