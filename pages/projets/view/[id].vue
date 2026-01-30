<template>
  <div class="min-h-screen bg-background text-text-primary">
    <Header @open-contact="showContact = true" />

    <main class="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div v-if="pending" class="flex justify-center py-24"><div class="animate-pulse">Chargement du projet...</div></div>
      <div v-else-if="error" class="text-center text-red-500 py-24">{{ error.statusMessage || "Erreur réseau" }}</div>
      <div v-else-if="!project" class="text-center py-24">Projet introuvable.</div>

      <div v-else class="space-y-16">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="aspect-video lg:aspect-square bg-surface rounded-3xl overflow-hidden border border-border-light/10">
            <img v-if="project.image_url" :src="project.image_url" class="w-full h-full object-cover" alt="Hero image">
            <div v-else class="w-full h-full flex items-center justify-center text-text-secondary/20 italic">Aperçu projet</div>
          </div>

          <div class="flex flex-col justify-center h-full">
            <div class="flex flex-wrap gap-2 mb-6">
              <Badge type="tech" class="opacity-80">{{ project.category }}</Badge>
              <Badge v-if="project.end_date" type="date">{{ formatDate(project.end_date) }}</Badge>
            </div>
            
            <h1 class="text-5xl font-bold mb-6 tracking-tight">{{ project.title }}</h1>
            
            <p class="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
              {{ project.long_description || project.description }}
            </p>

            <div class="flex items-center gap-4">
              <a v-if="project.project_url" :href="project.project_url" target="_blank" class="px-6 py-3 rounded-xl bg-white text-black font-semibold flex items-center gap-2 hover:bg-opacity-90 transition">
                Voir le projet <span class="text-xs">↗</span>
              </a>
              <a v-if="project.github_url" :href="project.github_url" target="_blank" class="px-6 py-3 rounded-xl border border-border-light hover:bg-surface transition">
                Source
              </a>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12">
          <div class="space-y-12">
            <section>
              <h2 class="text-2xl font-bold mb-4">Contexte & objectif</h2>
              <div class="text-text-secondary leading-relaxed space-y-4">
                <p v-for="(obj, i) in project.objectif" :key="i">{{ obj }}</p>
                <p v-if="!project.objectif?.length">Description du contexte académique ou professionnel.</p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-4">Solution & fonctionnalités clés</h2>
              <p class="text-text-secondary mb-4">La solution repose sur une architecture moderne intégrant :</p>
              <ul class="space-y-2">
                <li v-for="(sol, i) in project.solution" :key="i" class="flex items-start gap-3 text-text-secondary">
                  <span class="text-blue-500 mt-1.5">•</span> {{ sol }}
                </li>
              </ul>
            </section>
          </div>

          <div class="aspect-square bg-surface rounded-3xl border border-border-light/10 flex items-center justify-center text-text-secondary/20 italic">
            Visualisation Dashboard / Mobile
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-8 bg-surface rounded-3xl border border-border-light/5">
            <h3 class="text-xl font-bold mb-4">Rôle</h3>
            <p class="text-text-secondary text-lg">Développeur Full-Stack & IA</p>
          </div>
          
          <div class="p-8 bg-surface rounded-3xl border border-border-light/5">
            <h3 class="text-xl font-bold mb-4">Stack</h3>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tech in project.technologies" :key="tech" class="bg-background border-none">{{ tech }}</Badge>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="n in 4" :key="n" class="aspect-video bg-surface rounded-3xl border border-border-light/10 flex items-center justify-center text-text-secondary/10">
            Image additionnelle {{ n }}
          </div>
        </div>

        <!-- Recent Projects Section -->
    <section id="projets" class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Card wrapper to match CTA style (slightly larger) -->
        <div
          class="bg-surface border border-border-light rounded-3xl pt-16 px-16 pb-24 relative"
        >
          <div class="mb-12 text-center">
            <h2 class="text-5xl font-bold text-text-primary mb-4">
              Projets récents
            </h2>
            <p class="text-text-secondary text-lg max-w-2xl mx-auto">
              Une sélection de travaux réalisés qui illustrent ma façon
              d'aborder le design et la création de produits digitaux.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <CardProject
              v-for="project in recentProjects"
              :key="project.id"
              :date="formatDate(project.end_date)"
              date-variant="primary"
            >
              <template #image>
                <div
                  class="w-full h-full bg-background flex items-center justify-center"
                >
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    class="text-text-muted"
                  >
                    <rect
                      width="80"
                      height="80"
                      fill="currentColor"
                      opacity="0.1"
                    />
                    <path
                      d="M30 35L40 45L30 55M45 50H55"
                      stroke="currentColor"
                      opacity="0.3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </template>

              <template #title>{{ project.title }}</template>

              <template #description>{{ project.description }}</template>

              <template #technologies>
                <Badge
                  v-for="(tech, idx) in project.technologies.slice(0, 3)"
                  :key="idx"
                  type="tech"
                  variant="primary"
                >
                  {{ tech }}
                </Badge>
              </template>
            </CardProject>
          </div>
          <!-- Floating centered button overlapping the bottom of the card -->
          <div
            class="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-30"
          >
            <Button variant="primary" icon="arrow"
              >Voir d'autres projets</Button
            >
          </div>
        </div>
      </div>
    </section>

        <!-- CTA Section -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-surface border border-border-light rounded-3xl p-12 text-center"
        >
          <h2 class="text-4xl font-bold text-text-primary mb-4">
            Travaillons ensemble
          </h2>
          <p class="text-text-secondary mb-8">
            Disponible pour projets, missions et collaborations.
          </p>
          <Button
            variant="primary"
            @click="showContact = true"
            icon="arrow"
            size="lg"
            >Me contacter</Button
          >
        </div>
      </div>
    </section>

      </div>
    </main>

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Project } from '~/types/database' // Assure-toi que le chemin est correct

const db = useDatabase()
const route = useRoute()
const showContact = ref(false)
const id = String(route.params.id || '')

const { data: projectData, pending, error } = await useAsyncData<Project | null>(`project-${id}`, async () => {
  if (!id) return null
  const { data, error } = await db.projects.getById(id)
  if (error) throw createError({ statusCode: 500, statusMessage: error.message })
  return data
})

const recentProjects = computed<Project[]>(
  () => projectsData.value?.slice(0, 2) ?? [],
);

const { data: projectsData } = await useAsyncData<Project[]>(
  "projects",
  async () => {
    const { data, error } = await db.projects.getFeatured();

    if (error) {
      // keep console logging for now; consider reporting to a monitoring service later
      console.error("Error fetching featured projects:", error);
      return [];
    }

    return data ?? [];
  },
);

const project = computed(() => projectData.value)

const formatDate = (dateString: string | null) => {
  if (!dateString) return 'En cours'
  return new Date(dateString).toLocaleDateString('fr-FR', { 
    year: 'numeric', 
    month: 'short' 
  })
}
</script>

<style scoped>
/* Optionnel : pour un dégradé subtil sur le background si tu veux pimper le noir pur */
.bg-background {
  background-color: #050505;
}
.bg-surface {
  background-color: #0E0E10;
}
</style>