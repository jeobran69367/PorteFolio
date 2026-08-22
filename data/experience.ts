import type { Experience, Education, Skill } from '../types/database'

/**
 * Expérience, formation et compétences.
 *
 * Conformément à la consigne : aucune entreprise, école ou chiffre n'a été inventé.
 * Les champs « À préciser » signalent les informations que seul le propriétaire
 * connaît et qu'il pourra compléter. Les compétences et la démarche sont décrites
 * de manière professionnelle et factuelle.
 */

export const mockExperience: Experience[] = [
  {
    id: 'exp-cdp-tech',
    company_name: 'Entreprise / mission — [À préciser]',
    position: 'Chef de projet & Développeur Full-Stack',
    description:
      "Pilotage de projets web et IA de bout en bout : cadrage, planification, coordination des équipes et développement. Interface entre les besoins métier et la technique.",
    start_date: '2024-09-01',
    end_date: null,
    is_current: true,
    location: 'France',
    company_url: '',
    logo_url: null,
    achievements: [
      'Cadrage et pilotage de projets digitaux de l\'idée à la livraison',
      'Coordination entre les parties prenantes (métier, design, technique)',
      'Mise en place d\'une méthode agile (sprints, rituels, suivi d\'avancement)',
      'Développement d\'applications web (frontend + backend) et de solutions d\'IA',
    ],
    order_index: 1,
    created_at: '2024-09-01T00:00:00.000Z',
    updated_at: '2024-09-01T00:00:00.000Z',
  },
  {
    id: 'exp-dev-front',
    company_name: 'Entreprise / mission — [À préciser]',
    position: 'Développeur Front-end & contributeur produit',
    description:
      "Développement d'interfaces utilisateur réactives et collaboration avec les équipes design et produit sur la mise en place de fonctionnalités.",
    start_date: '2023-01-01',
    end_date: '2024-08-01',
    is_current: false,
    location: 'Remote',
    company_url: '',
    logo_url: null,
    achievements: [
      'Conception d\'interfaces utilisateur modernes et responsive',
      'Collaboration avec le design et le produit sur les parcours',
      'Contribution à la définition et à la priorisation des fonctionnalités',
      'Amélioration de la qualité et de la maintenabilité du code',
    ],
    order_index: 2,
    created_at: '2023-01-01T00:00:00.000Z',
    updated_at: '2024-08-01T00:00:00.000Z',
  },
]

export const mockEducation: Education[] = [
  {
    id: 'edu-1',
    institution: 'Formation supérieure — [À préciser]',
    degree: "Titre professionnel / RNCP en développement web (niveau bac+3/4)",
    field_of_study: 'Développement web & mobilité',
    description:
      'Formation accréditée couvrant l\'ingénierie logicielle, le développement web, les bases de données et la gestion de projet informatique.',
    start_date: '2022-09-01',
    end_date: '2025-06-01',
    is_current: false,
    location: 'France',
    grade: null,
    logo_url: null,
    order_index: 1,
    created_at: '2022-09-01T00:00:00.000Z',
    updated_at: '2025-06-01T00:00:00.000Z',
  },
]

export const mockSkills: Skill[] = [
  // Pilotage de projet
  { id: 'sk-1', name: 'Cadrage de projet', category: 'Project Management', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 1, created_at: '', updated_at: '' },
  { id: 'sk-2', name: 'Planification', category: 'Project Management', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 2, created_at: '', updated_at: '' },
  { id: 'sk-3', name: 'Coordination d\'équipe', category: 'Project Management', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 3, created_at: '', updated_at: '' },
  { id: 'sk-4', name: 'Gestion des risques', category: 'Project Management', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 4, created_at: '', updated_at: '' },
  { id: 'sk-5', name: 'Reporting & KPI', category: 'Project Management', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 5, created_at: '', updated_at: '' },
  // Méthodes agiles
  { id: 'sk-6', name: 'Scrum', category: 'Méthodes agiles', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 6, created_at: '', updated_at: '' },
  { id: 'sk-7', name: 'Kanban', category: 'Méthodes agiles', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 7, created_at: '', updated_at: '' },
  { id: 'sk-8', name: 'Product Owner', category: 'Méthodes agiles', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 8, created_at: '', updated_at: '' },
  // Frontend
  { id: 'sk-9', name: 'Vue.js', category: 'Frontend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 9, created_at: '', updated_at: '' },
  { id: 'sk-10', name: 'Nuxt', category: 'Frontend', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 10, created_at: '', updated_at: '' },
  { id: 'sk-11', name: 'TypeScript', category: 'Frontend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 11, created_at: '', updated_at: '' },
  { id: 'sk-12', name: 'React', category: 'Frontend', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 12, created_at: '', updated_at: '' },
  { id: 'sk-13', name: 'TailwindCSS', category: 'Frontend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 13, created_at: '', updated_at: '' },
  // Backend
  { id: 'sk-14', name: 'Node.js', category: 'Backend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 14, created_at: '', updated_at: '' },
  { id: 'sk-15', name: 'Python', category: 'Backend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 15, created_at: '', updated_at: '' },
  { id: 'sk-16', name: 'Supabase', category: 'Backend', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 16, created_at: '', updated_at: '' },
  { id: 'sk-17', name: 'PostgreSQL', category: 'Backend', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 17, created_at: '', updated_at: '' },
  // IA
  { id: 'sk-18', name: 'LangChain', category: 'IA', proficiency_level: 3, years_of_experience: 1, icon_url: null, order_index: 18, created_at: '', updated_at: '' },
  { id: 'sk-19', name: 'OpenAI / Claude API', category: 'IA', proficiency_level: 3, years_of_experience: 1, icon_url: null, order_index: 19, created_at: '', updated_at: '' },
  // Outils
  { id: 'sk-20', name: 'Docker', category: 'Outils', proficiency_level: 3, years_of_experience: 2, icon_url: null, order_index: 20, created_at: '', updated_at: '' },
  { id: 'sk-21', name: 'Git', category: 'Outils', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 21, created_at: '', updated_at: '' },
]
