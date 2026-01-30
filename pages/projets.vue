<template>
	<div class="min-h-screen bg-background">
		<Header @open-contact="showContact = true" />

		<main class="pt-28 pb-16 px-6 max-w-7xl mx-auto">
			<div class="mb-12 text-center">
				<h1 class="text-4xl font-bold text-text-primary">Projets</h1>
				<p class="text-text-secondary mt-2">Une galerie de projets récents — cliquez pour en savoir plus.</p>
			</div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div v-for="project in recentProjects" :key="project.id">
                <NuxtLink :to="`/projets/${project.id}`" class="block no-underline">
                  <CardProject :date="formatDate(project.end_date)" date-variant="primary">
                    <template #image>
                      <div class="w-full h-full bg-background flex items-center justify-center">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" class="text-text-muted">
                          <rect width="80" height="80" fill="currentColor" opacity="0.1" />
                          <path d="M30 35L40 45L30 55M45 50H55" stroke="currentColor" opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </template>

                    <template #title>{{ project.title }}</template>
                    <template #description>{{ project.description }}</template>

                    <template #technologies>
                      <Badge v-for="(tech, idx) in project.technologies.slice(0, 3)" :key="idx" type="tech" variant="primary">{{ tech }}</Badge>
                    </template>
                  </CardProject>
                </NuxtLink>
              </div>
            </div>
			
		</main>

		<Footer />
		<ContactModal v-model="showContact" />
	</div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import CardProject from '~/components/CardProject.vue'
import Badge from '~/components/Badge.vue'
import ContactModal from '~/components/ContactModal.vue'
import { ref } from 'vue'

const db = useDatabase()

const recentProjects = computed<Project[]>(
  () => projectsData.value?.slice(0, 4) ?? [],
);

interface Project {
	id: string
	title: string
	description: string
	end_date: string | null
	technologies: string[]
	image_url?: string | null
	project_url?: string | null
	category?: string | null
}

const { data: projectsData } = await useAsyncData<Project[]>('all-projects', async () => {
	const { data, error } = await db.projects.getAll()
	if (error) {
		console.error('Error loading projects', error)
		return []
	}
	return data ?? []
})

const projects = computed(() => projectsData.value ?? [])

const formatDate = (dateString: string | null) => {
	if (!dateString) return 'En cours'
	const d = new Date(dateString)
	return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })
}

const showContact = ref(false)
</script>

