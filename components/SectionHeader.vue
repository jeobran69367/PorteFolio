<template>
  <div class="text-center mb-12">
    <span
      v-if="eyebrow"
      class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest border mb-6"
      :class="themeChip"
    >
      <span class="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>
      {{ eyebrow }}
    </span>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
      <slot name="title" />
    </h2>
    <p v-if="$slots.subtitle || subtitle" class="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  eyebrow?: string
  subtitle?: string
}>()

const themeChip = ref('bg-hover text-text-secondary border-border-light')
onMounted(() => {
  const apply = () => {
    const dark = !!document?.documentElement?.classList?.contains('dark')
    themeChip.value = dark
      ? 'bg-hover text-text-secondary border-border-light'
      : 'bg-[#F0F0F0] text-[#6B6B6B] border-black/10'
  }
  apply()
  const obs = new MutationObserver(apply)
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>
