-- Seed data for portfolio database (for testing and development)

-- Sample projects
INSERT INTO projects (title, description, long_description, technologies, category, featured, status, order_index, objectif, solution, role, stack_details, end_date) VALUES
('CuraConnect', 'Application web basée sur l''intelligence artificielle', 'CuraConnect est une application web basée sur l''intelligence artificielle, conçue pour proposer des recommandations médicales personnalisées à partir des informations fournies par l''utilisateur. Le projet vise à faciliter l''accès à l''information médicale en combinant analyse de données, IA et une interface moderne, accessible et intuitive.', 
'["Application web", "Full-Stack", "AI"]'::jsonb, 'Web Development', true, 'completed', 1,
'["CuraConnect est un projet académique réalisé dans le cadre d''une formation en ingénierie informatique. L''objectif était de concevoir une application capable de proposer des recommandations médicales personnalisées à partir des informations fournies par l''utilisateur, tout en garantissant clarté et accessibilité."]'::text[],
'["Analyse des données utilisateurs", "Génération de recommandations médicales via IA", "Interface moderne et responsive", "Communication sécurisée avec une API"]'::text[],
'Développeur Full-Stack & IA',
'{"Frontend": ["Next.js", "Tailwind CSS"], "Backend": ["API REST"], "IA": ["OpenAI API"], "Outils": ["Git", "GitHub", "Postman"]}'::jsonb,
'2024-02-01'),
('Portfolio Website', 'Personal portfolio website built with Nuxt.js and Supabase', 'A modern, responsive portfolio website showcasing my projects, skills, and experience. Built using Nuxt.js for the frontend and Supabase for the backend database and authentication.', '["Nuxt.js", "Vue.js", "TypeScript", "Supabase", "TailwindCSS"]'::jsonb, 'Web Development', true, 'completed', 2,
'["Créer un portfolio moderne et professionnel pour présenter mes compétences et projets", "Mettre en place une architecture scalable et maintenable"]'::text[],
'["Interface responsive et moderne", "Système de gestion de contenu dynamique", "Intégration avec Supabase pour la base de données"]'::text[],
'Développeur Full-Stack',
'{"Frontend": ["Nuxt.js", "Vue.js", "TypeScript", "TailwindCSS"], "Backend": ["Supabase", "PostgreSQL"]}'::jsonb,
NULL),
('E-commerce Platform', 'Full-stack e-commerce solution with payment integration', 'A complete e-commerce platform featuring product catalog, shopping cart, secure checkout, and order management. Integrated with Stripe for payment processing.', '["React", "Node.js", "Express", "MongoDB", "Stripe"]'::jsonb, 'Web Development', true, 'completed', 3,
'["Développer une plateforme e-commerce complète et sécurisée", "Intégrer un système de paiement fiable"]'::text[],
'["Catalogue de produits dynamique", "Panier d''achat et système de checkout", "Intégration Stripe pour les paiements", "Gestion des commandes"]'::text[],
'Développeur Full-Stack',
'{"Frontend": ["React", "Redux"], "Backend": ["Node.js", "Express", "MongoDB"], "Paiement": ["Stripe API"]}'::jsonb,
NULL),
('Task Management App', 'Collaborative task management application', 'A collaborative task management tool allowing teams to organize projects, assign tasks, and track progress in real-time.', '["Vue.js", "Firebase", "Vuex", "TailwindCSS"]'::jsonb, 'Web Development', false, 'completed', 4,
'["Créer un outil de gestion de tâches collaboratif", "Permettre le suivi en temps réel des projets"]'::text[],
'["Organisation de projets par équipes", "Attribution de tâches", "Suivi en temps réel", "Notifications"]'::text[],
'Développeur Frontend',
'{"Frontend": ["Vue.js", "Vuex", "TailwindCSS"], "Backend": ["Firebase"]}'::jsonb,
NULL);

-- Sample skills
INSERT INTO skills (name, category, proficiency_level, years_of_experience, order_index) VALUES
-- Frontend
('Vue.js', 'Frontend', 5, 3.5, 1),
('React', 'Frontend', 4, 2.5, 2),
('TypeScript', 'Frontend', 4, 3.0, 3),
('HTML/CSS', 'Frontend', 5, 5.0, 4),
('TailwindCSS', 'Frontend', 4, 2.0, 5),
-- Backend
('Node.js', 'Backend', 4, 3.0, 6),
('Express.js', 'Backend', 4, 2.5, 7),
('PostgreSQL', 'Backend', 4, 2.0, 8),
('MongoDB', 'Backend', 3, 1.5, 9),
-- Tools
('Git', 'Tools', 5, 4.0, 10),
('Docker', 'Tools', 3, 1.5, 11),
('Supabase', 'Tools', 4, 1.0, 12);

-- Sample experience
INSERT INTO experience (company_name, position, description, start_date, end_date, is_current, location, achievements) VALUES
('Tech Company Inc.', 'Full Stack Developer', 'Developed and maintained web applications using modern JavaScript frameworks.', '2022-01-01', NULL, true, 'Paris, France', '["Led migration to Nuxt.js framework", "Improved application performance by 40%", "Mentored junior developers"]'::jsonb),
('Startup XYZ', 'Frontend Developer', 'Built responsive user interfaces and implemented new features.', '2020-06-01', '2021-12-31', false, 'Remote', '["Implemented design system", "Reduced page load time by 30%", "Collaborated with design team"]'::jsonb);

-- Sample education
INSERT INTO education (institution, degree, field_of_study, description, start_date, end_date, is_current, location) VALUES
('University of Technology', 'Master''s Degree', 'Computer Science', 'Specialized in software engineering and web development.', '2018-09-01', '2020-06-30', false, 'Paris, France'),
('Engineering School', 'Bachelor''s Degree', 'Information Technology', 'Studied fundamentals of computer science and programming.', '2015-09-01', '2018-06-30', false, 'Lyon, France');

-- Sample services
INSERT INTO services (title, slug, category, subtitle, description, problems_addressed, solutions, benefits, tech_stack, approach, status, featured, order_index) VALUES
(
    'Développement IA & Automatisation',
    'ia-automatisation',
    'AI & Automation',
    'Modèles d''intelligence artificielle et automatisation de processus',
    'Développement de solutions d''intelligence artificielle et d''automatisation pour optimiser vos processus métier, réduire les coûts et améliorer la prise de décision.',
    '["Processus manuels chronophages", "Décisions peu ou pas orientées données", "Données sous-exploitées"]'::jsonb,
    '["IA prédictive", "NLP / Chatbots", "Workflows automatisés", "APIs intelligentes"]'::jsonb,
    '["Réduction des coûts opérationnels", "Gain de temps opérationnel", "Aide à la prise de décision basée sur les données"]'::jsonb,
    '["Python", "TensorFlow", "scikit-learn", "NLP", "APIs REST"]'::jsonb,
    '["Analyse des besoins métier", "Conception de modèles IA adaptés", "Intégration dans l''infrastructure existante", "Formation et documentation"]'::jsonb,
    'active',
    true,
    1
),
(
    'Développement Full Stack',
    'full-stack',
    'Web Development',
    'Frontend moderne et Backend robuste pour applications scalables',
    'Développement d''applications web complètes, du frontend au backend, avec une architecture scalable et maintenable.',
    '["Applications legacy difficiles à maintenir", "Performances médiocres", "Manque de scalabilité"]'::jsonb,
    '["Frontend moderne (Vue.js, React)", "Backend robuste (Spring Boot)", "APIs REST sécurisées", "Architecture microservices"]'::jsonb,
    '["Code maintenable et testé", "Applications performantes", "Architecture évolutive", "Sécurité renforcée"]'::jsonb,
    '["Vue.js", "React", "TypeScript", "Spring Boot", "PostgreSQL", "APIs REST"]'::jsonb,
    '["Architecture scalable", "Tests automatisés", "Intégration continue", "Code maintenable", "Sécurité & authentification"]'::jsonb,
    'active',
    true,
    2
),
(
    'Product Owner / Stakeholder',
    'product-owner',
    'Product Management',
    'Vision produit et coordination des acteurs',
    'Accompagnement dans la définition de la vision produit, la coordination des équipes techniques et métier, et la gestion du backlog produit.',
    '["Manque de vision produit claire", "Communication difficile entre équipes tech et métier", "Priorisation inefficace"]'::jsonb,
    '["Compréhension des enjeux métier", "Traduction des besoins en solutions techniques", "Collaboration équipes techniques et business"]'::jsonb,
    '["Vision produit alignée avec les objectifs business", "Meilleure communication inter-équipes", "Priorisation optimisée"]'::jsonb,
    '[]'::jsonb,
    '["Gestion de backlog", "Rédaction de user stories", "Méthodes agiles (Scrum)", "Facilitation des cérémonies agiles"]'::jsonb,
    'in_development',
    false,
    3
);

-- Note: Contact messages are not seeded as they should come from actual user submissions
