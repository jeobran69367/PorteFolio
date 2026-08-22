/**
 * Mock / fallback content for the portfolio.
 *
 * When Supabase is not configured (placeholder credentials) or a request fails,
 * `useDatabase` gracefully falls back to this data so the site always renders a
 * complete, professional portfolio (useful for local development, previews and
 * demos). Every object mirrors the real table schema found in `types/database.ts`.
 */

import type {
  Project,
  Experience,
  Education,
  Service,
  Feature,
  Skill,
} from '../types/database'

/* -------------------------------------------------------------------------- */
/*  SERVICES (public + services + ressources page)                            */
/* -------------------------------------------------------------------------- */

export const mockServices: Service[] = [
  {
    id: 'svc-ia-automatisation',
    title: 'Développement IA & Automatisation',
    slug: 'ia-automatisation',
    category: 'AI & Automation',
    subtitle: "Modèles d'IA et automatisation de vos processus métier",
    description:
      "Je conçois des solutions d'intelligence artificielle et d'automatisation sur-mesure qui optimisent vos processus, réduisent vos coûts et transforment vos données en décisions stratégiques.",
    problems_addressed: [
      'Processus manuels chronophages et répétitifs',
      'Décisions peu ou pas orientées données',
      'Données métier sous-exploitées',
      'Coûts opérationnels élevés',
    ],
    solutions: [
      'IA prédictive & scoring',
      'NLP / Chatbots intelligents',
      'Workflows automatisés (RPA)',
      'APIs intelligentes (LLM, embeddings)',
      'Tableaux de bord décisionnels',
    ],
    benefits: [
      'Réduction des coûts opérationnels',
      'Gain de temps opérationnel',
      'Aide à la décision basée sur les données',
      'Fractionner la valeur de vos données',
    ],
    tech_stack: [
      'Python',
      'TensorFlow',
      'scikit-learn',
      'LangChain',
      'OpenAI / Claude API',
      'FastAPI',
      'PostgreSQL',
      'Docker',
    ],
    approach: [
      'Audit des besoins métier',
      'Conception de modèles adaptés',
      'Proof-of-Concept',
      'Intégration à votre infrastructure',
      'Formation & documentation',
    ],
    status: 'active',
    featured: true,
    order_index: 1,
    metadata: {},
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },
  {
    id: 'svc-full-stack',
    title: 'Développement Full-Stack',
    slug: 'full-stack',
    category: 'Web Development',
    subtitle: 'Frontend moderne & Backend robuste pour des apps scalables',
    description:
      "Je développe des applications web complètes, de l'interface utilisateur jusqu'au backend, avec une architecture scalable, testée et maintenable. Du MVP à la mise en production.",
    problems_addressed: [
      'Applications legacy difficiles à maintenir',
      'Performances et temps de chargement médiocres',
      "Manque de scalabilité et d'évolutivité",
      'Failles de sécurité et absence de tests',
    ],
    solutions: [
      'Frontend moderne (Vue.js, Nuxt, React)',
      'Backend robuste (Node.js, Spring Boot)',
      'APIs REST / GraphQL sécurisées',
      'Architecture microservices ou monolithe modulaire',
      'CI/CD, tests automatisés & monitoring',
    ],
    benefits: [
      'Code maintenable et testé',
      'Applications performantes',
      'Architecture évolutive',
      'Sécurité & conformité renforcées',
    ],
    tech_stack: [
      'Vue.js',
      'Nuxt',
      'React',
      'TypeScript',
      'Node.js',
      'Spring Boot',
      'PostgreSQL',
      'Supabase',
      'TailwindCSS',
      'Docker',
    ],
    approach: [
      'Architecture scalable',
      'Tests automatisés',
      'Intégration continue / déploiement',
      'Code maintenable & documenté',
      'Sécurité & authentification',
    ],
    status: 'active',
    featured: true,
    order_index: 2,
    metadata: {},
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },
  {
    id: 'svc-product-owner',
    title: 'Product Owner / Stakeholder',
    slug: 'product-owner',
    category: 'Product Management',
    subtitle: 'Vision produit & coordination des acteurs',
    description:
      "Accompagnement dans la définition de la vision produit, la coordination des équipes techniques et métier, et la gestion du backlog pour livrer la bonne valeur au bon moment.",
    problems_addressed: [
      'Manque de vision produit claire',
      "Communication difficile entre équipes tech et métier",
      'Priorisation inefficace du backlog',
      'Délais et périmètres non maîtrisés',
    ],
    solutions: [
      'Compréhension des enjeux métier',
      "Traduction des besoins en solutions techniques",
      'Collaboration équipes techniques & business',
      'Gestion & priorisation du backlog',
      'Méthodes agiles (Scrum, Kanban)',
    ],
    benefits: [
      'Vision produit alignée sur les objectifs business',
      'Meilleure communication inter-équipes',
      'Priorisation optimisée',
      'Livraison de valeur plus rapide',
    ],
    tech_stack: ['Jira', 'Notion', 'Figma', 'Miro', 'Scrum', 'Kanban'],
    approach: [
      'Gestion de backlog',
      'Rédaction de user stories',
      'Méthodes agiles (Scrum)',
      'Facilitation des cérémonies agiles',
      'Suivi de la vélocité & KPIs',
    ],
    status: 'active',
    featured: false,
    order_index: 3,
    metadata: {},
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },
]

/* -------------------------------------------------------------------------- */
/*  FEATURES (drives the grouped sections on the services page)               */
/* -------------------------------------------------------------------------- */

const sec = (section: string, feature_column: string, serviceId: string, items: string[]) =>
  items.map((content, i) => ({
    id: `${section}-${feature_column}-${i}`,
    service_id: serviceId,
    section,
    feature_column,
    content,
    italic: false,
    order_index: i,
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  }))

export const mockFeatures: Feature[] = [
  // IA & Automatisation
  ...sec('ia_automation', 'problems', 'svc-ia-automatisation', [
    'Processus manuels qui freinent votre croissance',
    'Des données accumulées mais jamais exploitées',
    'Temps passé sur des tâches répétitives à faible valeur',
    'Prise de décision intuitive, non soutenue par les données',
  ]),
  ...sec('ia_automation', 'solutions', 'svc-ia-automatisation', [
    'Assistants conversationnels & chatbots métier (LLM)',
    'Automatisation de flux (emails, CRM, reporting)',
    'Automatisation de flux de travaux via API et agents',
    'Modèles prédictifs pour anticiper la demande',
  ]),
  ...sec('ia_automation', 'benefits', 'svc-ia-automatisation', [
    'Jusqu\'à X% de temps gagné sur les tâches répétitives',
    'Décisions plus rapides et plus fiables',
    'Un ROI mesurable dès les premiers mois',
    'Une base saine pour la data-driven organisation',
  ]),

  // Full-Stack
  ...sec('full_stack', 'problems', 'svc-full-stack', [
    'Applications qui peinent à évoluer et à se maintenir',
    'Temps de chargement et expérience utilisateur dégradés',
    'Incidents et failles de sécurité récurrents',
    'Un code difficile à tester et à documenter',
  ]),
  ...sec('full_stack', 'solutions', 'svc-full-stack', [
    'Frontends modernes et réactifs (Vue / Nuxt / React)',
    'Backends robustes et APIs bien structurées',
    'Base de données relationnelle & temps réel',
    'Pipeline CI/CD, tests et monitoring intégrés',
  ]),
  ...sec('full_stack', 'benefits', 'svc-full-stack', [
    'Une expérience utilisateur fluide et moderne',
    'Une architecture qui grandit avec votre activité',
    'Une meilleure qualité de code, testé et documenté',
    'Un déploiement rapide et sans effort',
  ]),

  // Product Owner
  ...sec('product_owner', 'problems', 'svc-product-owner', [
    'Une vision produit floue ou partagée',
    'Des équipes tech et métier qui ne se comprennent pas',
    'Un backlog priorisé au hasard',
    'Des livraisons en retard ou hors périmètre',
  ]),
  ...sec('product_owner', 'solutions', 'svc-product-owner', [
    'Ateliers de cadrage et définition de la vision',
    'User stories claires et acceptables',
    'Gestion et priorisation du backlog produit',
    'Facilitation des cérémonies agiles',
  ]),
  ...sec('product_owner', 'benefits', 'svc-product-owner', [
    'Une vision alignée sur vos objectifs business',
    'Une communication fluide entre les équipes',
    'Des priorités qui maximisent la valeur',
    'Des cycles de livraison plus courts et prévisibles',
  ]),
]

/* -------------------------------------------------------------------------- */
/*  PROJECTS                                                                   */
/* -------------------------------------------------------------------------- */

export const mockProjects: Project[] = [
  {
    id: 'prj-portfolio',
    title: 'Portfolio & Plateforme personnelle',
    description:
      'Site portfolio nouvelle génération : Nuxt, Supabase, design system, thème sombre/clair et espace d\'administration.',
    long_description:
      "Une plateforme complète en Nuxt 3 et Supabase qui met en avant mes projets, mes services et mes compétences. Elle embarque un design system réutilisable, une gestion de contenu via un back-office sécurisé et un système de téléchargement de ressources.",
    image_url: null,
    image_urls: [],
    project_url: '',
    github_url: 'https://github.com/jeobran69367',
    technologies: ['Nuxt', 'Vue.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
    category: 'Web Development',
    featured: true,
    start_date: '2025-09-01',
    end_date: null,
    status: 'En cours',
    order_index: 1,
    objectif: [
      'Présenter un parcours et des services de manière claire et premium',
      'Proposer des ressources téléchargeables (brochures services)',
      'Être administrable sans toucher au code',
    ],
    solution: [
      'SSR et SEO optimisé grâce à Nuxt 3',
      'Backend Supabase (base + auth + storage) avec RLS',
      'Système de design et composants réutilisables',
    ],
    created_at: '2025-09-01T00:00:00.000Z',
    updated_at: '2025-09-01T00:00:00.000Z',
  },
  {
    id: 'prj-ecommerce',
    title: 'Plateforme e-commerce',
    description:
      'Solution e-commerce complète : catalogue, panier, paiement Stripe et gestion de commandes.',
    long_description:
      'Une plateforme e-commerce de bout en bout avec catalogue produits, panier dynamique, paiement sécurisé via Stripe, gestion des commandes et un back-office d\'administration.',
    project_url: '',
    github_url: 'https://github.com/jeobran69367',
    image_url: null,
    image_urls: [],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'Web Development',
    featured: true,
    start_date: '2024-03-01',
    end_date: '2024-12-01',
    status: 'Terminé',
    order_index: 2,
    objectif: [
      'Permettre une vente en ligne simple et sécurisée',
      'Réduire les frictions du tunnel d\'achat',
    ],
    solution: [
      'Architecture frontend/backend découplée',
      'Intégration Stripe pour les paiements',
      'Tableau de bord d\'administration des commandes',
    ],
    created_at: '2024-03-01T00:00:00.000Z',
    updated_at: '2024-12-01T00:00:00.000Z',
  },
  {
    id: 'prj-tasks',
    title: 'Application de gestion de tâches',
    description:
      'Outil collaboratif de gestion de projets et de tâches pour les équipes, avec suivi en temps réel.',
    long_description:
      'Une application collaborative de gestion de tâches permettant d\'organiser les projets, d\'assigner des missions et de suivre l\'avancement en temps réel avec des tableaux Kanban.',
    image_url: null,
    image_urls: [],
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'TailwindCSS'],
    category: 'Web Development',
    featured: false,
    start_date: '2023-06-01',
    end_date: '2024-01-01',
    status: 'Terminé',
    order_index: 3,
    objectif: [
      'Simplifier l\'organisation d\'équipe',
      'Visualiser l\'avancement en temps réel',
    ],
    solution: [
      'Tableaux Kanban drag & drop',
      'Synchronisation temps réel',
      'Suivi de charge par membre',
    ],
    created_at: '2023-06-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
  {
    id: 'prj-chatbot',
    title: 'Assistant IA & automatisation',
    description:
      'Chatbot métier et automatisation de flux pour réduire les tâches répétitives et améliorer le support.',
    long_description:
      "Un assistant conversationnel entraîné sur les données métier du client, relié à des workflows automatisés (CRM, emails, reporting) pour décharger les équipes et améliorer le support.",
    image_url: null,
    image_urls: [],
    technologies: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    category: 'AI & Automation',
    featured: true,
    start_date: '2025-01-01',
    end_date: null,
    status: 'En cours',
    order_index: 4,
    objectif: [
      'Automatiser le support client N1',
      'Exploiter les données internes',
    ],
    solution: [
      'RAG sur la base documentaire interne',
      'API d\'intégration (Slack, CRM)',
      'Rapports d\'analyse des conversations',
    ],
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },
]

/* -------------------------------------------------------------------------- */
/*  EXPERIENCE                                                                 */
/* -------------------------------------------------------------------------- */

export const mockExperience: Experience[] = [
  {
    id: 'exp-1',
    company_name: 'Tech Innovation (alternance)',
    position: 'Développeur Full-Stack',
    description:
      "Développement d'applications web et d'outils d'automatisation pour des clients.",
    start_date: '2024-09-01',
    end_date: null,
    is_current: true,
    location: 'France',
    company_url: '',
    logo_url: null,
    achievements: [
      'Migration de services vers une architecture Nuxt + Supabase',
      'Amélioration des performances de 40%',
      'Mise en place d\'un pipeline CI/CD',
    ],
    order_index: 1,
    created_at: '2024-09-01T00:00:00.000Z',
    updated_at: '2024-09-01T00:00:00.000Z',
  },
  {
    id: 'exp-2',
    company_name: 'Startup XYZ',
    position: 'Développeur Front-end',
    description:
      "Création d'interfaces utilisateur réactives et implémentation de nouvelles fonctionnalités.",
    start_date: '2023-01-01',
    end_date: '2024-08-01',
    is_current: false,
    location: 'Remote',
    company_url: '',
    logo_url: null,
    achievements: [
      'Conception d\'un design system',
      'Réduction du temps de chargement de 30%',
      'Collaboration avec les équipes design',
    ],
    order_index: 2,
    created_at: '2023-01-01T00:00:00.000Z',
    updated_at: '2024-08-01T00:00:00.000Z',
  },
]

/* -------------------------------------------------------------------------- */
/*  EDUCATION / CERTIFICATIONS                                                 */
/* -------------------------------------------------------------------------- */

export const mockEducation: Education[] = [
  {
    id: 'edu-1',
    institution: 'École d\'ingénieurs',
    degree: 'Titre en développement informatique (RNCP)',
    field_of_study: 'Développement web & mobilité',
    description: 'Formation spécialisée en ingénierie logicielle et développement web.',
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
  {
    id: 'edu-2',
    institution: 'Formations & certifications',
    degree: 'Certifications en IA, Product & Scrum',
    field_of_study: 'Intelligence artificielle & Product management',
    description:
      'Certifications en intelligence artificielle, Product Owner et méthodes agiles.',
    start_date: '2024-01-01',
    end_date: null,
    is_current: true,
    location: 'En ligne',
    grade: null,
    logo_url: null,
    order_index: 2,
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-01-01T00:00:00.000Z',
  },
]

/* -------------------------------------------------------------------------- */
/*  SKILLS                                                                     */
/* -------------------------------------------------------------------------- */

export const mockSkills: Skill[] = [
  { id: 'sk-1', name: 'Vue.js', category: 'Frontend', proficiency_level: 5, years_of_experience: 4, icon_url: null, order_index: 1, created_at: '', updated_at: '' },
  { id: 'sk-2', name: 'Nuxt', category: 'Frontend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 2, created_at: '', updated_at: '' },
  { id: 'sk-3', name: 'TypeScript', category: 'Frontend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 3, created_at: '', updated_at: '' },
  { id: 'sk-4', name: 'React', category: 'Frontend', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 4, created_at: '', updated_at: '' },
  { id: 'sk-5', name: 'TailwindCSS', category: 'Frontend', proficiency_level: 5, years_of_experience: 3, icon_url: null, order_index: 5, created_at: '', updated_at: '' },
  { id: 'sk-6', name: 'Node.js', category: 'Backend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 6, created_at: '', updated_at: '' },
  { id: 'sk-7', name: 'Python', category: 'Backend', proficiency_level: 4, years_of_experience: 3, icon_url: null, order_index: 7, created_at: '', updated_at: '' },
  { id: 'sk-8', name: 'Supabase', category: 'Backend', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 8, created_at: '', updated_at: '' },
  { id: 'sk-9', name: 'PostgreSQL', category: 'Backend', proficiency_level: 4, years_of_experience: 2, icon_url: null, order_index: 9, created_at: '', updated_at: '' },
  { id: 'sk-10', name: 'Docker', category: 'Tools', proficiency_level: 3, years_of_experience: 2, icon_url: null, order_index: 10, created_at: '', updated_at: '' },
  { id: 'sk-11', name: 'Git', category: 'Tools', proficiency_level: 5, years_of_experience: 4, icon_url: null, order_index: 11, created_at: '', updated_at: '' },
  { id: 'sk-12', name: 'LangChain', category: 'AI', proficiency_level: 3, years_of_experience: 1, icon_url: null, order_index: 12, created_at: '', updated_at: '' },
]
