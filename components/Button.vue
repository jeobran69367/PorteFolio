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
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

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

// Track theme by observing class changes on document.documentElement
const isDark = ref<boolean>(false)
let observer: MutationObserver | null = null

onMounted(() => {
  isDark.value = !!document?.documentElement?.classList?.contains('dark')
  // observe class changes to documentElement so components update immediately
  observer = new MutationObserver(() => {
    isDark.value = !!document?.documentElement?.classList?.contains('dark')
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl'

  const sizeClasses: Record<string, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  // Return variant classes depending on current theme (dark vs light)
  const variantClasses = (() => {
    if (props.variant === 'primary') {
      // In dark theme we want the button to be white with dark text.
      // In light theme (day) the button should be black with white text.
      return isDark.value
        ? 'bg-white text-[#0E0E10] hover:brightness-95 hover:scale-105'
        : 'bg-[#0E0E10] text-white hover:bg-[#0B0B0C] hover:scale-105'
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

  return [baseClasses, sizeClasses[props.size], variantClasses].join(' ')
})
</script>
