import type { Project } from '../types/database'

/**
 * Études de cas projets — modèle professionnel complet.
 *
 * Chaque projet est présenté comme une étude de cas : contexte, besoin,
 * objectifs, rôle, responsabilités, méthode, organisation, parties prenantes,
 * contraintes, difficultés, solutions, décisions, résultats (qualitatifs),
 * indicateurs (marqués « à compléter »), compétences démontrées et enseignements.
 *
 * Conformément à la consigne, aucun chiffre factuel n'a été inventé : les
 * indicateurs chiffrés sont des champs « à compléter » que le propriétaire
 * pourra renseigner. Les contenus rédigés décrivent la posture professionnelle
 * attendue pour chaque type de projet.
 */

export interface KpiItem {
  label: string
  value: string // descripteur ou "À compléter"
  note?: string
}

export interface CaseStudy extends Project {
  role: string                 // mon rôle précis
  context: string              // contexte / cadre du projet
  need: string                 // besoin initial / problématique
  objectives: string[]         // objectifs visés
  responsibilities: string[]   // mes responsabilités
  methodology: string[]        // méthodologie de travail
  organization: string         // organisation du projet
  stakeholders: string[]       // parties prenantes
  constraints: string[]        // contraintes rencontrées
  challenges: string[]         // difficultés rencontrées
  solutions: string[]          // solutions mises en place  (déjà dans Project, redéclaré)
  decisions: string[]          // décisions prises
  results: string[]            // résultats obtenus (qualitatifs)
  kpis: KpiItem[]              // indicateurs / KPI (à compléter)
  competencies: string[]       // compétences démontrées
  learnings: string[]          // enseignements / impact
  timeline: string             // durée
  personCount?: string         // taille d'équipe (à préciser)
}

export const mockProjects: CaseStudy[] = [
  /* ------------------------------------------------------------------ */
  /* Cas 1 — Application de gestion de tâches (Kanban)                   */
  /* ------------------------------------------------------------------ */
  {
    id: 'prj-task-manager',
    title: 'Application de gestion de projets & tâches',
    description:
      "Outil collaboratif de gestion de tâches pour les équipes : tableaux Kanban, assignation, suivi d'avancement en temps réel.",
    long_description:
      "Un projet de structuration et de développement d'un outil interne de gestion de tâches, destiné à améliorer la coordination des équipes et la visibilité sur l'avancement des chantiers.",
    role: "Chef de projet & Développeur Full-Stack",
    context:
      "Équipe en croissance utilisant des fichiers et des emails pour suivre le travail, sans outil centralisé. Les priorités se perdaient, personne n'ayant une vue claire sur qui faisait quoi ni où en était chaque chantier.",
    need:
      "Mettre en place un outil collaboratif simple et centralisé pour organiser les tâches, assigner des responsabilités et suivre l'avancement en temps réel, sans courbe d'apprentissage lourde.",
    objectives: [
      "Centraliser la planification des tâches de l'équipe",
      "Donner une visibilité claire sur l'avancement à tous les membres",
      "Faciliter l'assignation et le suivi des responsabilités",
      "Réduire le temps perdu en coordination et en relances",
    ],
    responsibilities: [
      "Cadrage du besoin et définition du périmètre fonctionnel",
      "Conception de l'architecture de l'application",
      "Développement de l'interface et des fonctionnalités clés",
      "Coordination avec les utilisateurs finaux pour les retours",
      "Mise en place du suivi et de la documentation",
    ],
    methodology: [
      "Cadrage : ateliers avec les futurs utilisateurs pour lister les besoins",
      "Conception : maquettes et modélisation des flux (columns, attribution)",
      "Développement itératif par fonctionnalités prioritaires",
      "Recette avec un groupe pilote d'utilisateurs puis ajustements",
    ],
    organization:
      "Projet mené en mode agile avec des cycles courts. Coordination avec l'équipe produit et les utilisateurs pilotes sur la base de points réguliers.",
    stakeholders: ['Équipe projet', 'Utilisateurs finaux (membres de l\'équipe)', 'Référent métier'],
    constraints: [
      'Calendrier serré entre le cadrage et la mise en service',
      'Besoin d\'un outil simple, adopté sans formation lourde',
      'Contraintes de budget et de délai à respecter',
    ],
    challenges: [
      'Partir de zéro, sans outil existant ni repère sur les usages',
      "Trouver le bon équilibre entre simplicité et fonctionnalités",
      "Faire adopter l'outil par des utilisateurs habitués à d'autres méthodes",
    ],
    solutions: [
      'Mise en place de tableaux Kanban intuitifs avec glisser-déposer',
      'Assignment des tâches et suivi d\'avancement en temps réel',
      "Interface épurée et responsive pour une adoption rapide",
      'Rétroplanning et points réguliers pour lever les blocages',
    ],
    decisions: [
      'Privilégier la simplicité d\'usage à la richesse de fonctionnalités',
      'Choisir un déploiement rapide pour valider l\'usage en conditions réelles',
      'Faire évoluer l\'outil par itérations selon les retours utilisateurs',
    ],
    results: [
      'Un outil centralisé adopté par l\'équipe pour organiser les chantiers',
      'Une meilleure visibilité collective sur l\'avancement et les responsabilités',
      'Une coordination facilitée et moins de relances informelles',
      'Un socle évolutif pouvant accueillir de nouvelles fonctionnalités',
    ],
    kpis: [
      { label: 'Nombre d\'utilisateurs actifs', value: 'À compléter', note: 'par ex. toute l\'équipe' },
      { label: 'Temps gagné en coordination', value: 'À compléter', note: 'qualitatif ou %' },
      { label: 'Réduction des relances / emails', value: 'À compléter', note: 'qualitatif ou %' },
    ],
    competencies: [
      'Cadrage de projet',
      'Conception d\'outil collaboratif',
      'Développement full-stack',
      'Gestion de projet agile',
      'Écoute utilisateur et itération',
    ],
    learnings:
      "Ce projet m'a confirmé que la valeur d'un outil tient autant à sa simplicité d'adoption qu'à ses fonctionnalités. Le cadrage avec les utilisateurs et l'itération rapide ont été déterminants.",
    timeline: 'Quelques semaines (cadrage → mise en service)',
    image_url: null,
    image_urls: [],
    project_url: '',
    github_url: '',
    technologies: ['Vue.js', 'Firebase', 'TailwindCSS'],
    category: 'Project Management',
    featured: true,
    start_date: '2024-01-01',
    end_date: '2024-03-01',
    status: 'Terminé',
    order_index: 1,
    objectif: ['Centraliser la planification', 'Assurer la visibilité sur l\'avancement'],
    created_at: '2024-01-01T00:00:00.000Z',
    updated_at: '2024-03-01T00:00:00.000Z',
  },

  /* ------------------------------------------------------------------ */
  /* Cas 2 — Plateforme e-commerce                                       */
  /* ------------------------------------------------------------------ */
  {
    id: 'prj-ecommerce',
    title: 'Plateforme e-commerce',
    description:
      "Solution e-commerce de bout en bout : catalogue, panier, paiement sécurisé et gestion des commandes.",
    long_description:
      "Un projet de développement d'une plateforme e-commerce complète, de la vitrine au tunnel de paiement, avec un back-office d'administration des commandes et des produits.",
    role: 'Chef de projet & développeur',
    context:
      "Un acteur souhaitant vendre en ligne sans plateforme adaptée. Le processus d'achat était soit inexistant, soit peu structuré, et l'administration des ventes se faisait manuellement.",
    need:
      "Mettre en place une boutique en ligne complète et sécurisée, avec un tunnel d'achat fluide et un back-office permettant de gérer produits et commandes.",
    objectives: [
      'Permettre un parcours d\'achat simple et sécurisé',
      "Réduire les frictions du tunnel d'achat (panier, paiement)",
      "Centraliser la gestion des produits et des commandes",
      'Mettre en place le suivi et l\'administration des ventes',
    ],
    responsibilities: [
      "Cadrage du besoin et du parcours d'achat",
      "Définition de l'architecture (frontend, backend, paiement)",
      'Développement des modules clés (catalogue, panier, paiement, commandes)',
      'Intégration de la solution de paiement',
      "Mise en place du back-office d'administration",
    ],
    methodology: [
      'Cadrage : définition du parcours et des règles métier (produits, promos, stocks)',
      'Conception : architecture découplée frontend/backend',
      'Développement par modules prioritaires',
      "Recette et tests du tunnel d'achat de bout en bout",
    ],
    organization:
      'Projet structuré par lots fonctionnels, avec des points de validation réguliers. Coordination entre le métier (produits, commandes) et le développement.',
    stakeholders: ['Porteur du projet', 'Équipe métier (catalogue, commandes)', 'Prestataire de paiement', 'Équipe de développement'],
    constraints: [
      'Exigences de sécurité fortes sur le paiement et les données',
      'Délais à tenir pour un lancement commercial',
      'Volumes variables et besoin d\'un back-office fiable',
    ],
    challenges: [
      'Garantir la robustesse et la sécurité du tunnel de paiement',
      'Gérer les cas particuliers (stocks, promos, remboursements)',
      'Livrer dans les délais un ensemble de modules interdépendants',
    ],
    solutions: [
      'Intégration d\'un prestataire de paiement éprouvé (type Stripe)',
      'Architecture frontend/backend découplée et testable',
      "Back-office d'administration des produits et commandes",
      'Parcours d\'achat simplifié et responsive',
    ],
    decisions: [
      'Choisir un prestataire de paiement éprouvé plutôt qu\'un développement interne',
      'Découper le projet en lots fonctionnels livrables indépendamment',
      'Centraliser la gestion des ventes dans un back-office dédié',
    ],
    results: [
      'Une boutique en ligne complète et opérationnelle',
      'Un parcours d\'achat fluide, du catalogue au paiement',
      "Un back-office simplifiant l'administration des ventes",
      'Une base technique solide pour faire évoluer la boutique',
    ],
    kpis: [
      { label: 'Taux de conversion du tunnel', value: 'À compléter', note: '% , si disponible' },
      { label: 'Panier moyen', value: 'À compléter', note: 'si disponible' },
      { label: 'Temps de gestion des commandes', value: 'À compléter', note: 'qualitatif ou %' },
    ],
    competencies: [
      'Pilotage de projet fonctionnel',
      'Architecture & développement e-commerce',
      'Intégration de paiement sécurisé',
      'Gestion des lots et des dépendances',
      'Back-office & administration',
    ],
    learnings:
      "Ce projet m'a montré l'importance de sécuriser les parcours critiques (paiement) et de découper le travail en lots livrables pour tenir les délais tout en gardant la qualité.",
    timeline: 'Plusieurs mois (cadrage → lancement)',
    image_url: null,
    image_urls: [],
    project_url: '',
    github_url: '',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'Développement web',
    featured: true,
    start_date: '2024-03-01',
    end_date: '2024-09-01',
    status: 'Terminé',
    order_index: 2,
    objectif: ['Promouvoir la vente en ligne', 'Centraliser la gestion des ventes'],
    created_at: '2024-03-01T00:00:00.000Z',
    updated_at: '2024-09-01T00:00:00.000Z',
  },

  /* ------------------------------------------------------------------ */
  /* Cas 3 — Site portfolio / plateforme personnelle                     */
  /* ------------------------------------------------------------------ */
  {
    id: 'prj-portfolio',
    title: 'Site portfolio & plateforme personnelle',
    description:
      "Plateforme personnelle moderne : Nuxt, Supabase, design system, thème clair/sombre et back-office.",
    long_description:
      "Un projet de conception et développement d'une plateforme présentant un parcours, des services et des ressources, avec un espace d'administration pour gérer les contenus sans toucher au code.",
    role: 'Chef de projet & Développeur',
    context:
      "Besoin de disposer d'une vitrine professionnelle crédible, facile à maintenir et à faire évoluer, pour présenter un profil et des offres de manière structurée.",
    need:
      "Créer une plateforme professionnelle, rapide, bien référencée et administrable, présentant un parcours et des ressources de manière claire.",
    objectives: [
      'Présenter un profil et des services de manière claire et premium',
      'Être rapide, responsive et bien référencé (SEO)',
      'Permettre une gestion des contenus sans développement',
      'Proposer des ressources téléchargeables (brochures, études de cas)',
    ],
    responsibilities: [
      'Cadrage et structuration des contenus et de la navigation',
      'Choix de l\'architecture (framework, base de données, hébergement)',
      'Conception et développement de l\'interface',
      'Mise en place du back-office et de l\'authentification',
      'Optimisation des performances et du référencement',
    ],
    methodology: [
      'Cadrage : plan des contenus, arborescence, objectifs',
      'Conception : design system et composants réutilisables',
      'Développement itératif et responsive',
      'Optimisation (performance, SEO, accessibilité) puis mise en ligne',
    ],
    organization:
      'Projet conduit en autonomie, en appliquant une démarche structurée (cadrage → conception → développement → optimisation).',
    stakeholders: ['Propriétaire du projet', 'Designer', 'Hébergeur / Supabase'],
    constraints: [
      'Obsolescence rapide des technologies : choisir un socle moderne et maintenable',
      'Besoin d\'une gestion de contenu simple pour le propriétaire',
      'Exigences de performance et de référencement',
    ],
    challenges: [
      'Concevoir une interface à la fois élégante et performante',
      'Permettre une mise à jour des contenus sans compétence technique',
      'Garantir la cohérence visuelle sur l\'ensemble des pages',
    ],
    solutions: [
      'Framework Nuxt avec rendu côté serveur (SSR) pour le SEO et la performance',
      'Backend Supabase (base, authentification, stockage) avec sécurisation des accès',
      'Design system et composants réutilisables pour la cohérence',
      'Back-office pour gérer les contenus sans coder',
    ],
    decisions: [
      'Choisir une architecture SSR pour le référencement et la vitesse',
      'Mettre en place un design system pour la cohérence et l\'évolutivité',
      'Séparer contenu et présentation via un back-office',
    ],
    results: [
      'Une plateforme professionnelle, rapide et responsive',
      'Une navigation claire et une identité cohérente sur toutes les pages',
      'Un back-office permettant de gérer les contenus simplement',
      'Un référencement optimisé (SSR, balises, contenus)',
    ],
    kpis: [
      { label: 'Temps de chargement', value: 'À compléter', note: 'performance cible' },
      { label: 'Positionnement SEO', value: 'à compléter', note: 'si suivi' },
      { label: 'Pages vues / visiteurs', value: 'À compléter', note: 'si analytics' },
    ],
    competencies: [
      'Cadrage de projet',
      'Conception & design system',
      'Développement full-stack (Nuxt / Supabase)',
      'Optimisation SEO et performance',
      'Gestion de contenu et back-office',
    ],
    learnings:
      "Ce projet illustre l'importance de poser un socle technique maintenable et un design system cohérent : cela rend l'ensemble évolutif et professionnel dans le temps.",
    timeline: 'Projet continu (améliorations régulières)',
    image_url: null,
    image_urls: [],
    project_url: '',
    github_url: 'https://github.com/jeobran69367',
    technologies: ['Nuxt', 'Vue.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
    category: 'Développement web',
    featured: true,
    start_date: '2025-06-01',
    end_date: null,
    status: 'En cours',
    order_index: 3,
    objectif: ['Présenter un profil professionnel', 'Permettre la gestion de contenu'],
    created_at: '2025-06-01T00:00:00.000Z',
    updated_at: '2025-06-01T00:00:00.000Z',
  },

  /* ------------------------------------------------------------------ */
  /* Cas 4 — Assistant IA & automatisation                               */
  /* ------------------------------------------------------------------ */
  {
    id: 'prj-chatbot',
    title: 'Assistant IA & automatisation de flux',
    description:
      "Chatbot métier et automatisation de processus pour décharger les équipes et améliorer le service.",
    long_description:
      "Un projet d'intelligence artificielle appliquée visant à automatiser un processus répétitif et à fournir un assistant répondant aux questions courantes à partir de documents internes.",
    role: 'Chef de projet tech & développeur IA',
    context:
      "Une part importante du temps d'une équipe était consacrée à répondre aux mêmes questions et à traiter des demandes répétitives, sans outil permettant d'y répondre automatiquement.",
    need:
      "Automatiser un flux répétitif et mettre en place un assistant capable de répondre aux questions à partir des documents internes, pour libérer du temps à l'équipe.",
    objectives: [
      'Réduire le temps passé sur les tâches répétitives',
      'Fournir des réponses rapides et fiables aux questions courantes',
      'Exploiter les documents internes existants',
      'Intégrer la solution aux outils déjà utilisés',
    ],
    responsibilities: [
      'Cadrage du besoin et qualification du processus à automatiser',
      'Choix de l\'approche (LLM, extraction d\'information, flux)',
      'Conception et prototype de la solution',
      'Intégration aux outils existants (CRM, messagerie…)',
      'Documentation et préparation à l\'usage',
    ],
    methodology: [
      'Analyser le processus et identifier les cas à automatiser',
      'Concevoir une solution adaptée (RAG, API, flux)',
      'Prototyper pour valider la pertinence des réponses',
      'Intégrer, mesurer et documenter',
    ],
    organization:
      "Projet mené en mode exploratoire puis structuré : PoC pour valider la faisabilité, puis industrialisation et intégration.",
    stakeholders: ['Équipe métier', 'Équipe de développement', 'Utilisateurs du flux'],
    constraints: [
      'Qualité variable des documents sources',
      'Sensibilité des données et confidentialité',
      'Besoin de réponses fiables (éviter les hallucinations)',
    ],
    challenges: [
      'Exploiter des documents internes non structurés',
      'Garantir des réponses pertinentes et sûres',
      'Intégrer la solution sans perturber les usages existants',
    ],
    solutions: [
      'Assistant basé sur les documents internes (approche RAG)',
      'API d\'intégration aux outils métier (CRM, messagerie…)',
      'Workflows automatisés pour les cas simples et répétitifs',
      'Suivi des questions et amélioration continue des réponses',
    ],
    decisions: [
      'Partir d\'un PoC pour valider la faisabilité avant industrialisation',
      'Privilégier une approche RAG sur les documents internes',
      'Intégrer via des API pour préserver les usages existants',
    ],
    results: [
      'Un assistant répondant aux questions courantes à partir des documents',
      'Un flux répétitif automatisé, libérant du temps à l\'équipe',
      'Une meilleure réactivité du service',
      'Une base exploitable pour étendre l\'automatisation',
    ],
    kpis: [
      { label: 'Questions traitées automatiquement', value: 'À compléter', note: 'volume / %' },
      { label: 'Temps gagné par l\'équipe', value: 'À compléter', note: 'qualitatif ou %' },
      { label: 'Taux de réponses pertinentes', value: 'À compléter', note: 'qualitatif ou %' },
    ],
    competencies: [
      'Cadrage d\'un besoin d\'IA',
      'Conception de solution LLM / RAG',
      'Automatisation de processus',
      'Intégration d\'API et de services',
      'Pilotage PoC → industrialisation',
    ],
    learnings:
      "Ce projet m'a appris à partir d'un prototype pour valider la valeur avant d'investir, et à conjuguer pertinence technique (RAG, LLM) et intégration propre dans l'outillage métier.",
    timeline: 'Projet en cours / exploratoire',
    image_url: null,
    image_urls: [],
    project_url: '',
    github_url: '',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    category: 'IA & Automatisation',
    featured: true,
    start_date: '2025-01-01',
    end_date: null,
    status: 'En cours',
    order_index: 4,
    objectif: ['Automatiser un flux répétitif', 'Fournir un assistant métier'],
    created_at: '2025-01-01T00:00:00.000Z',
    updated_at: '2025-01-01T00:00:00.000Z',
  },
]
