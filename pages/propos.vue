<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div>
            <h1 class="text-5xl font-bold text-text-primary mb-6">
              Hey, je suis
              <span class="text-text-secondary block mt-2"
                >Jeobran Nathanael</span
              >
              <span class="text-text-muted">Kombou Tchounga</span>
            </h1>

            <div class="space-y-4 text-text-secondary mb-8">
              <p>
                Je suis un développeur Full-Stack passionné par la création
                d'applications web performantes, intuitives et bien structurées.
              </p>
              <p>
                J'aime transformer les idées en solutions digitales fiables,
                scalables et faciles à maintenir, de l'interface utilisateur
                jusqu'aux systèmes backend.
              </p>
              <p>
                Mon objectif : construire des expériences fluides, propres et
                efficaces, avec un code clair et une architecture solide.
              </p>
            </div>

            <div class="flex items-center gap-4">
              <Button
                variant="primary"
                icon="arrow"
                size="md"
                @click="showContact = true"
                >Me contacter</Button
              >
              <a href="../public/pdf/" download="Jeobran_Kombou_CV.pdf" class="inline-block" aria-label="Télécharger le CV">
                <Button variant="outline" icon="download" disabled size="md">Télécharger mon CV</Button>
              </a>
            </div>
          </div>

          <!-- Right Column - Image Placeholder -->
          <div
            class="relative bg-surface border border-border-light rounded-3xl p-8 flex items-center justify-center min-h-[400px]"
          >
            <div class="text-center">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                class="text-text-muted mx-auto mb-4"
              >
                <rect
                  width="120"
                  height="120"
                  fill="currentColor"
                  opacity="0.1"
                />
                <path
                  d="M60 60C71.0457 60 80 51.0457 80 40C80 28.9543 71.0457 20 60 20C48.9543 20 40 28.9543 40 40C40 51.0457 48.9543 60 60 60Z"
                  fill="currentColor"
                  opacity="0.3"
                />
                <path
                  d="M100 100C100 78.9543 82.0914 62 60 62C37.9086 62 20 78.9543 20 100"
                  fill="currentColor"
                  opacity="0.3"
                />
              </svg>
              <Badge type="availability" class="text-sm"
                >Disponible pour un appel</Badge
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience Section -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <h2 class="text-4xl font-bold text-text-primary mb-4">
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
            class="bg-surface border border-border-light rounded-xl p-6 hover:border-border-strong transition-all"
          >
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-text-primary mb-2">
                  {{ exp.position }}
                </h3>
                <p class="text-text-secondary mb-2">{{ exp.company_name }}</p>
              </div>
              <span class="text-text-secondary">{{
                formatYear(exp.start_date, exp.end_date)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="py-20 px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <div class="mb-12">
          <h2 class="text-4xl font-bold text-text-primary mb-4">
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
            class="bg-surface border border-border-light rounded-xl p-6 hover:border-border-strong transition-all"
          >
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-text-primary mb-2">
                  {{ edu.degree }}
                </h3>
                <p class="text-text-secondary mb-2">{{ edu.institution }}</p>
              </div>
              <span class="text-text-secondary">{{
                formatYear(edu.start_date, edu.end_date)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stacks & Outils Section -->
    <section class="py-20 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16">
          <!-- Left Column - Stacks & Outils -->
          <div>
            <h2 class="text-3xl font-bold text-text-primary mb-8">
              Stacks & Outils
            </h2>

            <div class="grid grid-cols-3 gap-4">
              <!-- React -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-[#61DAFB]"
                >
                  <circle cx="24" cy="24" r="4" fill="currentColor" />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="18"
                    ry="7"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="18"
                    ry="7"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    transform="rotate(60 24 24)"
                  />
                  <ellipse
                    cx="24"
                    cy="24"
                    rx="18"
                    ry="7"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    transform="rotate(120 24 24)"
                  />
                </svg>
              </div>

              <!-- JavaScript -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-[#F7DF1E]"
                >
                  <rect
                    x="8"
                    y="8"
                    width="32"
                    height="32"
                    rx="4"
                    fill="currentColor"
                  />
                  <text
                    x="24"
                    y="32"
                    text-anchor="middle"
                    font-size="24"
                    font-weight="bold"
                    fill="#0E0E10"
                  >
                    JS
                  </text>
                </svg>
              </div>

              <!-- GraphQL / Angular -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-[#E535AB]"
                >
                  <polygon
                    points="24,8 40,16 40,32 24,40 8,32 8,16"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                  <circle cx="24" cy="24" r="6" fill="currentColor" />
                </svg>
              </div>

              <!-- Vue.js -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-[#42B883]"
                >
                  <path
                    d="M8 12L24 36L40 12H32L24 24L16 12H8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 12L24 24L32 12H28L24 18L20 12H16Z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
              </div>

              <!-- Nuxt.js / Vercel -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-[#00DC82]"
                >
                  <path
                    d="M24 8L40 36H8L24 8Z"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                  />
                  <path
                    d="M24 18L32 32H16L24 18Z"
                    fill="currentColor"
                    opacity="0.5"
                  />
                </svg>
              </div>

              <!-- Next.js / N -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-text-primary"
                >
                  <rect
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                    rx="4"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <text
                    x="24"
                    y="32"
                    text-anchor="middle"
                    font-size="20"
                    font-weight="bold"
                    fill="currentColor"
                  >
                    N
                  </text>
                </svg>
              </div>

              <!-- Tailwind CSS -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-[#06B6D4]"
                >
                  <path
                    d="M24 14C20 14 17.5 16 16.5 20C18 18 19.75 17.25 21.75 17.75C22.82 18.03 23.58 18.81 24.41 19.66C25.87 21.17 27.57 23 31.5 23C35.5 23 38 21 39 17C37.5 19 35.75 19.75 33.75 19.25C32.68 18.97 31.92 18.19 31.09 17.34C29.63 15.83 27.93 14 24 14ZM16.5 23C12.5 23 10 25 9 29C10.5 27 12.25 26.25 14.25 26.75C15.32 27.03 16.08 27.81 16.91 28.66C18.37 30.17 20.07 32 24 32C28 32 30.5 30 31.5 26C30 28 28.25 28.75 26.25 28.25C25.18 27.97 24.42 27.19 23.59 26.34C22.13 24.83 20.43 23 16.5 23Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <!-- LLM / AI -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-text-primary"
                >
                  <rect
                    x="8"
                    y="8"
                    width="32"
                    height="32"
                    rx="4"
                    stroke="currentColor"
                    stroke-width="2"
                  />
                  <text
                    x="24"
                    y="32"
                    text-anchor="middle"
                    font-size="16"
                    font-weight="bold"
                    fill="currentColor"
                  >
                    LLM
                  </text>
                </svg>
              </div>

              <!-- GitHub -->
              <div
                class="bg-surface border border-border-light rounded-xl p-6 flex items-center justify-center hover:border-border-strong transition-all"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  class="text-text-primary"
                >
                  <path
                    d="M24 8C15.16 8 8 15.16 8 24C8 31.08 12.58 37.06 18.94 39.18C19.74 39.32 20.04 38.82 20.04 38.38C20.04 37.98 20.02 36.66 20.02 35.26C16 36.06 15 33.62 15 33.62C14.28 31.76 13.18 31.26 13.18 31.26C11.64 30.42 13.3 30.44 13.3 30.44C15 30.56 15.88 32.18 15.88 32.18C17.4 34.76 19.88 34.02 20.08 33.6C20.22 32.52 20.64 31.78 21.1 31.38C17.9 30.96 14.54 29.62 14.54 23.74C14.54 22.02 15.16 20.62 15.9 19.52C15.74 19.12 15.18 17.52 16.06 15.32C16.06 15.32 17.5 14.88 20 16.6C21.4 16.24 22.9 16.06 24.4 16.06C25.9 16.06 27.4 16.24 28.8 16.6C31.3 14.88 32.74 15.32 32.74 15.32C33.62 17.52 33.06 19.12 32.9 19.52C33.64 20.62 34.26 22.02 34.26 23.74C34.26 29.64 30.88 30.96 27.66 31.36C28.24 31.86 28.78 32.84 28.78 34.34C28.78 36.46 28.76 38.16 28.76 38.38C28.76 38.82 29.06 39.32 29.88 39.18C36.24 37.06 40.82 31.08 40.82 24C40.82 15.16 33.66 8 24.84 8"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Right Column - Contacts & Réseaux sociaux -->
          <div>
            <h2 class="text-3xl font-bold text-text-primary mb-8">
              Contacts & Réseaux sociaux
            </h2>

            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="text-text-primary"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <a href="mailto:jeobrannathanael@gmail.com" class="text-text-secondary" aria-label="Envoyer un email à Jeobran Nathanael">
                  jeobrannathanael@gmail.com
                </a>
              </div>

              <!-- GitHub -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="text-text-primary"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <a
                  href="https://github.com/jeobran69367"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-text-secondary"
                  aria-label="Ouvrir le profil GitHub de Jeobran"
                >
                  https://github.com/jeobran69367
                </a>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="text-[#25D366]"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <a
                  href="https://wa.me/33769109626"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-text-secondary"
                  aria-label="Ouvrir WhatsApp pour +33 7 69 10 96 26"
                >
                  +33 7 69 10 96 26
                </a>
              </div>

              <!-- LinkedIn -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="text-[#0A66C2]"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.linkedin.com/in/jeobran-nathanaël-kombou-14a563230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-text-secondary"
                  aria-label="Ouvrir le profil LinkedIn de Jeobran"
                >
                  https://www.linkedin.com/in/jeobran-nathanaël-kombou-14a563230/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
    <section class="py-40 px-6">
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
    </section>

    

    <Footer />
    <ContactModal v-model="showContact" />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import ContactModal from "~/components/ContactModal.vue";
import Footer from "~/components/Footer.vue";
import { ref } from "vue";

const db = useDatabase();

// Interfaces
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

// Fetch data from database
const { data: experiencesData } = await useAsyncData<Experience[]>(
  "experiences",
  async () => {
    const { data, error } = await db.experience.getAll();

    if (error) {
      console.error("Error fetching experiences:", error);
      return [];
    }

    return data ?? [];
  }
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
  }
);

const experiences = computed<Experience[]>(() => experiencesData.value ?? []);
const educations = computed<Education[]>(() => educationData.value ?? []);

// Helper functions
const formatYear = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate).getFullYear();
  const end = endDate ? new Date(endDate).getFullYear() : "En cours";
  return `${start}—${end}`;
};

const showContact = ref(false);
</script>