<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <main class="pt-28 pb-16 px-6 max-w-5xl mx-auto">
      <div v-if="pending" class="text-center py-24">
        <div class="text-text-secondary">Chargement...</div>
      </div>

      <div v-else-if="error" class="text-center text-red-500 py-24">{{ error.statusMessage || error.message }}</div>

      <div v-else-if="!project" class="text-center py-24">
        <div class="text-text-secondary">Projet introuvable.</div>
      </div>

      <div v-else>
        <!-- Project Header -->
        <header class="mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">{{ project.title }}</h1>
          
          <!-- Tags (technologies, category, date) -->
          <div class="flex flex-wrap gap-2 mb-4">
            <Badge v-if="project.category" type="tech" variant="secondary">{{ project.category }}</Badge>
            <Badge v-for="(tech, idx) in project.technologies.slice(0, 3)" :key="idx" type="tech" variant="primary">{{ tech }}</Badge>
            <Badge v-if="project.end_date" type="date" variant="primary">{{ formatDate(project.end_date) }}</Badge>
          </div>

          <!-- Project Description -->
          <p class="text-text-secondary text-lg leading-relaxed">
            {{ project.long_description || project.description }}
          </p>

          <!-- CTA Button -->
          <div class="mt-6">
            <a v-if="project.project_url" :href="project.project_url" target="_blank" rel="noopener noreferrer" 
               aria-label="View project external link"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-cta text-primary-cta-text font-medium hover:bg-primary-cta-hover transition-colors">
              Voir le projet
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </header>

        <!-- Main Image (if available) -->
        <section v-if="project.image_url" class="mb-12">
          <div class="rounded-2xl overflow-hidden bg-surface">
            <img :src="project.image_url" :alt="project.title" class="w-full h-auto object-cover" />
          </div>
        </section>

        <!-- Contexte & objectif Section -->
        <section v-if="project.objectif && project.objectif.length > 0" class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-6">Contexte & objectif</h2>
          <div class="bg-surface rounded-2xl p-8">
            <div class="space-y-4">
              <p v-for="(obj, idx) in project.objectif" :key="idx" class="text-text-secondary leading-relaxed">
                {{ obj }}
              </p>
            </div>
          </div>
        </section>

        <!-- Solution & fonctionnalités clés Section -->
        <section v-if="project.solution && project.solution.length > 0" class="mb-12">
          <h2 class="text-2xl md:text-3xl font-bold text-text-primary mb-6">Solution & fonctionnalités clés</h2>
          <div class="bg-surface rounded-2xl p-8">
            <div class="space-y-3">
              <p class="text-text-secondary font-medium mb-3">Fonctionnalités principales :</p>
              <ul class="space-y-2">
                <li v-for="(sol, idx) in project.solution" :key="idx" class="flex items-start gap-3">
                  <span class="text-accent-blue mt-1">•</span>
                  <span class="text-text-secondary">{{ sol }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- Rôle & Stack Section (Side by Side) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <!-- Rôle Section -->
          <section v-if="project.role" class="bg-surface rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-text-primary mb-4">Rôle</h2>
            <p class="text-text-secondary">{{ project.role }}</p>
          </section>

          <!-- Stack Section -->
          <section v-if="project.stack_details && Object.keys(project.stack_details).length > 0" class="bg-surface rounded-2xl p-8">
            <h2 class="text-2xl font-bold text-text-primary mb-4">Stack</h2>
            <div class="space-y-4">
              <div v-for="(techs, category) in project.stack_details" :key="category">
                <h3 class="text-text-primary font-medium mb-2">{{ category }} :</h3>
                <p class="text-text-secondary">{{ techs.join(', ') }}</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Screenshots Grid (Placeholder for future images) -->
        <!-- Note: This section is hidden by default. Add project.screenshots field to display actual images -->
        <section v-if="false" class="mb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- These would be populated with project screenshots -->
            <div v-for="i in 4" :key="i" class="aspect-video bg-surface rounded-xl flex items-center justify-center border border-border-light">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="text-text-muted opacity-30" aria-hidden="true">
                <rect width="48" height="48" rx="4" fill="currentColor" opacity="0.1" />
                <path d="M16 20l8 8-8 8M26 24h8" stroke="currentColor" opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </section>

        <!-- Action Buttons -->
        <section v-if="project.github_url" class="flex flex-wrap gap-4">
          <a :href="project.github_url" target="_blank" rel="noopener noreferrer" 
             class="px-6 py-3 rounded-lg border border-border-light text-text-primary hover:bg-hover transition-colors">
            Code source
          </a>
        </section>
      </div>
    </main>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Badge from '~/components/Badge.vue'
import ContactModal from '~/components/ContactModal.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Project } from '~/types/database'

const db = useDatabase()
const route = useRoute()
const id = String(route.params.id || '')

const { data: projectData, pending, error } = await useAsyncData<Project | null>(`project-${id}`, async () => {
  if (!id) return null
  const { data, error } = await db.projects.getById(id)
  if (error) throw createError({ statusCode: 500, statusMessage: error.message })
  return data ?? null
})

const project = computed(() => projectData.value)

const formatDate = (dateString: string | null) => {
  if (!dateString) return 'En cours'
  const d = new Date(dateString)
  return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })
}

const showContact = ref(false)
</script>
