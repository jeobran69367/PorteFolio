<template>
  <section id="ressources" class="py-20 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto">
      <SectionHeader eyebrow="Ressources" subtitle="Des documents utiles pour évaluer mon profil et ma démarche. Téléchargeables, structurés et professionnels.">
        <template #title>Documents <span class="text-gradient">à télécharger</span></template>
      </SectionHeader>

      <!-- Downloads grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        <a
          v-for="doc in resources"
          :key="doc.file"
          :href="doc.file"
          :download="doc.download"
          class="card-hover relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border-light bg-surface p-6 sm:p-8 group cursor-pointer no-underline flex flex-col"
        >
          <div class="absolute inset-0 glow-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div class="relative flex flex-col flex-1">
            <div class="w-14 h-14 rounded-2xl bg-hover border border-border-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <component :is="IconComponent" v-if="IconComponent" :icon="doc.icon" class="w-7 h-7 text-accent-blue" />
              <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none" class="text-accent-blue"><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3v6h6" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
            </div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue border-opacity-20 self-start mb-4">{{ doc.type }}</span>
            <h3 class="text-lg font-bold text-text-primary mb-2">{{ doc.title }}</h3>
            <p class="text-sm text-text-secondary mb-6 leading-relaxed">{{ doc.description }}</p>
            <div class="mt-auto pt-4 border-t border-border-light flex items-center justify-between">
              <div class="flex items-center gap-2 text-sm font-semibold text-text-primary">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="text-accent-blue group-hover:translate-y-0.5 transition-transform"><path d="M10 3v14m0 0l-4-4m4 4l4-4M3 17h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span class="group-hover:text-accent-blue transition-colors">Télécharger</span>
              </div>
              <span class="text-text-secondary text-xs">{{ doc.size }}</span>
            </div>
          </div>
        </a>
      </div>

      <!-- Note -->
      <p class="text-center text-sm text-text-secondary/70 mt-8 max-w-2xl mx-auto">
        Certains documents comportent des champs « à compléter » : ce sont les informations que vous seuls connaissez (employeurs, chiffres précis). Leur structure est prête à l'emploi.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SectionHeader from './SectionHeader.vue'

interface ResourceDoc {
  title: string
  type: string
  description: string
  file: string
  size: string
  download: string
  icon: string
}

const IconComponent = ref<any>(null)

const resources: ResourceDoc[] = [
  {
    title: 'Profil professionnel',
    type: 'Synthèse',
    description: "Un document de synthèse : positionnement, pôles d'expertise et éléments clés de mon profil.",
    file: '/pdf/services/profil-professionnel.pdf',
    size: 'PDF',
    download: 'profil-professionnel.pdf',
    icon: 'mdi:account-tie-outline',
  },
  {
    title: 'Fiche de compétences',
    type: 'Compétences',
    description: 'Compétences en gestion de projet, méthodes agiles, développement full-stack et IA, avec les outils associés.',
    file: '/pdf/services/fiche-competences.pdf',
    size: 'PDF',
    download: 'fiche-competences.pdf',
    icon: 'mdi:clipboard-check-outline',
  },
  {
    title: 'Méthode de travail',
    type: 'Méthode',
    description: 'Ma démarche de gestion de projet en 4 étapes : cadrage, planification, pilotage et livraison.',
    file: '/pdf/services/methode-travail.pdf',
    size: 'PDF',
    download: 'methode-travail.pdf',
    icon: 'mdi:map-marker-path',
  },
  {
    title: 'Études de cas',
    type: 'Réalisations',
    description: 'Des études de cas détaillées : contexte, objectifs, rôle, méthode, résultats et compétences démontrées.',
    file: '/pdf/services/etudes-de-cas.pdf',
    size: 'PDF',
    download: 'etudes-de-cas.pdf',
    icon: 'mdi:folder-open-outline',
  },
  {
    title: 'Catalogue de services',
    type: 'Offres',
    description: "Vue d'ensemble de mes services : pilotage de projet, product management, développement et IA.",
    file: '/pdf/services/catalogue-services.pdf',
    size: 'PDF',
    download: 'catalogue-services.pdf',
    icon: 'mdi:file-document-multiple-outline',
  },
  {
    title: 'IA & Automatisation',
    type: 'Service',
    description: "Détails du service IA & automatisation : besoin, livrables, méthode, outils et bénéfices.",
    file: '/pdf/services/ia-automatisation.pdf',
    size: 'PDF',
    download: 'ia-automatisation.pdf',
    icon: 'mdi:robot-outline',
  },
  {
    title: 'Chef de projet / Pilotage',
    type: 'Service',
    description: "Détails du service chef de projet : cadrage, planification, coordination, suivi et livraison.",
    file: '/pdf/services/chef-de-projet.pdf',
    size: 'PDF',
    download: 'chef-de-projet.pdf',
    icon: 'mdi:compass-outline',
  },
  {
    title: 'Développement Full-Stack',
    type: 'Service',
    description: 'Détails du service développement full-stack : applications web, backend, architecture, sécurité.',
    file: '/pdf/services/full-stack.pdf',
    size: 'PDF',
    download: 'full-stack.pdf',
    icon: 'mdi:code-braces',
  },
  {
    title: 'Product Owner / PM',
    type: 'Service',
    description: 'Détails du service Product Owner / Product management : vision produit, backlog, coordination.',
    file: '/pdf/services/product-owner.pdf',
    size: 'PDF',
    download: 'product-owner.pdf',
    icon: 'mdi:lightbulb-on-outline',
  },
]

onMounted(async () => {
  try {
    const mod = await import('@iconify/vue')
    IconComponent.value = mod.Icon || mod.default || null
  } catch (e) {
    IconComponent.value = null
  }
})
</script>
