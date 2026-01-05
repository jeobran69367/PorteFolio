<template>
  <div class="min-h-screen bg-background py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-text-primary mb-2 font-satoshi">Design System</h1>
      <p class="text-text-secondary mb-12 font-inter">Composants > Design System</p>

      <!-- Colors Section -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-text-primary mb-6 font-satoshi">Couleurs</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div class="bg-primary-cta h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Primary CTA</p>
            <p class="text-xs text-text-secondary">#E5E5E5</p>
          </div>
          <div>
            <div class="bg-hover h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Hover / Active Elements</p>
            <p class="text-xs text-text-secondary">#1E1E20</p>
          </div>
          <div>
            <div class="bg-border-light h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Border Light</p>
            <p class="text-xs text-text-secondary">#2A2A2C</p>
          </div>
          <div>
            <div class="bg-primary-cta-hover h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Primary CTA Hover</p>
            <p class="text-xs text-text-secondary">#FFFFFF</p>
          </div>
          <div>
            <div class="bg-success h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Success</p>
            <p class="text-xs text-text-secondary">#10B981</p>
          </div>
          <div>
            <div class="bg-border-strong h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Border Strong</p>
            <p class="text-xs text-text-secondary">#3A3A3D</p>
          </div>
          <div>
            <div class="bg-primary-cta-text h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Primary CTA Text</p>
            <p class="text-xs text-text-secondary">#0E0E10</p>
          </div>
          <div>
            <div class="bg-accent-blue h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Accent Blue</p>
            <p class="text-xs text-text-secondary">#3B82F6</p>
          </div>
          <div>
            <div class="bg-accent-yellow h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Accent Yellow</p>
            <p class="text-xs text-text-secondary">#E5D62E</p>
          </div>
          <div>
            <div class="bg-background h-24 rounded-lg mb-2 border border-border-light"></div>
            <p class="text-sm text-text-primary">Background</p>
            <p class="text-xs text-text-secondary">#0B0B0C</p>
          </div>
          <div>
            <div class="bg-text-primary h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Text Primary</p>
            <p class="text-xs text-text-secondary">#FFFFFF</p>
          </div>
          <div>
            <div class="bg-surface h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Surfaces</p>
            <p class="text-xs text-text-secondary">#141416</p>
          </div>
          <div>
            <div class="bg-text-secondary h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Text Secondary</p>
            <p class="text-xs text-text-secondary">#DADADA</p>
          </div>
          <div>
            <div class="bg-text-muted h-24 rounded-lg mb-2"></div>
            <p class="text-sm text-text-primary">Text Muted</p>
            <p class="text-xs text-text-secondary">#0E0E10</p>
          </div>
        </div>
      </section>

      <!-- Typography Section -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-text-primary mb-6 font-satoshi">Typographie</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Satoshi -->
          <div class="bg-surface p-6 rounded-xl border border-border-light">
            <h3 class="text-xl font-bold text-text-primary mb-4 font-satoshi">Satoshi Font Family</h3>
            <p class="text-text-secondary mb-4 font-satoshi">
              Typographie géométrique, moderne et impactante.<br />
              Elle apporte un style premium, clair et affirmé aux titres, parfaite pour un portfolio tech ou design.
            </p>
            <p class="text-text-secondary mb-4 font-satoshi">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm<br />
              Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz<br />
              1234567890
            </p>
            <div class="space-y-2">
              <p class="text-text-secondary font-satoshi">Regular</p>
              <p class="text-text-primary font-satoshi font-medium">Medium</p>
              <p class="text-text-primary font-satoshi font-bold">Bold</p>
            </div>
            <div class="mt-6">
              <p class="text-6xl font-satoshi font-bold">Aa Bb</p>
            </div>
          </div>

          <!-- Inter -->
          <div class="bg-surface p-6 rounded-xl border border-border-light">
            <h3 class="text-xl font-bold text-text-primary mb-4 font-inter">Inter Font Family</h3>
            <p class="text-text-secondary mb-4 font-inter">
              Typographie optimisée pour le digital, sobre et extrêmement lisible.<br />
              Son neutralité la rend idéale pour les paragraphes, descriptions et contenus longs.
            </p>
            <p class="text-text-secondary mb-4 font-inter">
              Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn<br />
              Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz<br />
              1234567890
            </p>
            <div class="space-y-2">
              <p class="text-text-secondary font-inter">Regular</p>
              <p class="text-text-primary font-inter font-medium">Medium</p>
              <p class="text-text-primary font-inter font-bold">Bold</p>
            </div>
            <div class="mt-6">
              <p class="text-6xl font-inter font-bold">Aa Bb</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Buttons Section -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-text-primary mb-6 font-satoshi">Composants > Button and hover effect</h2>
        
        <div class="space-y-8">
          <!-- Primary Buttons with Icon -->
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-4 font-satoshi">Primary with Arrow Icon</h3>
            <div class="flex flex-wrap gap-4">
              <Button variant="primary" icon="arrow">Me contacter</Button>
              <Button variant="primary" icon="arrow">Voir d'autres projets</Button>
            </div>
          </div>

          <!-- Secondary/Muted Buttons -->
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-4 font-satoshi">Secondary/Muted Variants</h3>
            <div class="flex flex-wrap gap-4">
              <Button variant="ghost" icon="arrow">Me contacter</Button>
              <Button variant="ghost" icon="arrow">Voir d'autres projets</Button>
            </div>
          </div>

          <!-- Outline Buttons -->
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-4 font-satoshi">Outline Variants</h3>
            <div class="flex flex-wrap gap-4">
              <Button variant="outline" icon="arrow">Voir plus d'expériences</Button>
              <Button variant="outline" icon="download">Télécharger mon CV</Button>
            </div>
          </div>

          <!-- Different Sizes -->
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-4 font-satoshi">Button Sizes</h3>
            <div class="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm" icon="arrow">Small</Button>
              <Button variant="primary" size="md" icon="arrow">Medium</Button>
              <Button variant="primary" size="lg" icon="arrow">Large</Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Badges Section -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-text-primary mb-6 font-satoshi">Composants > Badge</h2>
        
        <div class="space-y-8">
          <!-- Availability Badges -->
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-4 font-satoshi">Availability Status</h3>
            <div class="flex flex-wrap gap-3">
              <Badge type="availability">Disponible pour un appel</Badge>
            </div>
          </div>

          <!-- Tech Stack Badges -->
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-4 font-satoshi">Technology Stack</h3>
            <div class="space-y-3">
              <div class="flex flex-wrap gap-2">
                <Badge type="tech" variant="primary">Vue.js</Badge>
                <Badge type="tech" variant="primary">PostgreSQL</Badge>
                <Badge type="tech" variant="primary">Vuetify</Badge>
              </div>
              <div class="flex flex-wrap gap-2">
                <Badge type="tech" variant="secondary">Vue.js</Badge>
                <Badge type="tech" variant="secondary">PostgreSQL</Badge>
                <Badge type="tech" variant="secondary">Vuetify</Badge>
              </div>
              <div class="flex flex-wrap gap-2">
                <Badge type="tech" variant="muted">Vue.js</Badge>
                <Badge type="tech" variant="muted">PostgreSQL</Badge>
                <Badge type="tech" variant="muted">Vuetify</Badge>
              </div>
            </div>
          </div>

          <!-- Date Badges -->
          <div>
            <h3 class="text-lg font-medium text-text-primary mb-4 font-satoshi">Date Badges</h3>
            <div class="flex flex-wrap gap-3">
              <Badge type="date" variant="primary">Nov 2025</Badge>
              <Badge type="date" variant="secondary">Nov 2025</Badge>
            </div>
          </div>
        </div>
      </section>

      <!-- Card Project Section -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-text-primary mb-6 font-satoshi">Composants > Card Projet</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card with Light Date Badge -->
          <CardProject date="Nov 2025" date-variant="secondary">
            <template #image>
              <div class="w-full h-full bg-surface flex items-center justify-center">
                <span class="text-text-muted">Project Image</span>
              </div>
            </template>
            <template #title>Application Mobile</template>
            <template #description>
              Une application mobile innovante développée avec les dernières technologies pour offrir une expérience utilisateur exceptionnelle.
            </template>
            <template #technologies>
              <Badge type="tech" variant="muted">Vue.js</Badge>
              <Badge type="tech" variant="muted">PostgreSQL</Badge>
              <Badge type="tech" variant="muted">Vuetify</Badge>
            </template>
          </CardProject>

          <!-- Card with Dark Date Badge -->
          <CardProject date="Nov 2025" date-variant="primary">
            <template #image>
              <div class="w-full h-full bg-surface flex items-center justify-center">
                <span class="text-text-muted">Project Image</span>
              </div>
            </template>
            <template #title>Application Mobile</template>
            <template #description>
              Une application mobile innovante développée avec les dernières technologies pour offrir une expérience utilisateur exceptionnelle.
            </template>
            <template #technologies>
              <Badge type="tech" variant="primary">Vue.js</Badge>
              <Badge type="tech" variant="primary">PostgreSQL</Badge>
              <Badge type="tech" variant="primary">Vuetify</Badge>
            </template>
          </CardProject>
        </div>
      </section>

      <!-- Interactive Demo -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-text-primary mb-6 font-satoshi">Interactive Components Demo</h2>
        
        <div class="bg-surface p-8 rounded-xl border border-border-light">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-text-primary mb-3 font-satoshi">Hover over buttons to see effects</h3>
              <div class="flex flex-wrap gap-4">
                <Button variant="primary" icon="arrow">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-medium text-text-primary mb-3 font-satoshi">Status Badge</h3>
              <Badge type="availability">Disponible pour un appel</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page demonstrating the design system components
</script>
