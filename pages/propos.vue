<template>
  <div class="min-h-screen bg-background">
    <Header @open-contact="showContact = true" />

    <!-- Hero -->
    <section class="pt-32 pb-16 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <SectionHeader eyebrow="À propos" subtitle="">
            <template #title>Un <span class="text-gradient">chef de projet</span> qui parle aussi la technique</template>
          </SectionHeader>
          <div class="space-y-4 text-text-secondary leading-relaxed">
            <p v-for="(para, i) in aboutParagraphs" :key="i" class="">{{ para }}</p>
          </div>
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
            <Button variant="primary" icon="arrow" size="md" @click="showContact = true">Me contacter</Button>
            <Button variant="outline" icon="external" size="md" @click="$router.push('/ressources')">Télécharger mes ressources</Button>
          </div>
        </div>

        <div class="flex justify-center">
          <figure class="relative">
            <div class="absolute -inset-4 rounded-[2rem] bg-accent-blue bg-opacity-10 blur-2xl"></div>
            <div class="relative w-full max-w-[420px] rounded-3xl border border-border-light bg-surface overflow-hidden p-4">
              <img src="/img/moi.png" alt="Portrait de Jeobran Nathanael Kombou" class="w-full h-auto object-cover rounded-2xl" loading="lazy" decoding="async" />
              <div class="p-4">
                <p class="font-semibold text-text-primary">{{ identity.name }}</p>
                <p class="text-sm text-text-secondary">{{ identity.role }}</p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>

    <!-- Key facts strip -->
    <section class="pb-16 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div v-for="fact in keyFacts" :key="fact.label" class="rounded-xl border border-border-light bg-surface p-4 text-center">
          <p class="text-sm font-bold text-text-primary">{{ fact.value }}</p>
          <p class="text-[11px] uppercase tracking-widest text-text-secondary/70 mt-1">{{ fact.label }}</p>
        </div>
      </div>
    </section>

    <!-- Expertise domains -->
    <section class="py-16 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Expertise" subtitle="Quatre pôles complémentaires, pour couvrir vos projets de bout en bout.">
          <template #title>Mes <span class="text-gradient">pôles d'expertise</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div v-for="domain in expertiseDomains" :key="domain.id" class="card-hover rounded-2xl border border-border-light bg-surface p-6 sm:p-8">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-xl bg-hover border border-border-light flex items-center justify-center">
                <component :is="IconComponent" v-if="IconComponent" :icon="domain.icon" class="w-6 h-6 text-accent-blue" />
                <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-accent-blue"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/></svg>
              </div>
              <h3 class="text-lg font-bold text-text-primary">{{ domain.title }}</h3>
            </div>
            <p class="text-sm text-text-secondary mb-4 leading-relaxed">{{ domain.summary }}</p>
            <ul class="space-y-2">
              <li v-for="point in domain.points" :key="point" class="flex items-start gap-2 text-sm text-text-secondary">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" class="text-accent-blue mt-0.5 flex-none"><path d="M5 10l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Parcours / expérience -->
    <section class="py-16 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Parcours" subtitle="Une trajectoire orientée pilotage de projet et technologie.">
          <template #title>Expériences <span class="text-gradient">&amp; missions</span></template>
        </SectionHeader>
        <div class="relative space-y-8 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-px before:bg-border-light">
          <div v-for="exp in experiences" :key="exp.id" class="relative pl-12">
            <span class="absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full bg-accent-blue border-4 border-background"></span>
            <div class="rounded-2xl border border-border-light bg-surface p-6 card-hover">
              <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <div>
                  <h3 class="text-lg font-bold text-text-primary">{{ exp.position }}</h3>
                  <p class="text-sm text-text-secondary">{{ exp.company_name }}</p>
                </div>
                <span class="text-sm text-text-secondary flex-none">{{ formatYear(exp.start_date, exp.end_date) }}</span>
              </div>
              <p v-if="exp.description" class="text-sm text-text-secondary leading-relaxed mb-4">{{ exp.description }}</p>
              <div class="mt-4 pt-4 border-t border-border-light">
                <p class="text-xs font-semibold uppercase tracking-widest text-text-secondary/70 mb-2">Réalisations marquantes</p>
                <ul class="space-y-1.5">
                  <li v-for="(a, i) in exp.achievements" :key="i" class="flex items-start gap-2 text-sm text-text-secondary">
                    <span class="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-none"></span>
                    <span>{{ a }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formation -->
    <section class="py-16 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-4xl mx-auto">
        <SectionHeader eyebrow="Formation" subtitle="Un socle de compétences techniques et méthodologiques.">
          <template #title>Formation <span class="text-gradient">&amp; certifications</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div v-for="edu in educations" :key="edu.id" class="card-hover rounded-2xl border border-border-light bg-surface p-6">
            <div class="flex items-start justify-between gap-3 mb-3">
              <h3 class="text-base font-bold text-text-primary">{{ edu.degree }}</h3>
              <span class="text-xs text-text-secondary flex-none">{{ formatYear(edu.start_date, edu.end_date) }}</span>
            </div>
            <p class="text-sm text-text-secondary">{{ edu.institution }}</p>
            <p class="text-sm text-text-secondary/80 mt-2">{{ edu.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="py-16 px-4 sm:px-6">
      <div class="max-w-6xl mx-auto">
        <SectionHeader eyebrow="Compétences" subtitle="Les compétences clés qui me permettent de piloter et de livrer.">
          <template #title>Compétences <span class="text-gradient">&amp; outils</span></template>
        </SectionHeader>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div v-for="group in skillGroups" :key="group.name" class="card-hover rounded-2xl border border-border-light bg-surface p-6">
            <h3 class="text-base font-bold text-text-primary mb-4">{{ group.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="s in group.items" :key="s.name" type="tech" variant="primary">{{ s.name }}</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact / réseaux -->
    <section class="py-16 px-4 sm:px-6 bg-surface bg-opacity-30">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <SectionHeader eyebrow="Contact" subtitle="Discutons de votre projet ou de votre opportunité.">
            <template #title>Restons <span class="text-gradient">en contact</span></template>
          </SectionHeader>
        </div>
        <div class="space-y-4">
          <a v-for="c in contactChannels" :key="c.label" :href="c.href" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 rounded-2xl border border-border-light bg-surface p-4 card-hover no-underline">
            <div class="w-12 h-12 rounded-xl bg-hover border border-border-light flex items-center justify-center flex-none">
              <component :is="IconComponent" v-if="IconComponent" :icon="c.icon" :style="{ color: c.color }" class="w-6 h-6" />
              <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" :class="['flex-none', c.colorClass]"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2"/></svg>
            </div>
            <div>
              <p class="font-semibold text-text-primary">{{ c.label }}</p>
              <p class="text-sm text-text-secondary break-all">{{ c.value }}</p>
            </div>
            <svg class="ml-auto text-text-secondary/60" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto bg-surface border border-border-light rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
        <div class="absolute inset-0 glow-blue opacity-30 pointer-events-none"></div>
        <div class="relative">
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary mb-4">Un projet ou une mission à me confier ?</h2>
          <p class="text-text-secondary mb-8 max-w-xl mx-auto">Je peux vous aider à cadrer, piloter et livrer des projets digitaux fiables et mesurés.</p>
          <Button variant="primary" icon="arrow" size="lg" @click="showContact = true">Me contacter</Button>
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
import SectionHeader from "~/components/SectionHeader.vue";
import Badge from "~/components/Badge.vue";
import Button from "~/components/Button.vue";
import { ref, computed, onMounted } from "vue";
import { useAsyncData } from "nuxt/app";
import { useDatabase } from "../composables/useDatabase";
import { identity, valueProposition, expertiseDomains, keyFacts } from "~/data/personal";

useHead({
  title: 'À propos — Jeobran Nathanael Kombou',
  meta: [
    {
      name: 'description',
      content:
        'Chef de projet hybride et développeur full-stack. Découvrez mon positionnement, mon parcours, mes compétences et mon expertise en gestion de projet.',
    },
  ],
})

const db = useDatabase()
const showContact = ref(false)
const IconComponent = ref<any>(null)

onMounted(async () => {
  try {
    const mod = await import('@iconify/vue')
    IconComponent.value = mod.Icon || mod.default || null
  } catch (e) {
    IconComponent.value = null
  }
})

interface Experience { id: string; position: string; company_name: string; description: string | null; achievements: string[]; start_date: string; end_date: string | null }
interface Education { id: string; degree: string; institution: string; description: string | null; start_date: string; end_date: string | null }

const { data: experiencesData } = await useAsyncData<Experience[]>('experiences', async () => {
  const { data, error } = await db.experience.getAll()
  if (error) { console.error("Error fetching experiences:", error); return [] }
  return data ?? []
})

const { data: educationData } = await useAsyncData<Education[]>('education', async () => {
  const { data, error } = await db.education.getAll()
  if (error) { console.error("Error fetching education:", error); return [] }
  return data ?? []
})

const { data: skillsData } = await useAsyncData('skills', async () => {
  const { data, error } = await db.skills.getAll()
  if (error) { console.error("Error fetching skills:", error); return [] }
  return data ?? []
})

const experiences = computed(() => experiencesData.value ?? [])
const educations = computed(() => educationData.value ?? [])

const skillGroups = computed(() => {
  const groups: Record<string, { name: string; items: { name: string }[] }> = {}
  for (const s of skillsData.value ?? []) {
    if (!groups[s.category]) groups[s.category] = { name: s.category, items: [] }
    groups[s.category].items.push({ name: s.name })
  }
  return Object.values(groups)
})

const aboutParagraphs = [
  "Je suis un chef de projet hybride : je pilote des projets digitaux de bout en bout et je maîtrise en même temps la technique (full-stack & IA). Cette double compétence me permet de comprendre les enjeux métier autant que les contraintes de développement, et de faire le lien entre les deux.",
  "Concrètement, je prends en charge le cadrage, la planification, la coordination des équipes et des parties prenantes, la gestion des risques et le suivi de l'avancement. Parce que je sais coder, je transforme des exigences business en spécifications actionnables et je parle le même langage que les développeurs.",
  "Mon objectif : livrer des projets fiables, à temps, et qui apportent une valeur mesurable. Je m'appuie sur des méthodes agiles structurées, la documentation et des indicateurs pour prendre des décisions objectives.",
]

const contactChannels = [
  { label: 'Email', value: identity.email, href: `mailto:${identity.email}`, icon: 'mdi:email-outline', color: '#3B82F6', colorClass: 'text-accent-blue' },
  { label: 'LinkedIn', value: identity.linkedinLabel, href: identity.linkedin, icon: 'mdi:linkedin', color: '#0A66C2', colorClass: 'text-[#0A66C2]' },
  { label: 'GitHub', value: identity.githubLabel, href: identity.github, icon: 'mdi:github', color: '#E5E5E5', colorClass: 'text-text-primary' },
  { label: 'WhatsApp', value: identity.phone, href: identity.whatsapp, icon: 'mdi:whatsapp', color: '#25D366', colorClass: 'text-[#25D366]' },
  { label: 'Calendly', value: 'Prendre rendez-vous', href: identity.calendly, icon: 'mdi:calendar-check-outline', color: '#3B82F6', colorClass: 'text-accent-blue' },
]

const formatYear = (startDate: string, endDate: string | null) => {
  const start = new Date(startDate).getFullYear()
  const end = endDate ? new Date(endDate).getFullYear() : "En cours"
  return `${start} — ${end}`
}
</script>
