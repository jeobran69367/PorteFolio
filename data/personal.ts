/**
 * Identité, positionnement et storytelling du portfolio.
 *
 * Contenu rédigé de façon professionnelle et factuelle. Les seules informations
 * personnelles utilisées sont celles déjà présentes dans le projet (nom, rôle,
 * stack, contacts). Les éléments que seul le propriétaire connaît (employeurs,
 * chiffres précis) sont laissés sous forme de champs « à compléter ».
 */

export const identity = {
  name: 'Jeobran Nathanael Kombou Tchounga',
  shortName: 'Jeobran k',
  role: 'Chef de projet & Développeur Full-Stack',
  positioning:
    'Chef de projet hybride : je pilote des projets digitaux de bout en bout (cadrage, planification, coordination, suivi) tout en maîtrisant la technique (Full-Stack & IA).',

  // Rôles affichés en boucle (typed.js)
  heroRoles: [
    'Chef de projet',
    'Project Manager',
    'Product Owner',
    'Scrum Master',
    'Développeur Full-Stack',
    'Développeur IA',
  ],

  location: 'France',
  availability: 'Disponible pour un échange',
  email: 'jeobrannathanael@gmail.com',
  phone: '+33 7 69 10 96 26',
  phoneRaw: '33769109626',
  whatsapp: 'https://wa.me/33769109626',
  github: 'https://github.com/jeobran69367',
  githubLabel: 'github.com/jeobran69367',
  linkedin: 'https://www.linkedin.com/in/jeobran-nathanael-kombou-14a563230/',
  linkedinLabel: 'linkedin.com/in/jeobran-nathanael-kombou',
  calendly: 'https://calendly.com/jeobrannathanael/new-meeting',
}

/**
 * Proposition de valeur — message principal de la page d'accueil.
 * Rédigé pour un profil "chef de projet", orienté résultats et concret.
 */
export const valueProposition = {
  eyebrow: "Chef de projet & expert technique",
  headline: "Je transforme vos idées en projets digitaux livrés, pilotés et mesurés.",
  subheadline:
    "Du cadrage à la mise en production, je conjugue pilotage de projet et expertise technique pour livrer des solutions fiables, à temps, et alignées sur vos objectifs métier.",
  paragraphs: [
    "Un projet qui dérape coûte cher : des délais glissés, un budget dépassé, des équipes qui se perdent et un résultat en-deçà des attentes. Mon rôle, c'est d'empêcher cela.",
    "Je prends en charge la conduite de projet de bout en bout : je cadre le besoin, je structure le planning, je coordonne les équipes (tech, design, business) et je pilote les risques jusqu'à la livraison. Parce que je maîtrise aussi la technique, je parle le même langage que les développeurs et je transforme les exigences métier en spécifications actionnables.",
    "Résultat : des projets qui avancent, des équipes alignées, des décisions objectives basées sur des indicateurs, et des livrables concrets utilisés au quotidien.",
  ],
}

/**
 * Problèmes concrets que je résous — utilisés sur la page d'accueil.
 * Formulés pour un profil PM, sans jargon inutile.
 */
export const problemsSolved = [
  {
    title: "Projets sans cap ni planning",
    desc: "Des objectifs flous, pas de feuille de route, des livraisons qui glissent. Je structure le cadrage, la roadmap et le planning pour que tout le monde sache quoi faire, quand et pourquoi.",
    icon: 'mdi:map-marker-path',
  },
  {
    title: "Équipes désalignées (tech / métier)",
    desc: "Le business ne comprend pas la technique, les devs ne voient pas la valeur métier. Je joue le rôle de traducteur et de facilitateur pour aligner tout le monde sur un objectif commun.",
    icon: 'mdi:account-group',
  },
  {
    title: "Décisions prises au ressenti",
    desc: "On priorise au doigt mouillé, sans mesure. Je mets en place des indicateurs et un reporting clair pour décider sur des faits, pas sur des intuitions.",
    icon: 'mdi:chart-line',
  },
  {
    title: "Risques découverts trop tard",
    desc: "Les problèmes surgissent en fin de projet. J'identifie, je qualifie et je traite les risques tôt pour éviter les mauvaises surprises.",
    icon: 'mdi:alert-decagram',
  },
]

/**
 * Pôles d'expertise (PM + technique + produit). Utilisés sur l'accueil et le à-propos.
 */
export const expertiseDomains = [
  {
    id: 'pilotage',
    title: 'Pilotage de projet',
    icon: 'mdi:compass-outline',
    summary:
      "Cadrage, planification, coordination et suivi de l'avancement jusqu'à la livraison.",
    points: [
      'Cadrage du besoin et définition du périmètre',
      'Planification (jalons, charges, dépendances)',
      'Coordination des équipes et des parties prenantes',
      'Suivi des délais, reporting et points d\'avancement',
      'Gestion des risques et des imprévus',
      'Comptes rendus, décisions et documentation',
    ],
    tools: ['Jira', 'Notion', 'Miro', 'Confluence', 'Méthodes agiles (Scrum, Kanban)'],
  },
  {
    id: 'produit',
    title: 'Product management / PO',
    icon: 'mdi:lightbulb-on-outline',
    summary:
      "Définition de la vision produit, priorisation du backlog et lien avec les équipes techniques.",
    points: [
      'Définition de la vision et des objectifs produit',
      'Rédaction de user stories et critères d\'acceptation',
      'Priorisation du backlog orientée valeur',
      'Animation des cérémonies agiles (sprint, refinement, review)',
      'Suivi de la vélocité et des indicateurs produit',
      'Arbitrages entre périmètre, temps et qualité',
    ],
    tools: ['Jira', 'Notion', 'Figma', 'Miro', 'Scrum', 'Kanban', 'Roadmap'],
  },
  {
    id: 'fullstack',
    title: 'Développement Full-Stack',
    icon: 'mdi:code-braces',
    summary:
      "Conception et développement d'applications web, du frontend au backend.",
    points: [
      'Frontend moderne (Vue.js, Nuxt, React)',
      'Backend et API (Node.js, Python, FastAPI)',
      'Bases de données (PostgreSQL, Supabase)',
      'Intégration continue et qualité de code',
      'Architecture scalable et maintenable',
      'Sécurité et authentification',
    ],
    tools: ['Vue.js', 'Nuxt', 'React', 'TypeScript', 'Node.js', 'Python', 'Supabase', 'PostgreSQL', 'Docker', 'Git'],
  },
  {
    id: 'ia',
    title: 'IA & Automatisation',
    icon: 'mdi:robot-outline',
    summary:
      "Intelligence artificielle appliquée et automatisation de processus métier.",
    points: [
      'Chatbots et assistants (LLM, RAG)',
      'Automatisation de flux (CRM, emails, reporting)',
      'IA prédictive et scoring',
      'APIs intelligentes (OpenAI / Claude, embeddings)',
      'Exploitation des données internes',
      'Intégration dans l\'existant',
    ],
    tools: ['Python', 'LangChain', 'OpenAI API', 'TensorFlow', 'scikit-learn', 'FastAPI', 'PostgreSQL'],
  },
]

/**
 * Points forts — "Pourquoi me confier un projet". Qualitatif, sans chiffres inventés.
 */
export const strengths = [
  {
    title: 'Double casquette PM & technique',
    desc: "Je pilote le projet ET je comprends la technique. Résultat : un cadrage réaliste, des estimations honnêtes et une communication fluide entre le métier et les équipes de développement.",
  },
  {
    title: 'Pilotage orienté résultats',
    desc: "Je mets en place des objectifs mesurables et un reporting régulier. Les décisions se prennent sur la base d'indicateurs et de faits, pas d'intuition.",
  },
  {
    title: 'Rigueur & méthode',
    desc: "Cadrage, planification, suivi, documentation : des pratiques agiles et structurées qui rendent le projet prévisible, traçable et réplicable.",
  },
  {
    title: 'Capacité à simplifier',
    desc: "Je découpe les problèmes complexes en étapes claires et actionnables, pour livrer de la valeur rapidement sans sacrifier la qualité.",
  },
  {
    title: 'Communication & coordination',
    desc: "Je fais le lien entre les parties prenantes, j'anime les réunions et je clarifie les décisions pour éviter les malentendus coûteux.",
  },
  {
    title: "Jusqu'au bout de la chaîne",
    desc: "De l'idée au déploiement : je peux prendre en charge la conception, le développement et la mise en production, ou travailler en support d'une équipe existante.",
  },
]

/**
 * Démarche de travail — timeline de méthodologie.
 */
export const process = [
  {
    step: 'Cadrage',
    title: 'Comprendre & cadrer',
    duration: '1–2 semaines',
    desc: "J'écoute le besoin, j'identifie les parties prenantes et je structure le périmètre. On définit ensemble les objectifs, les succès attendus et les contraintes.",
    items: [
      'Ateliers de cadrage et interviews',
      'Définition des objectifs et du périmètre',
      'Cartographie des parties prenantes',
      'Plan de risque initial',
    ],
  },
  {
    step: 'Planifier',
    title: 'Structurer le projet',
    duration: '1–2 semaines',
    desc: "Je transforme le besoin en feuille de route, en backlog priorisé et en planning réaliste. Chacun sait quoi faire, quand et pourquoi.",
    items: [
      'Feuille de route et jalons',
      'Backlog priorisé (product backlog)',
      'Planning et estimation des charges',
      'Gouvernance et rituels de suivi',
    ],
  },
  {
    step: 'Piloter',
    title: 'Exécuter & coordonner',
    duration: 'pendant le projet',
    desc: "J'anime l'équipe et les parties prenantes, je suit l'avancement, je traite les risques et je lève les blocages au plus vite.",
    items: [
      'Rituels agiles (daily, sprint review)',
      'Suivi de l\'avancement et des indicateurs',
      'Gestion des risques et des dépendances',
      'Communication et comptes rendus',
    ],
  },
  {
    step: 'Livrer',
    title: 'Déployer & améliorer',
    duration: 'fin de projet',
    desc: "Je garantis une livraison conforme, je documente et je m'assure que le résultat est adopté. Je propose ensuite les axes d'amélioration.",
    items: [
      'Recette et validation des livrables',
      'Documentation et formation',
      'Mise en production et accompagnement',
      'Bilan, retours d\'expérience et amélioration continue',
    ],
  },
]

/**
 * Indicateurs clés — présentés de façon qualitative (pas de chiffres inventés).
 * Chaque valeur est volontairement un descripteur, à personnaliser ensuite.
 */
export const keyFacts = [
  { label: 'Rôle', value: 'Chef de projet + tech', note: 'double casquette' },
  { label: 'Méthodes', value: 'Agile (Scrum / Kanban)', note: 'pratiques éprouvées' },
  { label: 'Domaines', value: 'Web · IA · Produit', note: 'de bout en bout' },
  { label: 'Stack', value: 'Vue/Nuxt · Node · Python', note: 'Full-Stack & IA' },
  { label: 'Livrables', value: 'Cadrage → production', note: 'mesurés et documentés' },
  { label: 'Approche', value: 'Résultats & KPI', note: 'décisions basées sur les faits' },
]
