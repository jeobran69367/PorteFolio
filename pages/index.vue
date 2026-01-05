<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-6">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-text-primary mb-4 font-satoshi">Portfolio Design System</h1>
      <p class="text-xl text-text-secondary mb-8 font-inter">
        Système de design moderne pour portfolio
      </p>
      <Button variant="primary" icon="arrow" @click="navigateToDesignSystem">
        Voir le Design System
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const navigateToDesignSystem = () => {
  navigateTo('/design-system')
}
</script>
