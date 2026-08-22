<template>
  <div class="min-h-screen bg-background font-sans">
    <Header @open-contact="showContact = true" />

    <main class="pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-24">
      <!-- Hero -->
      <section class="text-center space-y-6 max-w-3xl mx-auto">
        <SectionHeader
          eyebrow="Mes services"
          subtitle="De la conduite de projet au développement et à l'IA, chaque offre est détaillée : besoin traité, livrables, méthode, outils et bénéfices concrets."
        >
          <template #title>Ce que je peux <span class="text-gradient">vous apporter</span></template>
        </SectionHeader>
      </section>

      <!-- Services detailed -->
      <div v-if="pending" class="text-center opacity-50">Chargement des services…</div>
      <section v-else class="space-y-8">
        <article
          v-for="(service, i) in services"
          :key="service.id"
          class="rounded-3xl border border-border-light bg-surface overflow-hidden"
        >
          <!-- Header band -->
          <div class="p-6 sm:p-10 border-b border-border-light relative">
            <div class="absolute inset-0 glow-blue opacity-20 pointer-events-none"></div>
            <div class="relative flex flex-col md:flex-row md:items-center gap-4 justify-between">
              <div>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue border-opacity-20 mb-4">
                  {{ service.category }}
                </span>
                <h2 class="text-2xl sm:text-3xl font-bold text-text-primary mb-3">{{ service.title }}</h2>
                <p class="text-text-secondary text-base leading-relaxed max-w-3xl">{{ service.description }}</p>
              </div>
              <div class="text-5xl font-bold text-text-muted/20 md:text-7xl flex-none">{{ String(i + 1).padStart(2, '0') }}</div>
            </div>
          </div>

          <!-- Body -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">
            <!-- Left col -->
            <div class="space-y-8">
              <div>
                <h3 class="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-3">Le besoin auquel ce service répond</h3>
                <ul class="space-y-2.5">
                  <li v-for="need in service.need" :key="need" class="flex items-start gap-3 text-sm text-text-secondary">
                    <span class="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-none"></span>
                    <span>{{ need }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-3">Livrables possibles</h3>
                <ul class="space-y-2.5">
                  <li v-for="d in service.deliverables" :key="d" class="flex items-start gap-3 text-sm text-text-secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-success mt-0.5 flex-none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>{{ d }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Right col -->
            <div class="space-y-8">
              <div>
                <h3 class="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-3">Ma façon de travailler</h3>
                <ol class="space-y-2.5">
                  <li v-for="(m, idx) in service.method" :key="m" class="flex items-start gap-3 text-sm text-text-secondary">
                    <span class="inline-flex w-6 h-6 rounded-lg bg-hover border border-border-light text-xs font-bold items-center justify-center flex-none">{{ idx + 1 }}</span>
                    <span>{{ m }}</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 class="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-3">Outils & approches</h3>
                <div class="flex flex-wrap gap-2">
                  <Badge v-for="t in service.tools" :key="t" type="tech" variant="primary">{{ t }}</Badge>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer band : bénéfices + situations -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10 border-t border-border-light bg-hover/40">
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-3">Bénéfices pour vous</h3>
              <ul class="space-y-2.5">
                <li v-for="b in service.benefits" :key="b" class="flex items-start gap-3 text-sm text-text-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-success mt-0.5 flex-none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold uppercase tracking-widest text-accent-blue mb-3">Quand ce service est pertinent</h3>
              <ul class="space-y-2.5">
                <li v-for="w in service.when" :key="w" class="flex items-start gap-3 text-sm text-text-secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="text-accent-blue mt-0.5 flex-none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span>{{ w }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>

      <!-- Methodology -->
      <Methodology :steps="processSteps" />

      <!-- Resources -->
      <ResourcesSection @open-contact="showContact = true" />
    </main>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import type { ServiceDetail } from '~/data/services'
import Header from "~/components/Header.vue";
import ContactModal from "~/components/ContactModal.vue";
import Footer from "~/components/Footer.vue";
import SectionHeader from "~/components/SectionHeader.vue";
import Badge from "~/components/Badge.vue";
import Methodology from "~/components/Methodology.vue";
import ResourcesSection from "~/components/ResourcesSection.vue";
import { ref } from 'vue'
import { useAsyncData } from 'nuxt/app'
import { useDatabase } from '~/composables/useDatabase'
import { process as processData } from '~/data/personal'

useHead({
  title: 'Services — Jeobran Nathanael Kombou',
  meta: [
    {
      name: 'description',
      content:
        'Chef de projet, Product Owner, développement full-stack et IA. Services détaillés : besoin, livrables, méthode, outils et bénéfices.',
    },
  ],
})

const db = useDatabase()
const showContact = ref(false)

const { data: services, pending } = await useAsyncData<ServiceDetail[]>('services', async () => {
  const { data } = await db.services.getAll()
  return data || []
})

// methodology steps derived from process data
const processSteps = processData.map((p) => ({
  title: p.title,
  desc: p.desc,
  duration: p.duration,
  bullets: p.items,
}))
</script>
