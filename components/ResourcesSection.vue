<template>
  <section id="ressources" class="py-20 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-12">
        <span
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest border mb-6"
          :class="themeClasses.chip"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="text-accent-blue">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Ressources
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          Documents <span class="text-gradient">à télécharger</span>
        </h2>
        <p class="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
          Téléchargez mes brochures de services détaillées. Chaque fiche présente les
          problèmes adressés, les solutions, les bénéfices et la stack utilisée.
        </p>
      </div>

      <!-- Downloads grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        <!-- Catalogue -->
        <a
          :href="catalogue.file"
          :download="catalogue.download"
          class="card-hover relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border-light bg-surface p-6 sm:p-8 group cursor-pointer no-underline"
        >
          <div class="absolute inset-0 glow-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div class="relative">
            <div class="w-14 h-14 rounded-2xl bg-accent-blue bg-opacity-10 border border-accent-blue border-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-accent-blue">
                <path d="M4 6a2 2 0 012-2h2l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-text-primary mb-2">Catalogue de services</h3>
            <p class="text-sm text-text-secondary mb-6 leading-relaxed">Vue d'ensemble de toutes mes offres en un PDF.</p>
            <div class="flex items-center gap-2 text-sm font-semibold text-accent-blue">
              Télécharger
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="group-hover:translate-x-1 transition-transform">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </a>

        <!-- Per-service brochures -->
        <a
          v-for="doc in brochures"
          :key="doc.file"
          :href="doc.file"
          :download="doc.download"
          class="card-hover relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border-light bg-surface p-6 sm:p-8 group cursor-pointer no-underline"
        >
          <div class="relative">
            <div class="w-14 h-14 rounded-2xl bg-hover border border-border-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-text-primary">
                <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                <path d="M14 3v6h6" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-text-primary mb-2">{{ doc.title }}</h3>
            <p class="text-sm text-text-secondary mb-6 leading-relaxed">{{ doc.description }}</p>
            <div class="flex items-center gap-2 text-sm font-semibold text-text-primary">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="text-accent-blue group-hover:translate-y-0.5 transition-transform">
                <path d="M10 3v14m0 0l-4-4m4 4l4-4M3 17h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="group-hover:text-accent-blue transition-colors">Télécharger le PDF</span>
              <span class="text-text-secondary font-normal text-xs ml-auto">{{ doc.size }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface ResourceDoc {
  title: string
  description: string
  file: string
  size: string
  download: string
}

const themeClasses = ref({
  chip: 'bg-hover text-text-secondary border-border-light',
})
let observer: MutationObserver | null = null

const catalogue: ResourceDoc = {
  title: 'Catalogue de services',
  description: "Vue d'ensemble complète de mes offres en un document clair.",
  file: '/pdf/services/catalogue-services.pdf',
  size: 'PDF · 28 Ko',
  download: 'catalogue-services.pdf',
}

const brochures: ResourceDoc[] = [
  {
    title: 'Développement IA & Automatisation',
    description: 'Problèmes adressés, solutions, bénéfices et stack pour vos projets IA.',
    file: '/pdf/services/ia-automatisation.pdf',
    size: 'PDF · 30 Ko',
    download: 'ia-automatisation.pdf',
  },
  {
    title: 'Développement Full-Stack',
    description: "Applications web complètes : frontend, backend, architecture et sécurité.",
    file: '/pdf/services/full-stack.pdf',
    size: 'PDF · 31 Ko',
    download: 'full-stack.pdf',
  },
  {
    title: 'Product Owner / Stakeholder',
    description: 'Vision produit, coordination des équipes et méthodes agiles.',
    file: '/pdf/services/product-owner.pdf',
    size: 'PDF · 29 Ko',
    download: 'product-owner.pdf',
  },
]

onMounted(() => {
  const isDark = !!document?.documentElement?.classList?.contains('dark')
  themeClasses.value.chip = isDark
    ? 'bg-hover text-text-secondary border-border-light'
    : 'bg-[#F0F0F0] text-[#6B6B6B] border-black/10'
  observer = new MutationObserver(() => {
    const dark = !!document?.documentElement?.classList?.contains('dark')
    themeClasses.value.chip = dark
      ? 'bg-hover text-text-secondary border-border-light'
      : 'bg-[#F0F0F0] text-[#6B6B6B] border-black/10'
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
</script>
