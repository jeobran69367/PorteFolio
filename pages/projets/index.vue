<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <main class="pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-12">
        <SectionHeader eyebrow="Études de cas" subtitle="Chaque projet est documenté comme une étude de cas complète : contexte, problématique, rôle, méthode, résultats et compétences démontrées.">
          <template #title>Projets &amp; <span class="text-gradient">réalisations</span></template>
        </SectionHeader>
      </div>

      <!-- Filters by category -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="cat in categories"
          :key="cat.value"
          @click="activeCategory = cat.value"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium transition-all border',
            activeCategory === cat.value
              ? 'bg-accent-blue bg-opacity-10 text-accent-blue border-accent-blue border-opacity-30'
              : 'bg-surface text-text-secondary border-border-light hover:border-border-strong',
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <div v-if="pending" class="text-center py-24 text-text-secondary">Chargement des études de cas…</div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <CardCaseStudy v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>

      <!-- Empty state -->
      <div v-if="!pending && filteredProjects.length === 0" class="text-center py-24 text-text-secondary">
        Aucune étude de cas dans cette catégorie pour le moment.
      </div>
    </main>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import CardCaseStudy from '~/components/CardCaseStudy.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import ContactModal from '~/components/ContactModal.vue'
import { ref, computed } from 'vue'
import { useDatabase } from '~/composables/useDatabase'
import type { CaseStudy } from '~/data/projects'

useHead({
  title: 'Projets & études de cas — Jeobran Nathanael Kombou',
  meta: [
    {
      name: 'description',
      content:
        'Études de cas détaillées : pilotage de projet, développement full-stack, IA & automatisation. Contexte, rôle, méthodologie et résultats.',
    },
  ],
})

const db = useDatabase()
const showContact = ref(false)
const activeCategory = ref('all')

const categories = [
  { value: 'all', label: 'Tous' },
  { value: 'Project Management', label: 'Chef de projet' },
  { value: 'Développement web', label: 'Développement web' },
  { value: 'IA & Automatisation', label: 'IA & Automatisation' },
]

const { data: projectsData, pending } = await useAsyncData<CaseStudy[]>('all-projects', async () => {
  const { data, error } = await db.projects.getAll()
  if (error) { console.error('Error loading projects', error); return [] }
  return data ?? []
})

const projects = computed(() => projectsData.value ?? [])

const filteredProjects = computed(() =>
  activeCategory.value === 'all'
    ? projects.value
    : projects.value.filter((p) => p.category === activeCategory.value),
)
</script>
