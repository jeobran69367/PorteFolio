<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-background bg-opacity-80 backdrop-blur-sm border-b border-border-light">
      <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-text-primary">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-xl font-bold text-text-primary">Jeobran k</span>
        </div>
        
        <div class="flex items-center gap-8">
          <a href="#accueil" class="text-text-secondary hover:text-text-primary transition-colors">Accueil</a>
          <a href="#apropos" class="text-text-secondary hover:text-text-primary transition-colors">A propos</a>
          <a href="#projets" class="text-text-secondary hover:text-text-primary transition-colors">Projets</a>
          <a href="#services" class="text-text-secondary hover:text-text-primary transition-colors">Services</a>
          <Button variant="primary" icon="arrow" size="sm">Me contacter</Button>
          
          <!-- Theme toggle -->
          <button class="p-2 hover:bg-hover rounded-lg transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-text-primary">
              <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="2"/>
              <path d="M10 2V4M10 16V18M18 10H16M4 10H2M15.5 4.5L14 6M6 14L4.5 15.5M15.5 15.5L14 14M6 6L4.5 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="accueil" class="pt-32 pb-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col items-center text-center mb-12">
          <!-- Profile Image Placeholder -->
          <div class="w-32 h-32 rounded-full bg-surface border-4 border-border-light mb-8 flex items-center justify-center overflow-hidden">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" class="text-text-muted">
              <rect width="64" height="64" fill="currentColor" opacity="0.1"/>
              <path d="M32 32C37.5228 32 42 27.5228 42 22C42 16.4772 37.5228 12 32 12C26.4772 12 22 16.4772 22 22C22 27.5228 26.4772 32 32 32Z" fill="currentColor" opacity="0.3"/>
              <path d="M52 52C52 42.0589 42.9411 34 32 34C21.0589 34 12 42.0589 12 52" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          
          <h1 class="text-5xl font-bold text-text-primary mb-4">
            Hey, je suis <span class="text-text-secondary">Jeobran Kombou</span>
          </h1>
          
          <div class="flex items-center gap-4 mb-6">
            <h2 class="text-4xl font-bold text-text-primary">Développeur Full-Stack</h2>
            <div class="flex gap-2">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-accent-blue">
                <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M12 16L14 18L20 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-text-primary">
                <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M12 14H20M12 18H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-accent-yellow">
                <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <circle cx="16" cy="16" r="3" fill="currentColor"/>
              </svg>
            </div>
          </div>
          
          <p class="text-lg text-text-secondary mb-8 max-w-2xl">
            Construire, encadrer et innover : je mets la technologie au service de vos projets pour créer des solutions fiables et performantes.
          </p>
          
          <div class="flex items-center gap-4">
            <Button variant="primary" icon="arrow" size="md">Me contacter</Button>
            <Badge type="availability">Disponible pour un appel</Badge>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience Section -->
    <section id="apropos" class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Expériences professionnelles</h2>
          <p class="text-text-secondary">
            Un parcours construit autour de la création de solutions digitales simples, utiles et efficaces.
          </p>
        </div>
        
        <div class="space-y-6">
          <div v-for="exp in experiences" :key="exp.id" class="bg-surface border border-border-light rounded-xl p-6 hover:border-border-strong transition-all">
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-text-primary mb-2">{{ exp.position }}</h3>
                <p class="text-text-secondary mb-2">{{ exp.company_name }}</p>
              </div>
              <span class="text-text-secondary">{{ formatYear(exp.start_date, exp.end_date) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="py-20 px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Certifications</h2>
          <p class="text-text-secondary">
            Voici mes certifications obtenues, qui témoignent de mon expertise dans la création de solutions digitales simples, utiles et efficaces.
          </p>
        </div>
        
        <div class="space-y-6">
          <div v-for="edu in education" :key="edu.id" class="bg-surface border border-border-light rounded-xl p-6 hover:border-border-strong transition-all">
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-text-primary mb-2">{{ edu.degree }}</h3>
                <p class="text-text-secondary mb-2">{{ edu.institution }}</p>
              </div>
              <span class="text-text-secondary">{{ formatYear(edu.start_date, edu.end_date) }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Section -->
    <section id="projets" class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12 text-center">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Projets récents</h2>
          <p class="text-text-secondary max-w-2xl mx-auto">
            Une sélection de travaux réalisés qui illustrent ma façon d'aborder le design et la création de produits digitaux.
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
              <div class="w-full h-full bg-background flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" class="text-text-muted">
                  <rect width="80" height="80" fill="currentColor" opacity="0.1"/>
                  <path d="M30 35L40 45L30 55M45 50H55" stroke="currentColor" opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
        
        <div class="text-center">
          <Button variant="outline" icon="arrow">Voir d'autres projets</Button>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12 text-center">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Des services techniques pensés</h2>
          <h3 class="text-3xl font-bold text-text-primary mb-4">pour des projets solides et évolutifs</h3>
          <p class="text-text-secondary max-w-3xl mx-auto">
            Du développement à la gestion de projet, j'accompagne les équipes et les entreprises dans la conception, la mise en œuvre et l'optimisation de solutions numériques.
          </p>
          
          <div class="flex justify-center mt-8">
            <div class="w-16 h-16 rounded-full bg-accent-blue bg-opacity-20 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-accent-blue">
                <path d="M16 4C9.4 4 4 9.4 4 16C4 22.6 9.4 28 16 28C22.6 28 28 22.6 28 16C28 9.4 22.6 4 16 4Z" stroke="currentColor" stroke-width="2"/>
                <path d="M16 12V16L19 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            v-for="service in services" 
            :key="service.id"
            class="bg-surface border border-border-light rounded-xl p-8 hover:border-border-strong transition-all group"
          >
            <div class="w-16 h-16 bg-hover border border-border-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="text-text-primary">
                <rect x="8" y="8" width="16" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M12 14H20M12 18H18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            
            <h3 class="text-xl font-bold text-text-primary mb-4">{{ service.title }}</h3>
            <p class="text-text-secondary mb-6 text-sm leading-relaxed">{{ service.description }}</p>
            
            <div class="space-y-3">
              <div v-for="(solution, idx) in service.solutions.slice(0, 3)" :key="idx" class="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="text-success mt-0.5 flex-shrink-0">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
                  <path d="M6 10L9 13L14 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-text-secondary text-sm">{{ solution }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6">
      <div class="max-w-4xl mx-auto">
        <div class="bg-surface border border-border-light rounded-3xl p-12 text-center">
          <h2 class="text-4xl font-bold text-text-primary mb-4">Travaillons ensemble</h2>
          <p class="text-text-secondary mb-8">
            Disponible pour projets, missions et collaborations.
          </p>
          <Button variant="primary" icon="arrow" size="lg">Me contacter</Button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-border-light py-12 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="flex justify-between items-center mb-8">
          <div class="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-text-primary">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="text-xl font-bold text-text-primary">Jeobran k</span>
          </div>
          
          <div class="flex items-center gap-8">
            <a href="#accueil" class="text-text-secondary hover:text-text-primary transition-colors">Accueil</a>
            <a href="#apropos" class="text-text-secondary hover:text-text-primary transition-colors">A propos</a>
            <a href="#projets" class="text-text-secondary hover:text-text-primary transition-colors">Projets</a>
          </div>
        </div>
        
        <div class="text-center text-text-secondary text-sm">
          <p>Designé Par Romaric Njollo et développé par Jeobran Kombou</p>
        </div>
        
        <!-- Large background text -->
        <div class="mt-12 overflow-hidden">
          <div class="text-[180px] font-bold text-text-muted opacity-5 select-none whitespace-nowrap">
            Jeobran k
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { projects, experience, education, services } = useDatabase()

// Fetch data
const { data: projectsData } = await useAsyncData('projects', () => projects.getFeatured())
const { data: experiencesData } = await useAsyncData('experiences', () => experience.getAll())
const { data: educationData } = await useAsyncData('education', () => education.getAll())
const { data: servicesData } = await useAsyncData('services', () => services.getFeatured())

const recentProjects = computed(() => (projectsData.value?.data || []).slice(0, 4))
const experiences = computed(() => experiencesData.value?.data || [])
const education = computed(() => educationData.value?.data || [])
const services = computed(() => servicesData.value?.data || [])

// Helper functions
const formatDate = (dateString: string | null) => {
  if (!dateString) return 'En cours'
  const date = new Date(dateString)
  return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short' })
}

const formatYear = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate).getFullYear()
  const end = endDate ? new Date(endDate).getFullYear() : 'Present'
  return `${start}-${end}`
}
</script>
