<template>
  <section class="py-16">
    <div class="text-center mb-8">
      <h2 class="text-3xl font-bold text-text-primary">Méthodologie de travail</h2>
      <p class="text-text-secondary max-w-2xl mx-auto mt-2">Processus éprouvé pour livrer des produits fiables, scalables et orientés valeur, en collaboration étroite avec vos équipes.</p>
    </div>

    <div class="relative max-w-5xl mx-auto">
      <!-- vertical line on large screens -->
      <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-light/60 dark:bg-white/8 -translate-x-1/2"></div>

      <div class="space-y-10">
        <article v-for="(step, i) in steps" :key="i" class="relative md:flex md:items-stretch md:justify-between">
          <!-- card container always stacked; styled to appear left or right on large screens -->
          <div :class="['w-full md:w-1/2 p-6 rounded-2xl border', i % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0', 'bg-surface border-border-light']">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary font-semibold">{{ i + 1 }}</div>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-text-primary">{{ step.title }}</h3>
                <div class="text-sm text-text-secondary mt-1">{{ step.duration }}</div>
              </div>
            </div>

            <p class="mt-4 text-sm text-text-secondary leading-relaxed">{{ step.desc }}</p>

            <ul v-if="step.bullets?.length" class="mt-4 text-sm text-text-secondary list-disc list-inside space-y-2">
              <li v-for="(b, bi) in step.bullets" :key="bi">{{ b }}</li>
            </ul>
          </div>

          <!-- center marker on md+ -->
          <div class="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <div class="w-4 h-4 rounded-full bg-surface border-4 border-background"></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  steps: Array<{
    title: string
    desc: string
    duration?: string
    bullets?: string[]
  }>
}>()
</script>

<style scoped>
/* minor tweak: ensure even spacing when cards overlap center */
.md\:flex > article { position: relative; }
</style>
