<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <!-- Hero Section -->
    <section id="accueil" class="pt-32 pb-20 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col items-center text-center mb-12">
          <!-- Profile Image Placeholder -->
            <div
            class="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-surface border-4 border-border-light mb-6 sm:mb-8 flex items-center justify-center overflow-hidden"
            >
            <img
              src="/img/moi.png"
              srcset="/img/moi.png"
              sizes="(min-width: 768px) 224px, (min-width: 640px) 192px, 160px"
              width="224"
              height="224"
              alt="Photo de Jeobran Nathanael"
              class="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
            </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4 px-4">
            Hey, je suis
            <span class="text-text-secondary block mt-1">Jeobran Nathanael Kombou</span>
          </h1>

          <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
              <span ref="typedEl"></span>
            </h2>

            <!-- Overlapping tech badges matching design -->
            <div class="flex items-center -space-x-4">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-md transform -rotate-6 bg-center bg-no-repeat bg-contain"
                style="background-image: url(&quot;/img/code.png&quot;)"
              ></div>
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-md transform rotate-2 bg-center bg-no-repeat bg-contain"
                style="background-image: url(&quot;/img/ia.png&quot;)"
              ></div>
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-md transform rotate-6 bg-center bg-no-repeat bg-contain"
                style="background-image: url(&quot;/img/po.png&quot;)"
              ></div>
            </div>
          </div>

          <p class="text-base sm:text-lg text-text-secondary mb-8 max-w-2xl px-4">
            Construire, encadrer et innover : je mets la technologie au service
            de vos projets pour créer des solutions fiables et performantes.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 px-4">
            <Button
              variant="primary"
              icon="arrow"
              size="md"
              @click="showContact = true"
              >Me contacter</Button
            >
            <Badge type="availability" class="text-lg sm:text-sm">
              Disponible pour un appel
            </Badge>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience Section -->
    <section id="apropos" class="py-20 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Expériences professionnelles
          </h2>
          <p class="text-text-secondary">
            Un parcours construit autour de la création de solutions digitales
            simples, utiles et efficaces.
          </p>
        </div>

        <div class="space-y-6">
          <div
            v-for="exp in experiences"
            :key="exp.id"
            class="bg-surface border border-border-light rounded-xl p-4 sm:p-6 hover:border-border-strong transition-all"
          >
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div class="flex-1">
                <h3 class="text-lg sm:text-xl font-bold text-text-primary mb-2">
                  {{ exp.position }}
                </h3>
                <p class="text-text-secondary mb-2">{{ exp.company_name }}</p>
              </div>
              <span class="text-text-secondary text-sm sm:text-base">{{
                formatYear(exp.start_date, exp.end_date)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="py-20 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Certifications
          </h2>
          <p class="text-text-secondary">
            Voici mes certifications obtenues, qui témoignent de mon expertise
            dans la création de solutions digitales simples, utiles et
            efficaces.
          </p>
        </div>

        <div class="space-y-6">
          <div
            v-for="edu in educations"
            :key="edu.id"
            class="bg-surface border border-border-light rounded-xl p-4 sm:p-6 hover:border-border-strong transition-all"
          >
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div class="flex-1">
                <h3 class="text-lg sm:text-xl font-bold text-text-primary mb-2">
                  {{ edu.degree }}
                </h3>
                <p class="text-text-secondary mb-2">{{ edu.institution }}</p>
              </div>
              <span class="text-text-secondary text-sm sm:text-base">{{
                formatYear(edu.start_date, edu.end_date)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Projects Section -->
    <section id="projets" class="py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto">
        <!-- Card wrapper to match CTA style (slightly larger) -->
        <div
          class="bg-surface border border-border-light rounded-2xl sm:rounded-3xl pt-12 sm:pt-16 px-4 sm:px-8 lg:px-16 pb-20 sm:pb-24 relative"
        >
          <div class="mb-12 text-center">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Projets récents
            </h2>
            <p class="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto px-4">
              Une sélection de travaux réalisés qui illustrent ma façon
              d'aborder le design et la création de produits digitaux.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <CardProject
              v-for="project in recentProjects"
              :date="formatDate(project.end_date)"
              date-variant="primary"
            >
              
              <template #image>
                      <div v-if="project.image_urls && project.image_urls.length" class="w-full h-full relative overflow-hidden">
                        <!-- stacked slides: only the checked radio's image becomes visible via Tailwind peer utilities -->
                        <div
                          v-for="(url, idx) in project.image_urls"
                          :key="idx"
                          class="absolute inset-0"
                        >
                          <input
                            :id="`p-${project.id}-img-${idx}`"
                            :name="`p-${project.id}-carousel`"
                            type="radio"
                            class="peer sr-only"
                            :checked="idx === 0"
                          />
                          <img
                            :src="url"
                            :alt="project.title"
                            class="absolute inset-0 w-full h-full object-cover opacity-0 peer-checked:opacity-100 transition-opacity duration-500"
                          />
                        </div>

                        <!-- dots controls -->
                        <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                          <label
                            v-for="(url, idx) in project.image_urls"
                            :key="'dot-' + idx"
                            :for="`p-${project.id}-img-${idx}`"
                            class="w-3 h-3 rounded-full bg-white bg-opacity-40 hover:bg-opacity-80 cursor-pointer ring-1 ring-white"
                          ></label>
                        </div>
                      </div>

                      <div v-else class="w-full h-full bg-background flex items-center justify-center">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" class="text-text-muted">
                          <rect width="80" height="80" fill="currentColor" opacity="0.1" />
                          <path d="M30 35L40 45L30 55M45 50H55" stroke="currentColor" opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
            class="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 z-30"
          >
            <Button variant="primary" icon="arrow" size="md" @click="$router.push('/projets')"
              >Voir d'autres projets</Button
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Des services techniques pensés
          </h2>
          <h3 class="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
            pour des projets solides et évolutifs
          </h3>
          <p class="text-text-secondary max-w-3xl mx-auto px-4">
            Du développement à la gestion de projet, j'accompagne les équipes et
            les entreprises dans la conception, la mise en œuvre et
            l'optimisation de solutions numériques.
          </p>

          <div class="flex justify-center mt-8"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div
            v-for="service in services"
            :key="service.id"
            class="bg-surface border border-border-light rounded-xl p-6 sm:p-8 hover:border-border-strong transition-all group"
          >
            <div
              class="w-16 h-16 bg-hover border border-border-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                class="text-text-primary"
              >
                <rect
                  x="8"
                  y="8"
                  width="16"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />
                <path
                  d="M12 14H20M12 18H18"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <h3 class="text-xl font-bold text-text-primary mb-4">
              {{ service.title }}
            </h3>
            <p class="text-text-secondary mb-6 text-sm leading-relaxed">
              {{ service.description }}
            </p>

            <div class="space-y-3">
              <div
                v-for="(solution, idx) in service.solutions.slice(0, 3)"
                :key="idx"
                class="flex items-start gap-3"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  class="text-success mt-0.5 flex-shrink-0"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <path
                    d="M6 10L9 13L14 8"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="text-text-secondary text-sm">{{ solution }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <div
          class="bg-surface border border-border-light rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
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

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import ContactModal from "~/components/ContactModal.vue";
import Footer from "~/components/Footer.vue";
import { ref, onMounted, onUnmounted, computed } from "vue";
import Typed from "typed.js"
import { useAsyncData } from "nuxt/app";
import { useDatabase } from "../composables/useDatabase";

const db = useDatabase();
const typedEl = ref<HTMLElement | null>(null)
let typed: Typed

onMounted(() => {
  typed = new Typed(typedEl.value!, {
    strings: [
      "Développeur Full-Stack",
      "Développeur IA",
      "Product Owner",
      "Scrum Master",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1200,
    loop: true,
    smartBackspace: true,
  })
})

onUnmounted(() => {
  typed.destroy()
})


// align IDs with Supabase UUIDs (string)
interface Experience {
  id: string;
  position: string;
  company_name: string;
  start_date: string;
  end_date: string | null;
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  start_date: string;
  end_date: string | null;
}

interface Project {
  [x: string]:
  /// <reference types="../../../../../.vscode/extensions/vue.volar-3.2.4/types/template-helpers.d.ts" />
  /// <reference types="../../../../../.vscode/extensions/vue.volar-3.2.4/types/props-fallback.d.ts" />
  any;
  id: string;
  title: string;
  description: string;
  end_date: string | null;
  technologies: string[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  solutions: string[];
}

// Fetch data from database using Nuxt's useAsyncData so it's SSR-friendly
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

const { data: experiencesData } = await useAsyncData<Experience[]>(
  "experiences",
  async () => {
    const { data, error } = await db.experience.getAll();

    if (error) {
      console.error("Error fetching experiences:", error);
      return [];
    }

    return data ?? [];
  },
);

const { data: educationData } = await useAsyncData<Education[]>(
  "education",
  async () => {
    const { data, error } = await db.education.getAll();

    if (error) {
      console.error("Error fetching education:", error);
      return [];
    }

    return data ?? [];
  },
);

const { data: servicesData } = await useAsyncData<Service[]>(
  "services",
  async () => {
    // use getActive to fetch all services with status 'active' (not only featured)
    const { data, error } = await db.services.getActive();

    if (error) {
      console.error("Error fetching services:", error);
      return [];
    }

    return data ?? [];
  },
);

const recentProjects = computed<Project[]>(
  () => projectsData.value?.slice(0, 4) ?? [],
);

const experiences = computed<Experience[]>(() => experiencesData.value ?? []);

const educations = computed<Education[]>(() => educationData.value ?? []);

const services = computed<Service[]>(() => servicesData.value ?? []);

// Helper functions
const formatDate = (dateString: string | null) => {
  if (!dateString) return "En cours";
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", { year: "numeric", month: "short" });
};

const formatYear = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate).getFullYear();
  const end = endDate ? new Date(endDate).getFullYear() : "En cours";
  return `${start} — ${end}`;
};

const showContact = ref(false);
</script>
