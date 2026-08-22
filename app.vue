<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'fr' },
  title: 'Jeobran Nathanael Kombou — Chef de projet & Développeur Full-Stack',
  meta: [
    {
      name: 'description',
      content:
        'Chef de projet hybride et développeur full-stack : pilotage de projets digitaux, product management, développement web et IA. Découvrez mes services, études de cas et ressources.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0B0B0C' },
    { name: 'author', content: 'Jeobran Nathanael Kombou' },
    { property: 'og:title', content: 'Jeobran Nathanael Kombou — Chef de projet & Développeur Full-Stack' },
    {
      property: 'og:description',
      content:
        'Chef de projet & expert technique. Pilotage de projets, product management, développement et IA. Services détaillés et ressources téléchargeables.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'fr_FR' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'canonical', href: 'https://jeobrank.com/' },
  ],
})
</script>
