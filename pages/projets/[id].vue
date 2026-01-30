<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <main class="pt-28 pb-16 px-6 max-w-3xl mx-auto">
      <div v-if="pending" class="text-center py-24">Chargement...</div>

      <div v-else-if="error" class="text-center text-red-500 py-24">{{ error.statusMessage || error.message }}</div>

      <div v-else-if="!project" class="text-center py-24">Projet introuvable.</div>

      <div v-else>
        <header class="mb-6">
          <h1 class="text-3xl font-bold text-text-primary mb-2">{{ project.title }}</h1>
          <div class="text-text-secondary text-sm">{{ project.category || 'Projet' }} • {{ project.start_date ? formatDate(project.start_date) : '' }} — {{ project.end_date ? formatDate(project.end_date) : 'En cours' }}</div>
        </header>

        <section class="bg-surface rounded-2xl p-6 mb-6">
          <div v-if="project.image_url" class="mb-6">
            <img :src="project.image_url" alt="" class="w-full rounded-lg object-cover" />
          </div>

          <div class="prose prose-invert text-text-secondary mb-6">
            <p v-if="project.long_description">{{ project.long_description }}</p>
            <p v-else>{{ project.description }}</p>
          </div>

          <div class="flex flex-wrap gap-2 mb-6">
            <Badge v-for="(t, i) in project.technologies" :key="i" type="tech">{{ t }}</Badge>
          </div>

          <div class="flex gap-3">
            <a v-if="project.project_url" :href="project.project_url" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-md bg-[#0E0E10] text-white">Voir le projet</a>
            <a v-if="project.github_url" :href="project.github_url" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-md border border-border-light">Code source</a>
          </div>
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

// Project shape (keep in sync with types/database.ts)
interface Project {
  id: string
  title: string
  description: string
  long_description?: string | null
  image_url?: string | null
  project_url?: string | null
  github_url?: string | null
  technologies: string[]
  category?: string | null
  start_date?: string | null
  end_date?: string | null
}

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
