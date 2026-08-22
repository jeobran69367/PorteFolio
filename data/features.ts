import type { Feature } from '../types/database'

/**
 * Features — listes modulaires utilisées sur la page Services
 * (colonnes "Problèmes / Solutions / Bénéfices" par service).
 */
export const mockFeatures: Feature[] = []

// Features renseignées via le backend (Supabase) quand il est configuré.
// En mode démo (mock), la page services s'appuie directement sur les champs
// détaillés du modèle `ServiceDetail` (need / deliverables / benefits / when),
// qui sont plus riches et cohérents avec le positionnement chef de projet.
export function buildMockFeaturesFor(serviceId: string, need: string[], solutions: string[], benefits: string[]): Feature[] {
  const section = serviceId
  const mk = (column: string, items: string[]): Feature[] =>
    items.map((content, i) => ({
      id: `${serviceId}-${column}-${i}`,
      service_id: serviceId,
      section,
      feature_column: column,
      content,
      italic: false,
      order_index: i,
      created_at: '2025-01-01T00:00:00.000Z',
      updated_at: '2025-01-01T00:00:00.000Z',
    }))
  return [...mk('problems', need), ...mk('solutions', solutions), ...mk('benefits', benefits)]
}
