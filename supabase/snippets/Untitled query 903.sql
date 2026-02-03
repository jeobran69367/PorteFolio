BEGIN;

-- IA & Automatisation (impact business)
INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'ia_automation', 'problems', 'Optimisation du temps et des coûts', 1),
  (NULL, 'ia_automation', 'problems', 'Décisions peu orientées données', 2),
  (NULL, 'ia_automation', 'problems', 'Données sous-exploitées', 3);

INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'ia_automation', 'solutions', 'IA prédictive', 1),
  (NULL, 'ia_automation', 'solutions', 'NLP & chatbots', 2),
  (NULL, 'ia_automation', 'solutions', 'Workflows automatisés', 3),
  (NULL, 'ia_automation', 'solutions', 'APIs intelligentes', 4);

INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'ia_automation', 'benefits', 'Réduction des coûts', 1),
  (NULL, 'ia_automation', 'benefits', 'Gain de temps opérationnel', 2),
  (NULL, 'ia_automation', 'benefits', 'Meilleure aide à la décision', 3);

-- Développement Full-Stack (exemple)
INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'full_stack', 'frontend', 'Vue.js', 1),
  (NULL, 'full_stack', 'frontend', 'React', 2),
  (NULL, 'full_stack', 'frontend', 'JavaScript / TypeScript', 3);

INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'full_stack', 'backend', 'Spring Boot', 1),
  (NULL, 'full_stack', 'backend', 'APIs REST', 2),
  (NULL, 'full_stack', 'backend', 'Sécurité & authentification', 3);

INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'full_stack', 'approche', 'Code maintainable', 1),
  (NULL, 'full_stack', 'approche', 'Architecture scalable', 2),
  (NULL, 'full_stack', 'approche', 'Tests automatisés', 3),
  (NULL, 'full_stack', 'approche', 'Intégration continue', 4);

-- Product Owner / Chef de projet (exemple)
INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'product_owner', 'apports', 'Compréhension des besoins métier', 1),
  (NULL, 'product_owner', 'apports', 'Traduction fonctionnelle → technique', 2),
  (NULL, 'product_owner', 'apports', 'Coordination équipes techniques et business', 3),
  (NULL, 'product_owner', 'apports', 'Gouvernance d’un SI', 4);

INSERT INTO public.features (service_id, section, feature_column, content, order_index) VALUES
  (NULL, 'product_owner', 'competences', 'Définir et piloter la stratégie d’un SI', 1),
  (NULL, 'product_owner', 'competences', 'Piloter des projets informatiques', 2),
  (NULL, 'product_owner', 'competences', 'Concevoir des architectures applicatives', 3);

COMMIT;