<template>
  <main class="min-h-screen flex items-center justify-center bg-gray-50 p-6">
    <section class="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
      <header class="mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">Interface d'administration</h1>
        <p class="mt-1 text-sm text-gray-500">Panneau de contrôle — choisissez une section pour gérer le contenu.</p>
      </header>

  <nav aria-label="Panneau d'administration" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          @click="goTo('/admin/certification')"
          class="flex flex-col items-start gap-2 p-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Gérer les certifications"
        >
          <div class="flex items-center gap-3 w-full">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7 7h10v10H7z"></path>
            </svg>
            <span class="font-medium">Certifications</span>
          </div>
          <small class="text-indigo-100 text-xs">Ajouter, modifier ou supprimer des certifications</small>
        </button>
        <button
          @click="goTo('/admin/projets')"
          class="flex flex-col items-start gap-2 p-4 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Gérer les projets"
        >
          <div class="flex items-center gap-3 w-full">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18"></path>
            </svg>
            <span class="font-medium">Projets</span>
          </div>
          <small class="text-emerald-100 text-xs">Gérer la liste de projets, images et contenus associés</small>
        </button>
        <button
          @click="goTo('/admin/services')"
          class="flex flex-col items-start gap-2 p-4 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Gérer les services"
        >
          <div class="flex items-center gap-3 w-full">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h18M3 12h18M3 17h18"></path>
            </svg>
            <span class="font-medium">Services</span>
          </div>
          <small class="text-emerald-100 text-xs">Gérer la liste de services, images et contenus associés</small>
        </button>

  <!-- Utilisateurs tile removed as requested -->
      </nav>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

async function goTo(path: string) {
  try {
    await router.push(path)
  } catch (err) {
    // navigation failed (for example a redundant navigation), log for debugging
    // keep user on current page; in the future we could show a toast notification
    // eslint-disable-next-line no-console
    console.warn('Navigation error:', err)
  }
}

</script>
