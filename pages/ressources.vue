<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <!-- Hero -->
    <section class="pt-36 pb-16 px-4 sm:px-6 relative overflow-hidden">
      <div class="absolute inset-0 glow-blue opacity-40 pointer-events-none"></div>
      <div class="max-w-6xl mx-auto relative text-center">
        <span
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest border mb-6 bg-hover text-text-secondary border-border-light"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" class="text-accent-blue">
            <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Ressources
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
          Mes offres, en un
          <span class="text-gradient">clic</span>
        </h1>
        <p class="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
          Retrouvez ici les documents détaillés de mes services, prêts à télécharger.
          Parfaits pour vos appels d'offres, briefs et prises de décision.
        </p>
      </div>
    </section>

    <ResourcesSection @open-contact="showContact = true" />

    <!-- Why download -->
    <section class="py-16 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in points"
            :key="i"
            class="p-6 sm:p-8 rounded-2xl bg-surface border border-border-light card-hover"
          >
            <div class="w-12 h-12 rounded-xl bg-accent-blue bg-opacity-10 border border-accent-blue border-opacity-20 flex items-center justify-center mb-5">
              <component
                :is="IconComponent"
                v-if="IconComponent"
                :icon="item.icon"
                class="w-6 h-6 text-accent-blue"
              />
              <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-accent-blue">
                <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8" />
                <path d="M12 8v4m0 4h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-text-primary mb-2">{{ item.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <div class="bg-surface border border-border-light rounded-3xl p-8 sm:p-12 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Un projet en tête ?
          </h2>
          <p class="text-text-secondary mb-8">
            Décrivez-moi votre besoin et je vous propose une solution sur-mesure.
          </p>
          <Button variant="primary" icon="arrow" size="lg" @click="showContact = true">
            Me contacter
          </Button>
        </div>
      </div>
    </section>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ContactModal from '~/components/ContactModal.vue'
import ResourcesSection from '~/components/ResourcesSection.vue'
import { ref, onMounted } from 'vue'

useHead({
  title: 'Ressources téléchargeables — Jeobran Nathanael Kombou',
  meta: [
    {
      name: 'description',
      content:
        'Téléchargez les brochures détaillées de mes services : IA & automatisation, développement full-stack, product owner. Catalogues et fiches PDF.',
    },
  ],
})

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

const points = [
  {
    icon: 'mdi:file-document-outline',
    title: 'Clair & structuré',
    desc: 'Une fiche par service : problèmes adressés, solutions concrètes et bénéfices mesurables.',
  },
  {
    icon: 'mdi:chart-areaspline',
    title: 'Pensé pour vous',
    desc: 'Des documents rédigés pour faciliter vos comparaisons et vos prises de décision.',
  },
  {
    icon: 'mdi:check-circle-outline',
    title: 'Toujours à jour',
    desc: 'Les offres évoluent avec les meilleures pratiques et les technologies récentes.',
  },
]
</script>
