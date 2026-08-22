<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'fr' },
  title: 'Jeobran Nathanael Kombou — Développeur Full-Stack · IA · Product Owner',
  meta: [
    {
      name: 'description',
      content:
        'Portfolio de Jeobran Nathanael Kombou, développeur Full-Stack spécialisé en IA, automatisation et applications web. Découvrez mes services, projets et ressources téléchargeables.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#0B0B0C' },
    { name: 'author', content: 'Jeobran Nathanael Kombou' },
    { property: 'og:title', content: 'Jeobran Nathanael Kombou — Développeur Full-Stack' },
    {
      property: 'og:description',
      content:
        'Développeur Full-Stack, IA & Product Owner. Services, projets et ressources téléchargeables.',
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
