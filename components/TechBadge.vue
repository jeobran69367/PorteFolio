<template>
  <div class="bg-surface border border-border-light rounded-xl p-4 flex items-center justify-center hover:border-border-strong transition-all">
    <img
      v-if="!hasError"
      :src="currentSrc"
      :alt="name"
      class="w-8 h-8 object-contain"
      @error="onError"
      loading="lazy"
      decoding="async"
    />

    <Badge v-if="hasError" type="tech" class="text-sm">{{ name }}</Badge>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Badge from './Badge.vue'

const props = defineProps<{ name: string }>()

// create a simple slug from the tech name to match filenames in /public/img
const slug = computed(() => {
  return String(props.name)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
})

const candidates = computed(() => [
  `/img/${slug.value}.png`,
  `/img/${slug.value}.svg`,
  `/img/${slug.value}.webp`,
])

const idx = ref(0)
const hasError = ref(false)

const currentSrc = computed(() => candidates.value[idx.value] ?? '')

function onError() {
  idx.value += 1
  if (idx.value >= candidates.value.length) {
    hasError.value = true
  }
}
</script>

<style scoped>
/* keep images centered; Badge handles its own styling */
.bg-surface img {
  display: block;
}
</style>
