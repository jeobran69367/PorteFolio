<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="href ? target : undefined"
    :rel="href && target === '_blank' ? 'noopener noreferrer' : undefined"
    :download="download"
    :type="href ? undefined : type"
    :class="buttonClasses"
    @click="$emit('click', $event)"
  >
    <slot />
    <span v-if="icon" class="inline-flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
      <!-- arrow -->
      <svg v-if="icon === 'arrow'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- download -->
      <svg v-else-if="icon === 'download'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block">
        <path d="M10 13V3M10 13L6 9M10 13L14 9M3 17H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <!-- external -->
      <svg v-else-if="icon === 'external'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline-block">
        <path d="M8 5H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3M13 3h4M17 3l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  icon?: 'arrow' | 'download' | 'external' | null
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
  download?: string
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  icon: null,
  type: 'button',
  href: undefined,
  target: undefined,
  download: undefined,
  fullWidth: false,
})

defineEmits<{
  click: [event: MouseEvent]
}>()

// Track theme by observing class changes on document.documentElement
const isDark = ref<boolean>(false)
let observer: MutationObserver | null = null

onMounted(() => {
  isDark.value = !!document?.documentElement?.classList?.contains('dark')
  observer = new MutationObserver(() => {
    isDark.value = !!document?.documentElement?.classList?.contains('dark')
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

const buttonClasses = computed(() => {
  const baseClasses =
    'group inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-xl cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'

  const sizeClasses: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantClasses = (() => {
    if (props.variant === 'primary') {
      return isDark.value
        ? 'bg-white text-[#0E0E10] hover:brightness-95 hover:scale-[1.03] shadow-lg shadow-white/5'
        : 'bg-[#0E0E10] text-white hover:bg-[#0B0B0C] hover:scale-[1.03] shadow-lg shadow-black/10'
    }
    if (props.variant === 'accent') {
      return 'bg-accent-blue text-white hover:bg-blue-600 hover:scale-[1.03] shadow-lg shadow-blue-500/20'
    }
    if (props.variant === 'secondary') {
      return isDark.value
        ? 'bg-surface text-text-primary hover:bg-hover border border-border-light'
        : 'bg-white text-[#0E0E10] border border-[#E5E5E5] hover:bg-[#F3F4F6]'
    }
    if (props.variant === 'outline') {
      return isDark.value
        ? 'bg-transparent text-text-primary border-2 border-border-light hover:border-border-strong hover:bg-hover'
        : 'bg-transparent text-[#0E0E10] border-2 border-[#E5E5E5] hover:bg-[#F9FAFB]'
    }
    // ghost
    return isDark.value
      ? 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-hover'
      : 'bg-transparent text-[#6B7280] hover:text-[#0E0E10] hover:bg-transparent'
  })()

  return [baseClasses, sizeClasses[props.size], variantClasses, props.fullWidth ? 'w-full' : ''].join(' ')
})
</script>
