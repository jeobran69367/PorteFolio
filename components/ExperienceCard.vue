<template>
  <article
    class="group bg-surface border border-border-light rounded-2xl transition-all duration-300 hover:border-border-strong hover:shadow-md hover:shadow-black/5"
    :class="isOpen ? 'border-border-strong shadow-md shadow-black/5 bg-gradient-to-br from-surface to-surface/95' : 'hover:bg-gradient-to-br hover:from-surface hover:to-surface/95'"
  >
    <button
      type="button"
      class="w-full p-5 sm:p-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-text-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl"
      :aria-expanded="isOpen"
      @click="isOpen = !isOpen"
    >
      <div class="flex flex-col gap-5 sm:gap-4">
        <!-- En-tête: Poste et entreprise -->
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0 flex-1">
            <h3 class="text-lg sm:text-2xl font-bold text-text-primary leading-snug">
              {{ experience.position }}
            </h3>
            <p class="text-sm sm:text-base text-text-secondary mt-2 font-medium">{{ experience.company_name }}</p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <span
              v-if="experience.is_current"
              class="inline-flex items-center rounded-full border border-green-200/50 bg-green-50/30 px-3 py-1.5 text-xs font-semibold text-green-700 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-300"
            >
              <span class="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />
              En cours
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              class="text-text-secondary transition-transform duration-300 group-hover:text-text-primary"
              :class="isOpen ? 'rotate-180' : ''"
              aria-hidden="true"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-text-secondary">
          <span class="inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2" />
              <path d="M8 3V7M16 3V7M3 11H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            {{ period }}
          </span>

          <span v-if="experience.location" class="inline-flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 21C15.5 17.5 19 14.4183 19 10.5C19 6.63401 15.866 3.5 12 3.5C8.13401 3.5 5 6.63401 5 10.5C5 14.4183 8.5 17.5 12 21Z"
                stroke="currentColor"
                stroke-width="2"
              />
              <circle cx="12" cy="10.5" r="2.5" stroke="currentColor" stroke-width="2" />
            </svg>
            {{ experience.location }}
          </span>

          <span
            v-if="workModeLabel"
            class="inline-flex items-center rounded-full border border-border-light bg-background px-2 py-0.5 text-[11px] sm:text-xs text-text-secondary"
          >
            {{ workModeLabel }}
          </span>
        </div>

        <div v-if="cleanedTechnologies.length" class="flex flex-wrap gap-2">
          <span
            v-for="(tech, idx) in cleanedTechnologies"
            :key="`tech-${idx}`"
            class="inline-flex items-center rounded-full border border-border-light bg-background px-2.5 py-1 text-[11px] sm:text-xs font-medium text-text-primary"
          >
            {{ tech }}
          </span>
        </div>

        <div v-if="highlightAchievements.length" class="bg-background rounded-lg border border-border-light p-3 sm:p-4">
          <p class="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-text-primary mb-2">
            Impact concret
          </p>
          <ul class="space-y-1.5">
            <li
              v-for="(achievement, idx) in highlightAchievements"
              :key="`highlight-${idx}`"
              class="text-text-secondary text-sm leading-relaxed flex items-start gap-2"
            >
              <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-text-primary shrink-0" aria-hidden="true" />
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>
      </div>
    </button>

    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-1"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div v-if="isOpen" class="px-4 pb-5 sm:px-6 sm:pb-6">
        <div class="h-px w-full bg-border-light mb-4" />

        <p v-if="experience.description" class="text-text-secondary leading-relaxed mb-4">
          {{ experience.description }}
        </p>

        <div v-if="detailedAchievements.length" class="bg-background rounded-lg border border-border-light p-3 sm:p-4">
          <p class="text-text-primary text-sm font-semibold mb-3">Détails des réalisations</p>
          <ul class="space-y-2">
            <li
              v-for="(achievement, idx) in detailedAchievements"
              :key="idx"
              class="text-text-secondary text-sm leading-relaxed flex items-start gap-2"
            >
              <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-text-primary shrink-0" aria-hidden="true" />
              <span>{{ achievement }}</span>
            </li>
          </ul>
        </div>

        <div v-if="cleanedResponsibilities.length" class="bg-background rounded-lg border border-border-light p-3 sm:p-4 mt-4">
          <p class="text-text-primary text-sm font-semibold mb-3">Responsabilités clés</p>
          <ul class="space-y-2">
            <li
              v-for="(responsibility, idx) in cleanedResponsibilities"
              :key="`resp-${idx}`"
              class="text-text-secondary text-sm leading-relaxed flex items-start gap-2"
            >
              <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-text-primary shrink-0" aria-hidden="true" />
              <span>{{ responsibility }}</span>
            </li>
          </ul>
        </div>

        <div v-if="cleanedProjectLinks.length" class="mt-4">
          <p class="text-text-primary text-sm font-semibold mb-3">Projets associés</p>
          <div class="flex flex-wrap gap-2">
            <a
              v-for="(link, idx) in cleanedProjectLinks"
              :key="`project-link-${idx}`"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-lg border border-border-light px-3 py-1.5 text-xs sm:text-sm text-text-primary hover:border-border-strong transition-colors"
            >
              <span>{{ link.label }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

interface ExperienceProjectLink {
  label: string;
  url: string;
  type?: string;
}

interface Experience {
  id: string;
  position: string;
  company_name: string;
  description: string | null;
  location: string | null;
  achievements: string[];
  technologies?: string[] | null;
  responsibilities?: string[] | null;
  project_links?: ExperienceProjectLink[] | null;
  work_mode?: string | null;
  is_current: boolean;
}

const props = defineProps<{
  experience: Experience;
  period: string;
}>();

const isOpen = ref(false);

const toCleanStringArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => String(item ?? "").trim())
    .filter((item) => item.length > 0);
};

const cleanedAchievements = computed(() =>
  toCleanStringArray(props.experience.achievements),
);

const cleanedResponsibilities = computed(() =>
  toCleanStringArray(props.experience.responsibilities),
);

const cleanedTechnologies = computed(() =>
  toCleanStringArray(props.experience.technologies),
);

const workModeLabel = computed(() => {
  const mode = (props.experience.work_mode ?? "").toLowerCase();
  if (!mode) return "";
  if (mode === "remote") return "Remote";
  if (mode === "hybrid") return "Hybride";
  if (mode === "onsite") return "Sur site";
  return props.experience.work_mode ?? "";
});

const cleanedProjectLinks = computed(() => {
  const links = props.experience.project_links;
  if (!Array.isArray(links)) return [];

  return links
    .map((link) => {
      if (!link || typeof link !== "object") return null;
      const label = String(link.label ?? "").trim();
      const url = String(link.url ?? "").trim();
      if (!label || !url) return null;
      return { label, url };
    })
    .filter((link): link is { label: string; url: string } => Boolean(link));
});

const highlightAchievements = computed(() => cleanedAchievements.value.slice(0, 2));

const detailedAchievements = computed(() => cleanedAchievements.value.slice(2));
</script>