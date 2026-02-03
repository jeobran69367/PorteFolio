# Admin Project Management System

Ce document décrit le système de gestion des projets pour l'administrateur du portfolio.

## Fonctionnalités

### 1. Authentification
- Page de connexion: `/admin/login`
- Authentification sécurisée via Supabase Auth
- Protection des routes admin par middleware

### 2. Gestion des Projets
- Page de gestion: `/admin/projets`
- Fonctionnalités CRUD complètes:
  - **Créer** un nouveau projet
  - **Modifier** un projet existant
  - **Supprimer** un projet (avec confirmation)
  - **Lister** tous les projets

### 3. Gestion des Images
- Upload d'images pour chaque projet
- Stockage sécurisé via Supabase Storage (bucket `project-images`)
- Prévisualisation des images avant upload
- Suppression automatique des anciennes images lors de la mise à jour
- Affichage des images sur la page publique des projets

### 4. Formulaire de Projet
Le formulaire permet de saisir:
- **Titre** (requis)
- **Description courte** (requis)
- **Description détaillée**
- **Image** (upload de fichier)
- **Technologies** (séparées par des virgules)
- **Objectifs** (un par ligne)
- **Solutions** (un par ligne)
- **URLs** (projet et GitHub)
- **Catégorie**
- **Statut** (Terminé, En cours, Planifié)
- **Dates** (début et fin)
- **Projet en vedette** (checkbox)

## Configuration

### Base de données
La migration pour le storage bucket est dans:
```
supabase/migrations/20260203000001_create_project_images_storage.sql
```

Cette migration:
- Crée le bucket `project-images`
- Configure les politiques RLS pour le stockage
- Permet l'accès public en lecture
- Restreint l'écriture aux utilisateurs authentifiés

### Middleware
Le middleware `auth.ts` protège toutes les routes admin:
- Vérifie la session Supabase
- Redirige vers `/admin/login` si non authentifié

## Utilisation

### Première connexion
1. Créer un utilisateur admin dans Supabase Auth
2. Se connecter via `/admin/login`
3. Accéder à `/admin/projets` pour gérer les projets

### Créer un projet
1. Cliquer sur "Nouveau Projet"
2. Remplir le formulaire
3. (Optionnel) Télécharger une image
4. Cliquer sur "Enregistrer"

### Modifier un projet
1. Cliquer sur "Modifier" sur le projet souhaité
2. Modifier les champs nécessaires
3. (Optionnel) Changer l'image
4. Cliquer sur "Enregistrer"

### Supprimer un projet
1. Cliquer sur "Supprimer" sur le projet souhaité
2. Confirmer la suppression dans la modal
3. Le projet et son image seront supprimés

## Sécurité

- Toutes les routes admin sont protégées par authentification
- Les politiques RLS Supabase contrôlent l'accès aux données
- Seuls les utilisateurs authentifiés peuvent créer/modifier/supprimer des projets
- Les images sont stockées dans un bucket Supabase sécurisé
- Le stockage est en lecture publique, écriture authentifiée uniquement

## Structure des fichiers

```
pages/admin/
  ├── login.vue           # Page de connexion
  └── projets.vue         # Page de gestion des projets

middleware/
  └── auth.ts             # Middleware d'authentification

composables/
  └── useDatabase.ts      # Méthodes CRUD et storage

supabase/migrations/
  └── 20260203000001_create_project_images_storage.sql
```

## Notes techniques

- Framework: Nuxt 3
- Base de données: Supabase (PostgreSQL)
- Authentification: Supabase Auth
- Stockage: Supabase Storage
- UI: TailwindCSS
