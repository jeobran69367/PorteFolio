<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <!-- Hero Section -->
    <section id="accueil" class="relative overflow-hidden pt-32 pb-16 px-4 sm:px-6">
      <div class="absolute inset-0 glow-blue opacity-40 pointer-events-none"></div>
      <div class="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-blue bg-opacity-10 blur-3xl pointer-events-none"></div>

      <div class="max-w-6xl mx-auto relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- Left content -->
        <div class="lg:col-span-7">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest border border-border-light bg-hover text-text-secondary mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            {{ identity.availability }}
          </div>

          <p class="text-sm sm:text-base font-semibold uppercase tracking-widest text-accent-blue mb-3">
            {{ valueProposition.eyebrow }}
          </p>

          <h1 class="text-4xl sm:text-5xl xl:text-6xl font-bold text-text-primary leading-[1.08] mb-6">
            <span class="text-text-secondary block text-xl sm:text-2xl font-medium mb-3">Je suis {{ identity.name.split(' ').slice(0, 2).join(' ') }}</span>
            <span class="text-gradient">{{ valueProposition.headline }}</span>
          </h1>

          <p class="text-text-secondary text-lg leading-relaxed max-w-2xl mb-8">
            {{ valueProposition.subheadline }}
          </p>

          <!-- Typed role -->
          <div class="mb-8 flex items-center gap-3 flex-wrap">
            <h2 class="text-2xl sm:text-3xl font-bold text-text-primary">
              <span ref="typedEl"></span>
            </h2>
            <div class="flex items-center -space-x-3">
              <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl shadow-md transform -rotate-6 bg-center bg-no-repeat bg-contain animate-float" style="background-image: url(&quot;/img/code.png&quot;)"></div>
              <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl shadow-md transform rotate-2 bg-center bg-no-repeat bg-contain animate-float" style="background-image: url(&quot;/img/ia.png&quot;); animation-delay:0.6s"></div>
              <div class="w-9 h-9 sm:w-11 sm:h-11 rounded-xl shadow-md transform rotate-6 bg-center bg-no-repeat bg-contain animate-float" style="background-image: url(&quot;/img/po.png&quot;); animation-delay:1.2s"></div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-4">
            <Button variant="primary" icon="arrow" size="lg" @click="showContact = true">Discutons de votre projet</Button>
            <Button variant="outline" icon="external" size="lg" @click="$router.push('/projets')">Voir mes études de cas</Button>
          </div>
        </div>

        <!-- Right card -->
        <div class="lg:col-span-5">
          <div class="relative rounded-3xl border border-border-light bg-surface p-6 sm:p-8 overflow-hidden">
            <div class="absolute inset-0 glow-blue opacity-30 pointer-events-none"></div>
            <div class="relative mb-6">
              <div class="absolute -inset-2 rounded-full bg-accent-blue bg-opacity-20 blur-xl"></div>
              <div class="relative w-20 h-20 rounded-2xl bg-surface border border-border-light overflow-hidden shadow-xl">
                <img src="/img/moi.png" alt="Portrait" class="w-full h-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>

            <p class="relative text-sm leading-relaxed text-text-secondary mb-6">
              {{ valueProposition.paragraphs[0] }}
            </p>

            <div class="relative grid grid-cols-2 gap-3">
              <div v-for="fact in keyFacts" :key="fact.label" class="rounded-xl bg-background/60 border border-border-light p-3">
                <p class="text-[11px] uppercase tracking-widest text-text-secondary/70">{{ fact.label }}</p>
                <p class="text-sm font-semibold text-text-primary mt-1">{{ fact.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Proof strip -->
      <div class="max-w-6xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="s in proofStrip" :key="s.label" class="text-center rounded-2xl border border-border-light bg-surface/60 p-5">
          <p class="text-2xl sm:text-3xl font-bold text-gradient">{{ s.value }}</p>
          <p class="text-xs text-text-secondary mt-1">{{ s.label }}</p>
        </div>
      </div>
    </section>

    <!-- Problems I solve -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Je résous" subtitle="Des problèmes concrets, fréquents en gestion de projet digital. Voici ceux que je prends en charge.">
          <template #title>Ce que je <span class="text-gradient">résous</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div v-for="p in problemsSolved" :key="p.title" class="card-hover rounded-2xl border border-border-light bg-surface p-6 sm:p-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-accent-blue bg-opacity-10 border border-accent-blue border-opacity-20 flex items-center justify-center flex-none">
                <component :is="IconComponent" v-if="IconComponent" :icon="p.icon" class="w-6 h-6 text-accent-blue" />
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-accent-blue"><path d="M12 9v4m0 4h.01M10.3 3.9L2 18a2 2 0 001.7 3h16.6a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold text-text-primary mb-2">{{ p.title }}</h3>
                <p class="text-sm text-text-secondary leading-relaxed">{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise domains -->
    <section class="py-20 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Mes domaines" subtitle="Chef de projet et expert technique : je couvre toute la chaîne, du cadrage au développement.">
          <template #title>Mes <span class="text-gradient">domaines d'expertise</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div v-for="domain in expertiseDomains" :key="domain.id" class="card-hover rounded-2xl border border-border-light bg-surface p-6 sm:p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-hover border border-border-light flex items-center justify-center">
                <component :is="IconComponent" v-if="IconComponent" :icon="domain.icon" class="w-6 h-6 text-accent-blue" />
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-accent-blue"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </div>
              <h3 class="text-lg font-bold text-text-primary">{{ domain.title }}</h3>
            </div>
            <p class="text-sm text-text-secondary mb-4 leading-relaxed">{{ domain.summary }}</p>
            <ul class="space-y-2">
              <li v-for="point in domain.points.slice(0, 4)" :key="point" class="flex items-start gap-2 text-sm text-text-secondary">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="text-accent-blue mt-0.5 flex-none"><path d="M5 10l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured case studies -->
    <section id="projets" class="py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Études de cas" subtitle="Des projets menés du cadrage à la livraison. Chaque étude détaille le contexte, mon rôle et les résultats.">
          <template #title>Mes <span class="text-gradient">réalisations</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <CardCaseStudy v-for="project in recentProjects" :key="project.id" :project="project" />
        </div>
        <div class="text-center">
          <Button variant="outline" icon="arrow" size="md" @click="$router.push('/projets')">Voir toutes les études de cas</Button>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="py-20 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Mes services" subtitle="De la conduite de projet au développement, je vous accompagne concrètement. Zoom sur chaque offre dans les pages Services.">
          <template #title>Comment je <span class="text-gradient">vous aide</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <NuxtLink v-for="service in services" :key="service.id" :to="`/services`" class="no-underline group card-hover rounded-2xl border border-border-light bg-surface p-6 sm:p-8 flex flex-col">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue border-opacity-20 self-start mb-5">
              {{ service.category }}
            </span>
            <h3 class="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">{{ service.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed mb-5 line-clamp-3">{{ service.description }}</p>
            <div class="mt-auto pt-4 border-t border-border-light">
              <div class="flex items-center gap-2 text-sm font-semibold text-text-primary">
                <span class="group-hover:text-accent-blue transition-colors">Découvrir</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="group-hover:translate-x-1 transition-transform"><path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why me / strengths -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Pourquoi moi" subtitle="Ce qui fait la différence quand vous me confiez un projet.">
          <template #title>Pourquoi un <span class="text-gradient">chef de projet</span> comme moi</template>
        </SectionHeader>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="s in strengths" :key="s.title" class="card-hover rounded-2xl border border-border-light bg-surface p-6 sm:p-8">
            <div class="w-10 h-10 rounded-lg bg-hover border border-border-light flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-accent-blue"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <h3 class="text-base font-bold text-text-primary mb-2">{{ s.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology -->
    <section class="py-20 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Ma méthode" subtitle="Une démarche structurée et éprouvée, pour des projets prévisibles et livrés.">
          <template #title>Comment je <span class="text-gradient">travaille</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div v-for="(step, i) in process" :key="step.step" class="card-hover rounded-2xl border border-border-light bg-surface p-6 sm:p-8 relative">
            <span class="absolute top-4 right-5 text-4xl font-bold text-text-muted/20">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue border-opacity-20 mb-4">{{ step.step }}</span>
            <h3 class="text-lg font-bold text-text-primary mb-1">{{ step.title }}</h3>
            <p class="text-xs text-text-secondary mb-3">{{ step.duration }}</p>
            <p class="text-sm text-text-secondary leading-relaxed mb-4">{{ step.desc }}</p>
            <ul class="space-y-1.5">
              <li v-for="item in step.items" :key="item" class="flex items-start gap-2 text-xs text-text-secondary">
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none" class="text-accent-blue mt-0.5 flex-none"><path d="M5 10l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources -->
    <ResourcesSection @open-contact="showContact = true" />

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <div class="bg-surface border border-border-light rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div class="absolute inset-0 glow-blue opacity-30 pointer-events-none"></div>
          <div class="relative">
            <h2 class="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Un projet à cadrer, piloter ou développer ?
            </h2>
            <p class="text-text-secondary mb-8 max-w-xl mx-auto">
              Décrivez votre besoin et je vous propose une approche concrète, avec des objectifs, un plan et des résultats mesurables.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" icon="arrow" size="lg" @click="showContact = true">Me contacter</Button>
              <Button variant="outline" icon="external" size="lg" @click="$router.push('/services')">Découvrir mes services</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import ContactModal from "~/components/ContactModal.vue";
import Footer from "~/components/Footer.vue";
import ResourcesSection from "~/components/ResourcesSection.vue";
import SectionHeader from "~/components/SectionHeader.vue";
import CardCaseStudy from "~/components/CardCaseStudy.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";
import Typed from "typed.js"
import { useAsyncData } from "nuxt/app";
import { useDatabase } from "../composables/useDatabase";
import { identity, valueProposition, problemsSolved, expertiseDomains, strengths, process, keyFacts, type CaseStudy } from "~/data/mockContent";

useHead({
  title: 'Jeobran Nathanael Kombou — Chef de projet & Développeur Full-Stack',
  meta: [
    {
      name: 'description',
      content:
        'Chef de projet hybride et développeur full-stack (Vue/Nuxt, Node, Python, IA). Je cadre, pilote et livre vos projets digitaux : études de cas, services et ressources téléchargeables.',
    },
  ],
})

const db = useDatabase();
const typedEl = ref<HTMLElement | null>(null)
let typed: Typed
const IconComponent = ref<any>(null)

onMounted(async () => {
  typed = new Typed(typedEl.value!, {
    strings: identity.heroRoles,
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1100,
    loop: true,
    smartBackspace: true,
  })
  // iconify optional
  try {
    const mod = await import('@iconify/vue')
    IconComponent.value = mod.Icon || mod.default || null
  } catch (e) {
    IconComponent.value = null
  }
})

onUnmounted(() => {
  typed.destroy()
})

const { data: projectsData } = await useAsyncData<CaseStudy[]>('projects', async () => {
  const { data, error } = await db.projects.getFeatured()
  if (error) { console.error("Error fetching featured projects:", error); return [] }
  return data ?? []
})

const { data: servicesData } = await useAsyncData('services', async () => {
  const { data, error } = await db.services.getActive()
  if (error) { console.error("Error fetching services:", error); return [] }
  return data ?? []
})

const recentProjects = computed<CaseStudy[]>(() => projectsData.value ?? [])
const services = computed(() => servicesData.value ?? [])

// Qualified phrasing, no invented numbers
const proofStrip = [
  { value: 'End-to-end', label: 'Cadrage → livraison' },
  { value: 'PM + Tech', label: 'Double casquette' },
  { value: 'Agile', label: 'Scrum · Kanban' },
  { value: 'Mesuré', label: 'Résultats & KPI' },
]

const showContact = ref(false);
</script>
