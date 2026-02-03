<template>
  <div class="space-y-6">
    <h4 class="text-text-secondary font-medium uppercase tracking-wider text-xs">{{ title }}</h4>
    <ul class="space-y-4">
      <li
        v-for="(item, i) in items"
        :key="i"
        :class="['flex items-center gap-3 text-sm', item.italic ? 'italic' : '', 'text-text-secondary']"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          class="text-green-500 w-5 h-5 flex-none"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.3" fill="none" opacity="0.12" />
          <path d="M7 12.5l2.5 2.5L17 8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title: string
  items: Array<{ text: string; icon?: string; color?: string; italic?: boolean }>
}>()

const IconComponent = ref<any>(null)
onMounted(async () => {
  try {
    // @ts-ignore: optional dependency
    const mod = await import('@iconify/vue')
    IconComponent.value = mod.Icon || mod.default || null
  } catch (e) {
    IconComponent.value = null
  }
})
</script>
