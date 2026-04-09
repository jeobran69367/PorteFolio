<template>
	<div class="min-h-screen bg-background">
		<Header @open-contact="showContact = true" />

		<main class="pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
			<div class="mb-12 text-center">
				<h1 class="text-3xl sm:text-4xl font-bold text-text-primary">Projets</h1>
				<p class="text-text-secondary mt-2">Des projets concrets, présentés avec leurs impacts clés.</p>
			</div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div v-for="project in recentProjects" :key="project.id">
                <NuxtLink :to="{ path: `/projets/view/${project.id}` }" class="block no-underline">
                  <CardProject :date="formatDate(project.end_date)" date-variant="primary">
										<template #header>
											<div class="flex items-center justify-between gap-3">
												<span
													class="inline-flex items-center rounded-full border border-border-light bg-background px-2.5 py-1 text-xs font-medium text-text-primary"
												>
													{{ project.category || 'Projet digital' }}
												</span>
												<span class="text-xs text-text-secondary">Voir le détail</span>
											</div>
										</template>

                    <template #image>
											<div v-if="project.image_urls && project.image_urls.length" class="w-full h-full overflow-hidden bg-background/40 p-2">
												<img :src="project.image_urls[0]" :alt="project.title" class="w-full h-full object-contain object-center" />
                      </div>
                      <div v-else class="w-full h-full bg-background flex items-center justify-center">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" class="text-text-muted">
                          <rect width="80" height="80" fill="currentColor" opacity="0.1" />
                          <path d="M30 35L40 45L30 55M45 50H55" stroke="currentColor" opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </template>

                    <template #title>{{ project.title }}</template>
										<template #description>{{ getProjectSummary(project) }}</template>

                    <template #technologies>
                      <Badge
                        v-for="(tech, idx) in getVisibleTechnologies(project)"
                        :key="`${project.id}-tech-${idx}`"
                        type="tech"
                        variant="primary"
                      >
                        {{ tech }}
                      </Badge>
                      <span
                        v-if="getExtraTechnologiesCount(project) > 0"
                        class="inline-flex items-center rounded-full border border-border-light bg-background px-2.5 py-1 text-xs text-text-secondary"
                      >
                        +{{ getExtraTechnologiesCount(project) }}
                      </span>
                    </template>

										<template #actions>
											<div class="w-full space-y-4">
												<div>
													<p class="text-[11px] uppercase tracking-wide text-text-secondary mb-2">Impact concret</p>
												<ul class="space-y-1.5">
													<li
														v-for="(item, idx) in getProjectHighlights(project)"
														:key="idx"
														class="text-xs sm:text-sm text-text-secondary leading-relaxed flex items-start gap-2"
													>
														<span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-text-primary shrink-0" aria-hidden="true" />
														<span class="line-clamp-1">{{ item }}</span>
													</li>
												</ul>
												</div>

												<div>
													<p class="text-[11px] uppercase tracking-wide text-text-secondary mb-2">Stack projet</p>
													<p class="text-xs sm:text-sm text-text-secondary leading-relaxed">
														{{ getTechSummary(project) }}
													</p>
												</div>
											</div>
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
  () => projectsData.value?.slice(0, 20) ?? [],
);

interface Project {
	image_urls: string[] | null
	id: string
	title: string
	description: string
	end_date: string | null
	technologies: string[]
	objectif: string[]
	solution: string[]
	image_url?: string | null
	project_url?: string | null
	category?: string | null
}

const TECH_VISIBLE_LIMIT = 5

const { data: projectsData } = await useAsyncData<Project[]>('all-projects', async () => {
	const { data, error } = await db.projects.getAll()
	if (error) {
		console.error('Error loading projects', error)
		return []
	}
	return data ?? []
})

const formatDate = (dateString: string | null) => {
	if (!dateString) return 'En cours'
	const d = new Date(dateString)
	return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })
}

const getProjectSummary = (project: Project) => {
	const firstSolution = project.solution?.find((item) => item?.trim())
	if (firstSolution) return firstSolution

	const firstGoal = project.objectif?.find((item) => item?.trim())
	if (firstGoal) return firstGoal

	return project.description
}

const getProjectHighlights = (project: Project) => {
	const candidates = [...(project.solution ?? []), ...(project.objectif ?? [])]
		.map((item) => item.trim())
		.filter((item) => item.length > 0)

	if (!candidates.length) return [project.description]

	return candidates.slice(0, 2)
}

const normalizeTechnologies = (project: Project) =>
	(project.technologies ?? [])
		.map((item) => item?.trim())
		.filter((item): item is string => Boolean(item))

const getVisibleTechnologies = (project: Project) =>
	normalizeTechnologies(project).slice(0, TECH_VISIBLE_LIMIT)

const getExtraTechnologiesCount = (project: Project) =>
	Math.max(normalizeTechnologies(project).length - TECH_VISIBLE_LIMIT, 0)

const getTechSummary = (project: Project) => {
	const techs = normalizeTechnologies(project)
	if (!techs.length) return 'Stack non renseignée.'
	if (techs.length <= 3) return `Technologies utilisées: ${techs.join(', ')}.`

	const core = techs.slice(0, 3).join(', ')
	const remaining = techs.length - 3
	return `Socle principal: ${core} (+${remaining} autre${remaining > 1 ? 's' : ''}).`
}

const showContact = ref(false)
</script>

