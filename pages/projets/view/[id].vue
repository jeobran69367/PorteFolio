<template>
  <div class="min-h-screen bg-background text-text-primary">
    <Header @open-contact="showContact = true" />

    <main class="pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div v-if="pending" class="flex justify-center py-24"><div class="skeleton w-24 h-24 rounded-full"></div></div>
      <div v-else-if="error" class="text-center text-red-500 py-24">{{ error.statusMessage || "Erreur réseau" }}</div>
      <div v-else-if="!project" class="text-center py-24 text-text-secondary">Étude de cas introuvable.</div>

      <div v-else>
        <!-- Breadcrumb -->
        <nav class="flex items-center gap-2 text-sm text-text-secondary mb-8">
          <NuxtLink to="/projets" class="hover:text-accent-blue transition-colors">Projets</NuxtLink>
          <span>/</span>
          <span class="text-text-primary">{{ project.title }}</span>
        </nav>

        <!-- Header -->
        <div class="mb-12">
          <div class="flex flex-wrap items-center gap-3 mb-5">
            <Badge type="tech" variant="secondary">{{ project.category }}</Badge>
            <Badge type="date">{{ project.timeline }}</Badge>
            <Badge v-if="project.personCount" type="tech">{{ project.personCount }}</Badge>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{{ project.title }}</h1>
          <p class="text-xl text-text-secondary max-w-3xl leading-relaxed">{{ project.long_description || project.description }}</p>
          <div class="mt-6">
            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-accent-blue bg-opacity-10 text-accent-blue border border-accent-blue border-opacity-20">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M4 20a8 8 0 0116 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              Mon rôle : {{ project.role }}
            </span>
          </div>
        </div>

        <!-- 2-col grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <!-- Left (main) -->
          <div class="lg:col-span-2 space-y-12">
            <!-- Contexte & enjeu -->
            <CaseBlock title="Contexte & enjeu" icon="mdi:map-marker-path">
              <p class="text-text-secondary leading-relaxed mb-4">{{ project.context }}</p>
              <div class="rounded-xl bg-hover border border-border-light p-4">
                <p class="text-xs font-semibold uppercase tracking-widest text-accent-blue mb-2">Besoin initial / problématique</p>
                <p class="text-text-secondary leading-relaxed">{{ project.need }}</p>
              </div>
            </CaseBlock>

            <!-- Objectifs -->
            <CaseBlock title="Objectifs" icon="mdi:bullseye-arrow">
              <ul class="space-y-2.5">
                <li v-for="(obj, i) in project.objectives" :key="i" class="flex items-start gap-3 text-text-secondary">
                  <span class="inline-flex w-6 h-6 rounded-full bg-accent-blue bg-opacity-10 text-accent-blue text-xs font-bold items-center justify-center flex-none">{{ i + 1 }}</span>
                  <span>{{ obj }}</span>
                </li>
              </ul>
            </CaseBlock>

            <!-- Méthodologie -->
            <CaseBlock title="Méthodologie de travail" icon="mdi:file-tree-outline">
              <ol class="space-y-3">
                <li v-for="(m, i) in project.methodology" :key="i" class="flex items-start gap-3 text-text-secondary">
                  <span class="inline-flex w-6 h-6 rounded-lg bg-hover border border-border-light text-xs font-bold items-center justify-center flex-none">{{ i + 1 }}</span>
                  <span class="leading-relaxed">{{ m }}</span>
                </li>
              </ol>
            </CaseBlock>

            <!-- Solutions & décisions -->
            <CaseBlock title="Solutions mises en place" icon="mdi:lightbulb-on-outline">
              <ul class="space-y-2.5">
                <li v-for="(s, i) in project.solutions" :key="i" class="flex items-start gap-3 text-text-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-accent-blue mt-0.5 flex-none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span>{{ s }}</span>
                </li>
              </ul>
            </CaseBlock>

            <!-- Décisions clés -->
            <CaseBlock v-if="project.decisions?.length" title="Décisions clés" icon="mdi:comment-check-outline">
              <ul class="space-y-2.5">
                <li v-for="(d, i) in project.decisions" :key="i" class="flex items-start gap-3 text-text-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-accent-blue mt-0.5 flex-none"><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3l7 4v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
                  <span>{{ d }}</span>
                </li>
              </ul>
            </CaseBlock>

            <!-- Résultats -->
            <CaseBlock title="Résultats obtenus" icon="mdi:chart-line-variant">
              <ul class="space-y-3">
                <li v-for="(r, i) in project.results" :key="i" class="flex items-start gap-3 text-text-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-accent-blue mt-0.5 flex-none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  <span>{{ r }}</span>
                </li>
              </ul>
            </CaseBlock>

            <!-- Enseignements -->
            <CaseBlock v-if="project.learnings" title="Enseignements & impact" icon="mdi:school-outline">
              <p class="text-text-secondary leading-relaxed">{{ project.learnings }}</p>
            </CaseBlock>
          </div>

          <!-- Right (sidebar) -->
          <div class="space-y-6">
            <!-- KPI -->
            <div class="rounded-2xl border border-border-light bg-surface p-6">
              <h3 class="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">Indicateurs / KPI</h3>
              <div class="space-y-4">
                <div v-for="(kpi, i) in project.kpis" :key="i" class="border-b border-border-light pb-3 last:border-0 last:pb-0">
                  <p class="text-xs text-text-secondary">{{ kpi.label }}</p>
                  <p class="text-lg font-bold text-accent-blue mt-1">{{ kpi.value }}</p>
                  <p v-if="kpi.note" class="text-[11px] text-text-secondary/70 mt-0.5">{{ kpi.note }}</p>
                </div>
                <p class="text-[11px] text-text-secondary/60 italic">Indicateurs à personnaliser avec vos propres données.</p>
              </div>
            </div>

            <!-- Organisation & parties prenantes -->
            <div class="rounded-2xl border border-border-light bg-surface p-6">
              <h3 class="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">Organisation du projet</h3>
              <p class="text-sm text-text-secondary leading-relaxed mb-5">{{ project.organization }}</p>

              <h4 class="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3">Parties prenantes</h4>
              <div class="flex flex-wrap gap-2 mb-5">
                <Badge v-for="(s, i) in project.stakeholders" :key="i" type="tech">{{ s }}</Badge>
              </div>

              <h4 class="text-xs font-semibold uppercase tracking-widest text-text-secondary mb-3">Responsabilités</h4>
              <ul class="space-y-2">
                <li v-for="(r, i) in project.responsibilities" :key="i" class="flex items-start gap-2 text-sm text-text-secondary">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-none"></span>
                  <span>{{ r }}</span>
                </li>
              </ul>
            </div>

            <!-- Contraintes & difficultés -->
            <div class="rounded-2xl border border-border-light bg-surface p-6">
              <h3 class="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">Contraintes & difficultés</h3>
              <p class="text-xs font-semibold uppercase tracking-widest text-text-secondary/70 mb-2">Contraintes</p>
              <ul class="space-y-2 mb-4">
                <li v-for="(c, i) in project.constraints" :key="i" class="flex items-start gap-2 text-sm text-text-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-accent-blue mt-0.5 flex-none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                  <span>{{ c }}</span>
                </li>
              </ul>
              <p class="text-xs font-semibold uppercase tracking-widest text-text-secondary/70 mb-2">Difficultés</p>
              <ul class="space-y-2">
                <li v-for="(c, i) in project.challenges" :key="i" class="flex items-start gap-2 text-sm text-text-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="text-accent-blue mt-0.5 flex-none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                  <span>{{ c }}</span>
                </li>
              </ul>
            </div>

            <!-- Outils -->
            <div class="rounded-2xl border border-border-light bg-surface p-6">
              <h3 class="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">Outils & technologies</h3>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="t in project.technologies" :key="t" type="tech" variant="primary">{{ t }}</Badge>
              </div>
            </div>

            <!-- Compétences démontrées -->
            <div class="rounded-2xl border border-border-light bg-surface p-6">
              <h3 class="text-sm font-semibold uppercase tracking-widest text-text-secondary mb-4">Compétences démontrées</h3>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="c in project.competencies" :key="c" type="tech" variant="secondary">{{ c }}</Badge>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="bg-surface border border-border-light rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div class="absolute inset-0 glow-blue opacity-30 pointer-events-none"></div>
          <div class="relative">
            <h2 class="text-2xl sm:text-3xl font-bold text-text-primary mb-4">Un projet similaire ?</h2>
            <p class="text-text-secondary mb-8 max-w-xl mx-auto">Parlons de votre besoin : je peux vous proposer une approche et un plan adaptés.</p>
            <Button variant="primary" icon="arrow" size="lg" @click="showContact = true">Me contacter</Button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Badge from '~/components/Badge.vue'
import Button from '~/components/Button.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ContactModal from '~/components/ContactModal.vue'
import CaseBlock from '~/components/CaseBlock.vue'
import { useDatabase } from '~/composables/useDatabase'
import type { CaseStudy } from '~/data/projects'

const db = useDatabase()
const route = useRoute()
const showContact = ref(false)
const id = String(route.params.id || '')

const { data: projectData, pending, error } = await useAsyncData<CaseStudy | null>(`project-${id}`, async () => {
  if (!id) return null
  const { data, error } = await db.projects.getById(id)
  if (error) throw createError({ statusCode: 500, statusMessage: error.message })
  return data
})

const project = computed(() => projectData.value)

useHead(() => ({
  title: project.value ? `${project.value.title} — Étude de cas · Jeobran` : 'Étude de cas',
  meta: [
    {
      name: 'description',
      content: project.value?.long_description || project.value?.description || 'Étude de cas',
    },
  ],
}))
</script>
