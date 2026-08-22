/**
 * Barrel de contenus mock/démonstration.
 *
 * Toutes les sources de données sont regroupées ici, ce qui permet à
 * `composables/useDatabase.ts` d'importer d'un seul endroit. Les données sont
 * également exportées pour être utilisées directement sur les pages statiques
 * (SEO) et pour le rendu hors-ligne.
 */
export {
  identity,
  valueProposition,
  problemsSolved,
  expertiseDomains,
  strengths,
  process,
  keyFacts,
} from './personal'

export { mockServices, type ServiceDetail } from './services'
export { mockProjects, type CaseStudy, type KpiItem } from './projects'
export { mockExperience, mockEducation, mockSkills } from './experience'
export { mockFeatures, buildMockFeaturesFor } from './features'
