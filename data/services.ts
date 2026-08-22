import type { Service } from '../types/database'

/**
 * Services proposés — contenu professionnel et détaillé.
 *
 * Pour chaque service, on précise :
 *  - le besoin auquel il répond (pourquoi on en a besoin) ;
 *  - ce que je prends concrètement en charge ;
 *  - les livrables possibles ;
 *  - la démarche / méthode ;
 *  - les outils et approches utilisés ;
 *  - les bénéfices attendus ;
 *  - les situations dans lesquelles c'est pertinent.
 *
 * Aucun chiffre inventé : les résultats sont décrits qualitativement (orientés valeur),
 * conformément à la consigne.
 */

export interface ServiceDetail extends Service {
  need: string[]              // le besoin auquel il répond
  deliverables: string[]      // livrables possibles
  method: string[]            // démarche de travail
  when: string[]              // situations pertinentes
  benefits: string[]          // bénéfices pour l'organisation
  tools: string[]             // outils / approches
}

export const mockServices: ServiceDetail[] = [
  /* ------------------------------------------------------------------ */
  /* 1. Chef de projet / pilotage de projet                              */
  /* ------------------------------------------------------------------ */
  {
    id: 'svc-chef-de-projet',
    title: 'Chef de projet / Pilotage de projet',
    slug: 'chef-de-projet',
    category: "Project Management",
    subtitle: 'Cadrage, planification, coordination et suivi jusqu\'à la livraison',
    description:
      "Je pilote vos projets digitaux de bout en bout : du cadrage initial à la mise en production, en garantissant le respect des délais, du périmètre et de la qualité. Je fais le lien entre les besoins métier et les équipes techniques.",
    need: [
      'Un projet neuf ou une refonte qui doit être structuré(e) de A à Z',
      'Des équipes (tech, design, business) qui peinent à s\'aligner',
      'Des livraisons qui glissent régulièrement, sans cause identifiée',
      "Besoin d'un interlocuteur unique pour suivre l'avancement et les décisions",
    ],
    deliverables: [
      'Document de cadrage (périmètre, objectifs, succès attendus)',
      'Feuille de route et planning avec jalons',
      'Backlog priorisé et user stories détaillées',
      'Comptes rendus, tableaux d\'avancement et reporting',
      'Registre des risques et plan d\'action',
      'Documentation de projet et bilan de fin de mission',
    ],
    method: [
      'Cadrage : ateliers, interviews, définition des objectifs',
      'Planification : découpage, jalons, estimation des charges',
      'Pilotage : rituels agiles, suivi d\'avancement, gestion des risques',
      'Livraison : recette, documentation, accompagnement',
    ],
    when: [
      'Lancement d\'un nouveau projet ou d\'un MVP',
      'Refonte d\'un outil ou d\'un process existant',
      'Projet multi-équipes ou multi-prestataires',
      'Contexte où les délais et le budget sont des contraintes fortes',
    ],
    benefits: [
      'Un projet structuré et prévisible, avec un cap clair pour tous',
      'Des décisions objectives basées sur des indicateurs',
      'Moins d\'imprévus grâce à une gestion proactive des risques',
      'Une communication fluide entre le métier et la technique',
    ],
    tools: ['Jira', 'Notion', 'Miro', 'Confluence', 'Scrum', 'Kanban', 'Figma'],
    tech_stack: ['Jira', 'Notion', 'Miro', 'Confluence', 'Scrum', 'Kanban'],
    approach: ['Cadrage', 'Planification', 'Pilotage', 'Livraison'],
    status: 'active',
    featured: true,
    order_index: 1,
    metadata: {},
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },

  /* ------------------------------------------------------------------ */
  /* 2. Product Owner / Product management                               */
  /* ------------------------------------------------------------------ */
  {
    id: 'svc-product-owner',
    title: 'Product Owner / Product management',
    slug: 'product-owner',
    category: 'Product Management',
    subtitle: 'Vision produit, backlog priorisé et coordination des équipes',
    description:
      "Je définis et porte la vision produit, je structure le backlog et je priorise ce qui apporte le plus de valeur. Je fais le pont entre les attentes des utilisateurs, les objectifs business et l'équipe de développement.",
    need: [
      'Une vision produit floue ou pas partagée',
      "Un backlog priorisé au hasard, sans logique de valeur",
      'Des équipes qui développent sans savoir pourquoi',
      'Besoin de cadrer un produit face à un marché ou des utilisateurs',
    ],
    deliverables: [
      'Vision produit et objectifs mesurables',
      'Backlog priorisé et détaillé (user stories, critères d\'acceptation)',
      'Roadmap produit alignée sur la stratégie',
      'Comptes rendus de sprint et suivi des indicateurs produit',
      'Spécifications fonctionnelles et maquettes (avec le design)',
    ],
    method: [
      'Comprendre les utilisateurs et le marché',
      'Définir les objectifs et les succès mesurables',
      'Prioriser par la valeur (impact vs effort)',
      'Animer les rituels agiles et ajuster en continu',
    ],
    when: [
      'Création ou repositionnement d\'un produit',
      'Mise en place ou amélioration d\'une méthode agile',
      'Équipe de développement qui manque de direction produit',
      'Besoin de mesurer l\'impact des fonctionnalités livrées',
    ],
    benefits: [
      'Un produit qui répond réellement aux besoins (utilisateurs/business)',
      'Une priorisation claire qui maximise la valeur livrée',
      'Une équipe alignée et motivée par un cap commun',
      'Des cycles de livraison courts et prévisibles',
    ],
    tools: ['Jira', 'Notion', 'Figma', 'Miro', 'Scrum', 'Kanban', 'Roadmap'],
    tech_stack: ['Jira', 'Notion', 'Figma', 'Miro', 'Scrum', 'Kanban'],
    approach: ['Comprendre', 'Définir', 'Prioriser', 'Animer'],
    status: 'active',
    featured: true,
    order_index: 2,
    metadata: {},
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },

  /* ------------------------------------------------------------------ */
  /* 3. Développement Full-Stack                                         */
  /* ------------------------------------------------------------------ */
  {
    id: 'svc-full-stack',
    title: 'Développement Full-Stack',
    slug: 'full-stack',
    category: 'Web Development',
    subtitle: 'Applications web complètes : frontend, backend, base de données',
    description:
      "Je conçois et développe des applications web complètes, de l'interface utilisateur au backend, avec une architecture scalable et maintenable. Je livre des produits fonctionnels, testés et prêts pour la production.",
    need: [
      'Création d\'une application web ou d\'un MVP',
      'Refonte d\'un site ou d\'un outil vieillissant',
      'Besoin d\'une application performante et évolutive',
      'Manque d\'expertise technique interne pour un projet',
    ],
    deliverables: [
      'Application web complète (frontend + backend + base de données)',
      'API (REST / GraphQL) documentées et sécurisées',
      'Interface utilisateur moderne et responsive',
      'Pipeline d\'intégration et de déploiement (CI/CD)',
      'Code testé, documenté et maintenable',
    ],
    method: [
      'Comprendre le besoin et définir l\'architecture',
      'Développer de manière itérative (sprints)',
      'Tester et intégrer en continu',
      'Déployer et documenter',
    ],
    when: [
      'Développement d\'un site vitrine, d\'une application métier ou d\'un SaaS',
      'Création d\'un MVP à valider rapidement',
      'Refonte technique d\'une application existante',
      'Besoin d\'un back-office ou d\'un espace admin',
    ],
    benefits: [
      'Une application fiable, rapide et sécurisée',
      'Un code maintenable qui évolue avec votre activité',
      'Une expérience utilisateur fluide et moderne',
      'Un déploiement automatisé et reproductible',
    ],
    tools: ['Vue.js', 'Nuxt', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Supabase', 'Docker', 'Git'],
    tech_stack: ['Vue.js', 'Nuxt', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Supabase', 'Docker', 'Git'],
    approach: ['Comprendre', 'Développer', 'Tester', 'Déployer'],
    status: 'active',
    featured: true,
    order_index: 3,
    metadata: {},
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },

  /* ------------------------------------------------------------------ */
  /* 4. IA & Automatisation                                              */
  /* ------------------------------------------------------------------ */
  {
    id: 'svc-ia-automatisation',
    title: 'IA & Automatisation',
    slug: 'ia-automatisation',
    category: 'AI & Automation',
    subtitle: 'Intelligence artificielle appliquée et automatisation de processus',
    description:
      "Je conçois des solutions d'IA et d'automatisation qui réduisent les tâches répétitives, exploitent vos données et améliorent la prise de décision. Du chatbot métier à l'automatisation de flux, je livre des solutions concrètes et intégrées.",
    need: [
      'Des tâches répétitives qui mobilisent vos équipes',
      'Des données accumulées mais jamais exploitées',
      'Un besoin d\'assistance ou de support automatisé',
      'Une volonté d\'améliorer la prise de décision par la donnée',
    ],
    deliverables: [
      'Chatbot / assistant intelligent (LLM, RAG)',
      'Workflows automatisés (CRM, emails, reporting)',
      'API d\'IA intégrée à votre existant',
      'Modèle prédictif ou de scoring',
      'Documentation et formation des utilisateurs',
    ],
    method: [
      'Analyser le processus et qualifier le besoin',
      'Concevoir une solution adaptée (modèle, API, flux)',
      'Prototyper (PoC) puis intégrer dans l\'existant',
      'Mesurer, documenter et former',
    ],
    when: [
      'Automatiser des processus manuels métier',
      'Mettre en place un assistant/chatbot de support',
      'Exploiter des données internes non valorisées',
      'Ajouter une brique IA à un produit existant',
    ],
    benefits: [
      'Un gain de temps sur les tâches à faible valeur',
      'Une meilleure qualité et réactivité du service',
      'Des données qui deviennent un atout décisionnel',
      'Une intégration propre à votre outillage existant',
    ],
    tools: ['Python', 'LangChain', 'OpenAI API', 'Claude API', 'TensorFlow', 'scikit-learn', 'FastAPI', 'PostgreSQL'],
    tech_stack: ['Python', 'LangChain', 'OpenAI API', 'Claude API', 'TensorFlow', 'scikit-learn', 'FastAPI', 'PostgreSQL'],
    approach: ['Analyser', 'Concevoir', 'Prototyper', 'Intégrer'],
    status: 'active',
    featured: true,
    order_index: 4,
    metadata: {},
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },
]
