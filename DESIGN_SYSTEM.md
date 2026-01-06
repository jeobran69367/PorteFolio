# Design System Documentation

Ce projet contient un système de design complet pour un portfolio moderne avec des composants réutilisables.

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Primary CTA**: `#E5E5E5` - Boutons principaux
- **Primary CTA Hover**: `#FFFFFF` - État hover des boutons principaux
- **Primary CTA Text**: `#0E0E10` - Texte sur boutons principaux

### Couleurs d'Interface
- **Background**: `#0B0B0C` - Arrière-plan principal
- **Surface**: `#141416` - Surfaces (cards, sections)
- **Hover**: `#1E1E20` - État hover des éléments actifs

### Bordures
- **Border Light**: `#2A2A2C` - Bordures légères
- **Border Strong**: `#3A3A3D` - Bordures fortes

### Texte
- **Text Primary**: `#FFFFFF` - Texte principal
- **Text Secondary**: `#DADADA` - Texte secondaire
- **Text Muted**: `#0E0E10` - Texte atténué

### Couleurs d'État
- **Success**: `#10B981` - Succès, disponibilité

### Accents
- **Accent Blue**: `#3B82F6`
- **Accent Yellow**: `#E5D62E`

## 📝 Typographie

Le système utilise des polices système optimisées pour une meilleure compatibilité:

- **Font Satoshi**: Utilisée pour les titres et éléments importants
- **Font Inter**: Utilisée pour le corps de texte et descriptions

## 🧩 Composants

### Button Component

Composant bouton polyvalent avec plusieurs variantes.

**Props:**
- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (défaut: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (défaut: `'md'`)
- `icon`: `'arrow' | 'download' | null` (défaut: `null`)
- `type`: `'button' | 'submit' | 'reset'` (défaut: `'button'`)

**Exemples:**
```vue
<Button variant="primary" icon="arrow">Me contacter</Button>
<Button variant="outline" icon="download">Télécharger mon CV</Button>
<Button variant="ghost" size="sm">Voir plus</Button>
```

### Badge Component

Composant badge pour afficher des statuts, technologies, et dates.

**Props:**
- `type`: `'availability' | 'tech' | 'date'` (défaut: `'tech'`)
- `variant`: `'primary' | 'secondary' | 'muted'` (défaut: `'primary'`)

**Exemples:**
```vue
<Badge type="availability">Disponible pour un appel</Badge>
<Badge type="tech" variant="primary">Vue.js</Badge>
<Badge type="date" variant="secondary">Nov 2025</Badge>
```

### CardProject Component

Composant carte projet avec support de slots pour personnalisation.

**Props:**
- `date`: `string` (optionnel)
- `dateVariant`: `'primary' | 'secondary' | 'muted'` (défaut: `'primary'`)
- `hasImage`: `boolean` (défaut: `true`)

**Slots:**
- `header`: En-tête de la carte
- `image`: Zone d'image
- `title`: Titre du projet
- `description`: Description du projet
- `technologies`: Badges de technologies
- `actions`: Boutons d'action

**Exemple:**
```vue
<CardProject date="Nov 2025" date-variant="primary">
  <template #image>
    <img src="project.jpg" alt="Project" />
  </template>
  <template #title>Application Mobile</template>
  <template #description>
    Description du projet...
  </template>
  <template #technologies>
    <Badge type="tech">Vue.js</Badge>
    <Badge type="tech">PostgreSQL</Badge>
  </template>
</CardProject>
```

## 🚀 Utilisation

### Démarrage du projet

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour production
npm run build
```

### Accéder au Design System

Naviguez vers `/design-system` pour voir tous les composants et leurs variations.

## 🎯 Bonnes Pratiques

1. **Utilisez les couleurs du système**: Référencez toujours les couleurs Tailwind définies dans `tailwind.config.js`
2. **Composants réutilisables**: Privilégiez l'utilisation des composants existants
3. **Responsive**: Tous les composants sont conçus pour être responsive
4. **Accessibilité**: Les composants respectent les standards d'accessibilité

## 📁 Structure du Projet

```
├── components/
│   ├── Button.vue          # Composant bouton
│   ├── Badge.vue           # Composant badge
│   └── CardProject.vue     # Composant carte projet
├── pages/
│   ├── index.vue           # Page d'accueil
│   └── design-system.vue   # Showcase du design system
├── assets/
│   └── css/
│       └── tailwind.css    # Configuration Tailwind
└── tailwind.config.js      # Configuration couleurs
```

## 🔧 Technologies

- **Nuxt 3**: Framework Vue.js
- **TypeScript**: Typage statique
- **Tailwind CSS**: Framework CSS utilitaire
- **Vue 3**: Framework JavaScript réactif
