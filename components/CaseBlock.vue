<template>
  <section :class="['relative', padded ? 'border-l-2 pl-5 border-border-light' : '']">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 rounded-xl bg-accent-blue bg-opacity-10 border border-accent-blue border-opacity-20 flex items-center justify-center flex-none">
        <component :is="IconComponent" v-if="IconComponent" :icon="icon" class="w-5 h-5 text-accent-blue" />
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-accent-blue"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </div>
      <h2 :class="['font-bold text-text-primary', size === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg']">{{ title }}</h2>
    </div>
    <div class="pl-0">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps<{
  title: string
  icon?: string
  size?: 'lg' | 'md'
  padded?: boolean
}>()

const IconComponent = ref<any>(null)
onMounted(async () => {
  try {
    const mod = await import('@iconify/vue')
    IconComponent.value = mod.Icon || mod.default || null
  } catch (e) {
    IconComponent.value = null
  }
})
</script>
