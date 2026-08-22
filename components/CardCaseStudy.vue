<template>
  <NuxtLink
    :to="`/projets/view/${project.id}`"
    class="block group no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-2xl"
  >
    <article
      class="card-hover h-full flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border-light bg-surface p-6 sm:p-8"
    >
      <!-- Meta row -->
      <div class="flex items-center justify-between gap-3 mb-6">
        <Badge type="tech" variant="secondary">{{ project.category }}</Badge>
        <span class="text-xs text-text-secondary flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="text-text-secondary/60">
            <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" />
            <path d="M12 7v5l3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ project.timeline }}
        </span>
      </div>

      <!-- Role chip -->
      <div class="mb-4 flex items-center gap-2">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue border-opacity-20">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2" />
            <path d="M4 20a8 8 0 0116 0" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          {{ project.role }}
        </span>
      </div>

      <h3 class="text-xl font-bold text-text-primary mb-3 font-satoshi group-hover:text-accent-blue transition-colors">
        {{ project.title }}
      </h3>

      <p class="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
        {{ project.long_description || project.description }}
      </p>

      <!-- Results preview -->
      <div v-if="project.results?.length" class="mt-auto pt-4 border-t border-border-light">
        <p class="text-xs font-semibold uppercase tracking-widest text-text-secondary/70 mb-2">Résultats clés</p>
        <ul class="space-y-1.5">
          <li v-for="(r, i) in project.results.slice(0, 2)" :key="i" class="flex items-start gap-2 text-sm text-text-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-accent-blue mt-0.5 flex-none">
              <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>{{ r }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-5 flex items-center gap-2 text-sm font-semibold text-text-primary">
        <span class="group-hover:text-accent-blue transition-colors">Voir l'étude de cas</span>
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="group-hover:translate-x-1 transition-transform">
          <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </article>
  </NuxtLink>
</template>

<script setup lang="ts">
import Badge from './Badge.vue'
import type { CaseStudy } from '~/data/projects'

defineProps<{ project: CaseStudy }>()
</script>
