<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
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

            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                variant="primary"
                icon="arrow"
                size="md"
                @click="showContact = true"
                >Me contacter</Button
              >
              <a href="/pdf/Jeobran_Kombou_CV.pdf" download="Jeobran_Kombou_CV.pdf" class="inline-block" aria-label="Télécharger le CV">
                <Button variant="outline" icon="download" disabled size="md">Télécharger mon CV</Button>
              </a>
            </div>
          </div>

          <!-- Right Column - Photo -->
            <div 
              >
              <figure class="flex items-center justify-center p-8 sm:p-6">
              <picture>
                <source srcset="/img/moi.png" type="image/webp" />
                <img
                src="/img/moi.png"
                alt="Portrait professionnel de Jeobran Nathanael Kombou Tchounga"
                loading="lazy"
                decoding="async"
                class="w-full max-w-[450px] h-auto object-contain rounded-2xl"
                sizes="(min-width:1024px) 320px, 60vw"
                />
              </picture>
              <figcaption class="sr-only">
                Jeobran Nathanael Kombou Tchounga — Développeur Full‑Stack
              </figcaption>
              </figure>
            </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience Section -->
    <section class="py-20 px-4 sm:px-6">
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

    <!-- Stacks & Outils Section -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Left Column - Stacks & Outils -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-text-primary mb-8">
              Stacks & Outils
            </h2>

                      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <template v-if="techs.length === 0">
                          <p class="text-text-secondary">Aucune technologie trouvée.</p>
                        </template>
                        <template v-else>
                          <div
                            v-for="(tech, idx) in visibleTechs"
                            :key="tech"
                            class="bg-surface border border-border-light rounded-xl p-4 flex items-center justify-center hover:border-border-strong transition-all"
                          >
                            <Badge type="tech" class="text-sm">{{ tech }}</Badge>
                          </div>

                          <!-- show toggle button when there are more -->
                          <div v-if="techs.length > TECHS_VISIBLE_LIMIT" class="col-span-2 sm:col-span-3 flex justify-center mt-2">
                            <Button variant="outline" size="sm" @click="showAllTechs = !showAllTechs">
                              {{ showAllTechs ? 'Voir moins' : `+${techs.length - TECHS_VISIBLE_LIMIT} autres` }}
                            </Button>
                          </div>
                        </template>
                      </div>
          </div>

          <!-- Right Column - Contacts & Réseaux sociaux -->
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold text-text-primary mb-8">
              Contacts & Réseaux sociaux
            </h2>

            <div class="space-y-6">
              <!-- Email -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center flex-shrink-0"
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
                <a href="mailto:jeobrannathanael@gmail.com" class="text-text-secondary text-sm sm:text-base break-all" aria-label="Envoyer un email à Jeobran Nathanael">
                  jeobrannathanael@gmail.com
                </a>
              </div>

              <!-- GitHub -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center flex-shrink-0"
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
                  class="text-text-secondary text-sm sm:text-base break-all"
                  aria-label="Ouvrir le profil GitHub de Jeobran"
                >
                  github.com/jeobran69367
                </a>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center flex-shrink-0"
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
                  class="text-text-secondary text-sm sm:text-base"
                  aria-label="Ouvrir WhatsApp pour +33 7 69 10 96 26"
                >
                  +33 7 69 10 96 26
                </a>
              </div>

              <!-- LinkedIn -->
              <div class="flex items-center gap-4">
                <div
                  class="w-12 h-12 bg-surface border border-border-light rounded-xl flex items-center justify-center flex-shrink-0"
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
                  class="text-text-secondary text-sm sm:text-base break-all"
                  aria-label="Ouvrir le profil LinkedIn de Jeobran"
                >
                  linkedin.com/in/jeobran-nathanaël-kombou
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <!-- CTA Section -->
    <section class="py-20 sm:py-40 px-4 sm:px-6">
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
import { ref, computed } from "vue";
import { useAsyncData } from "nuxt/app";
import { useDatabase } from "../composables/useDatabase";

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

interface services {
  id: string;
  tech_stack?: string | string[] | null;
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

// Fetch services so we can extract tech stacks
const { data: servicesData } = await useAsyncData<services[]>(
  "services",
  async () => {
    const { data, error } = await db.services.getActive();

    if (error) {
      console.error("Error fetching services:", error);
      return [];
    }

    return data ?? [];
  }
);

const experiences = computed<Experience[]>(() => experiencesData.value ?? []);
const educations = computed<Education[]>(() => educationData.value ?? []);

// Robust extraction of techs from services' tech_stack column and deduplicate (case-insensitive)
const techs = computed<string[]>(() => {
  const seen = new Map<string, string>(); // key: lowercased tech, value: original

  const push = (raw: unknown) => {
    if (raw == null) return;
    const str = String(raw).trim();
    if (!str) return;
    const key = str.toLowerCase();
    if (!seen.has(key)) seen.set(key, str);
  };

  const parsePossibleArray = (value: any) => {
    if (value == null) return;
    // If it's already an array
    if (Array.isArray(value)) {
      value.forEach((v) => v != null && push(v));
      return;
    }

    // If it's an object (possibly JSON parsed), try to extract array-like fields
    if (typeof value === 'object') {
      // try common keys
      if (Array.isArray((value as any).tech_stack)) {
        (value as any).tech_stack.forEach((v: any) => push(v));
        return;
      }
      // fallback: stringify and try to parse below
      try {
        const s = JSON.stringify(value);
        splitAndPush(s);
        return;
      } catch (e) {
        return;
      }
    }

    // If it's a string, try to parse JSON first
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (!trimmed) return;
      // JSON array string
      if ((trimmed.startsWith('[') && trimmed.endsWith(']')) || (trimmed.startsWith('{') && trimmed.endsWith('}'))) {
        try {
          const parsed = JSON.parse(trimmed);
          if (Array.isArray(parsed)) {
            parsed.forEach((v) => push(v));
            return;
          }
          // if object, try to find array inside
          if (typeof parsed === 'object' && parsed != null) {
            if (Array.isArray((parsed as any).tech_stack)) {
              (parsed as any).tech_stack.forEach((v: any) => push(v));
              return;
            }
          }
        } catch (e) {
          // fall through to splitting
        }
      }

      // Not JSON: split by common delimiters
      splitAndPush(trimmed);
    }
  };

  const splitAndPush = (s: string) => {
    // split on comma, semicolon, pipe or newlines
    const parts = s.split(/[,;|\n]+/).map(p => p.trim()).filter(Boolean);
    parts.forEach(p => push(p));
  };

  (servicesData.value ?? []).forEach((s) => {
    const ts = (s as any).tech_stack;
    parsePossibleArray(ts);
  });

  // return in insertion order (first seen casing)
  return Array.from(seen.values());
});

const TECHS_VISIBLE_LIMIT = 6;
const showAllTechs = ref(false);
const visibleTechs = computed(() => (showAllTechs.value ? techs.value : techs.value.slice(0, TECHS_VISIBLE_LIMIT)));

// Helper functions
const formatYear = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate).getFullYear();
  const end = endDate ? new Date(endDate).getFullYear() : "En cours";
  return `${start}—${end}`;
};

const showContact = ref(false);
</script>