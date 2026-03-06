<template>
  <span :class="badgeClasses">
    <template v-if="type === 'availability'">
      <span :class="dotClasses"></span>
      <span v-if="isUnavailable">indisponible pour le moment</span>
      <span v-else><slot /></span>
    </template>
    <template v-else>
      <slot />
    </template>
  </span>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

interface Props {
  type?: 'availability' | 'tech' | 'date'
  variant?: 'primary' | 'secondary' | 'muted'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'tech',
  variant: 'primary',
})

const nowHour = ref<number>(new Date().getHours())

let timer: ReturnType<typeof setInterval> | null = null
onMounted(() => {
  // keep the hour updated (minute resolution is enough)
  timer = setInterval(() => { nowHour.value = new Date().getHours() }, 60_000)
})
onUnmounted(() => { if (timer) clearInterval(timer) })

const isUnavailable = computed(() => {
  // Unavailable from 23:00 (inclusive) to 07:00 (exclusive)
  const h = nowHour.value
  return h >= 23 || h < 7
})

const dotClasses = computed(() => {
  const base = 'w-2 h-2 rounded-full mr-2'
  return [base, isUnavailable.value ? 'bg-red-600' : 'bg-success'].join(' ')
})

const badgeClasses = computed(() => {
  const baseClasses = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-colors duration-200'
  
  if (props.type === 'availability') {
      if (isUnavailable.value) {
        return [
          baseClasses,
          'bg-red-600 bg-opacity-10 text-red-600 border border-red-600 border-opacity-30',
        ].join(' ')
      }
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
//test
</script>
