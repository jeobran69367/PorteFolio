<template>
  <div class="min-h-screen bg-background font-sans">
    <Header @open-contact="showContact = true" />

    <main class="pt-32 pb-20 px-6 max-w-6xl mx-auto space-y-24">
      
      <section class="text-center space-y-6 max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          Mes services pour concevoir et déployer des <span class="text-text-secondary">solutions digitales performantes</span>
        </h1>
        <p class="text-text-secondary text-lg leading-relaxed">
          Développeur Full-Stack spécialisé en IA, automatisation et applications web, j'accompagne vos projets de l'idée à la mise en production.
        </p>
      </section>

      <div v-if="pending" class="text-center opacity-50">Chargement des services...</div>
      <section v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="service in services" :key="service.id" 
             class="group p-8 rounded-3xl bg-surface border border-border-light hover:border-border-strong transition-all duration-300">
          
          <div class="w-12 h-12 rounded-xl bg-hover border border-border-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
             <span class="text-text-secondary text-xl font-mono">/</span>
          </div>

          <h3 class="text-xl font-bold mb-4 text-text-primary">
            <template v-if="sectionsForService(service.id).length">
              {{ formatSections(sectionsForService(service.id)) }}
            </template>
            <template v-else>
              {{ service.title }}
            </template>
          </h3>
          <p class="text-text-secondary text-sm mb-8 leading-relaxed">{{ service.description }}</p>

          <ul class="space-y-3">
            <li v-for="(sol, i) in service.solutions?.slice(0, 5)" :key="i" class="flex items-center gap-3 text-sm text-text-secondary">
                <template v-if="IconComponent">
                    <component
                        :is="IconComponent"
                        icon="mdi:check-circle"
                        width="20"
                        height="20"
                        class="text-green-500 w-5 h-5 flex-none"
                        aria-hidden="true"
                    />
                </template>
                <template v-else>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="text-green-500 w-5 h-5 flex-none"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" fill="none" opacity="0.15" />
                        <path d="M7 12.5l2.5 2.5L17 8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </template>
                <span>{{ sol }}</span>
            </li>
          </ul>
        </div>
      </section>

    <section class="space-y-12">
      <div v-for="sec in sections" :key="sec" class="space-y-6">
        <h2 class="text-3xl font-bold">{{ sectionTitles[sec] ?? humanize(sec) }}</h2>
        <div class="bg-surface border border-border-light rounded-[40px] p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="col in columnsFor(sec)" :key="col">
            <div class="mb-4 text-sm text-text-secondary"></div>
            <FeatureColumn
              :title="columnTitles[col] ?? humanize(col)"
              :items="(groupedBySection[sec] && groupedBySection[sec][col]) ? groupedBySection[sec][col] : []"
            />
          </div>
        </div>
      </div>
    </section>

  <Methodology :steps="steps" />

    </main>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import type { Service } from '~/types/database'
import Header from "~/components/Header.vue";
import ContactModal from "~/components/ContactModal.vue";
import Footer from "~/components/Footer.vue";
import { ref, onMounted, computed, watch } from 'vue'
import { useAsyncData } from 'nuxt/app'
import { useDatabase } from '~/composables/useDatabase'
import FeatureColumn from '~/components/FeatureColumn.vue'
import Methodology from '~/components/Methodology.vue'

const db = useDatabase()
const showContact = ref(false)
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

// Récupération des services depuis Supabase
const { data: services, pending } = await useAsyncData<Service[]>('services', async () => {
  const { data } = await db.services.getAll()
  return data || []
})

// <-- features fetch (all sections) -->
const { data: featuresData } = await useAsyncData('features', async () => {
  const { data, error } = await db.features.getAll()
  if (error) {
    // retourne tableau vide en cas d'erreur pour éviter crash
    return []
  }
  return data ?? []
})

// Debug: log fetched features to console (server + client) to help trace why nothing renders
watch(featuresData, (v) => {
  // eslint-disable-next-line no-console
  console.debug('[services] featuresData', v)
})

// Grouper et ordonner les features par feature_column
const grouped = computed(() => {
  const map: Record<string, Array<any>> = {}
  ;(featuresData.value ?? []).forEach((f: any) => {
  const col = (f.feature_column ?? 'others') as string
  if (!map[col]) map[col] = []
  // map DB shape (content) to UI shape (text)
  map[col].push({ id: f.id, text: f.content, italic: f.italic ?? false, order_index: f.order_index ?? 0 })
  })
  // trier par order_index
  Object.values(map).forEach(arr => arr.sort((a: any, b: any) => (a.order_index ?? 0) - (b.order_index ?? 0)))
  return map
})

// ordre préféré des colonnes puis les autres dynamiques
const preferredOrder = ['problems', 'solutions', 'benefits']
const columns = computed(() => {
  const keys = Object.keys(grouped.value)
  const ordered = [
    ...preferredOrder.filter(k => keys.includes(k)),
    ...keys.filter(k => !preferredOrder.includes(k))
  ]
  return ordered
})

// titrage automatique (fr) + fallback humanize
const columnTitles: Record<string, string> = {
  problems: 'Problèmes adressés',
  solutions: 'Solutions',
  benefits: 'Bénéfices'
}
const humanize = (k: string) =>
  k
    .replace(/_/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())

// compatibilité si tu veux garder les noms spécifiques
const problems = computed(() => grouped.value.problems ?? [])
const solutions = computed(() => grouped.value.solutions ?? [])
const benefits = computed(() => grouped.value.benefits ?? [])

// Méthodologie de travail - timeline steps (rendered in template)
const steps = [
  {
    title: 'Découverte',
    desc: "Ateliers et compréhension des besoins métier",
    duration: '1-2 semaines',
    bullets: ['Interview stakeholders', 'Audit existant', 'Définition des objectifs']
  },
  {
    title: 'Conception',
    desc: "Architecture, choix tech et maquettes fonctionnelles",
    duration: '2-4 semaines',
    bullets: ['Architecture cible', 'Proof-of-Concept', 'Maquettes UX']
  },
  {
    title: 'Implémentation',
    desc: "Développement, tests et déploiement",
    duration: 'variable',
    bullets: ['Développement itératif', 'Tests automatisés', 'CI/CD & déploiement']
  }
]

// Group features by section then by feature_column
const groupedBySection = computed(() => {
  const map: Record<string, Record<string, Array<any>>> = {}
  ;(featuresData.value ?? []).forEach((f: any) => {
    const sec = String(f.section ?? 'general')
    const col = String(f.feature_column ?? 'others')
    if (!map[sec]) map[sec] = {}
    if (!map[sec][col]) map[sec][col] = []
    map[sec][col].push({ id: f.id, text: f.content, italic: f.italic ?? false, order_index: f.order_index ?? 0 })
  })
  // sort each column by order_index
  Object.values(map).forEach(secMap => Object.values(secMap).forEach(arr => arr.sort((a: any,b: any) => (a.order_index ?? 0) - (b.order_index ?? 0))))
  return map
})

const sections = computed(() => Object.keys(groupedBySection.value))

const sectionTitles: Record<string, string> = {
  ia_automation: 'IA & Automatisation (impact business)',
  full_stack: 'Développement Full-Stack',
  product_owner: 'Product / PO'
}

const columnsFor = (sec: string) => {
  const keys = groupedBySection.value[sec] ? Object.keys(groupedBySection.value[sec]) : []
  const ordered = [
    ...preferredOrder.filter(k => keys.includes(k)),
    ...keys.filter(k => !preferredOrder.includes(k))
  ]
  return ordered
}

// Group features by service id -> sections (for using as service title)
const groupedByService = computed(() => {
  const map: Record<string, Set<string>> = {}
  ;(featuresData.value ?? []).forEach((f: any) => {
    const sid = String(f.service_id ?? 'none')
    const sec = String(f.section ?? 'general')
    if (!map[sid]) map[sid] = new Set()
    map[sid].add(sec)
  })
  return map
})

const sectionsForService = (serviceId: string | undefined) => {
  const sid = String(serviceId ?? 'none')
  return Array.from(groupedByService.value[sid] || [])
}

const formatSections = (secs: string[]) => secs.map(s => sectionTitles[s] ?? humanize(s)).join(' • ')

</script>

