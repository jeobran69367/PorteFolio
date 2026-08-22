<template>
  <header class="fixed left-0 right-0 top-4 z-50 px-4">
    <div class="flex justify-center">
      <div
        :class="[
          'w-full max-w-[1280px] h-16 rounded-full flex items-center justify-between px-4 md:px-6 transition-colors duration-300',
          isDark ? 'bg-[#141416]/90 backdrop-blur-md border border-border-light' : 'bg-white/90 backdrop-blur-md border border-[#E5E5E5]',
        ]"
      >
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2 md:gap-3 flex-shrink-0" aria-label="Accueil Jeobran k">
          <div class="w-7 h-7 md:w-8 md:h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <img src="/img/Vector.png" alt="logo" class="w-7 h-7 md:w-8 md:h-8 object-contain" />
          </div>
          <span :class="['text-lg md:text-[24px] font-semibold whitespace-nowrap', isDark ? 'text-white' : 'text-[#0E0E10]']">
            Jeobran k
          </span>
        </router-link>

        <!-- Links -->
        <nav class="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="[
              'relative text-sm xl:text-base whitespace-nowrap transition-colors',
              isDark ? 'text-white' : 'text-[#0E0E10]',
              isActive(link.to) ? '' : '',
            ]"
          >
            <span class="relative">
              {{ link.label }}
              <span
                v-if="isActive(link.to)"
                class="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent-blue"
              ></span>
            </span>
          </router-link>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <button
            class="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-base font-medium transition-all hover:scale-[1.03]"
            :class="isDark ? 'bg-white text-[#0E0E10] hover:brightness-95' : 'bg-[#0E0E10] text-white hover:bg-[#0B0B0C]'"
            @click="$emit('open-contact')"
          >
            <span>Me contacter</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <button
            :class="['w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-colors', isDark ? 'bg-[#0B0B0C] text-white' : 'bg-[#E5E5E5] text-[#0E0E10]']"
            @click="toggleTheme"
            aria-label="Changer de thème"
          >
            <!-- Sun icon (light mode) -->
            <svg v-if="!isDark" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 4a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm0 13a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM4 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm13 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM6.34 6.34a1 1 0 0 1 1.41 0l0.71 0.71a1 1 0 1 1-1.41 1.41L6.34 7.75a1 1 0 0 1 0-1.41zm10.9 10.9a1 1 0 0 1 1.41 0l0.71 0.71a1 1 0 1 1-1.41 1.41l-0.71-0.71a1 1 0 0 1 0-1.41zM6.34 17.66a1 1 0 0 1 0 1.41l-0.71 0.71a1 1 0 1 1-1.41-1.41l0.71-0.71a1 1 0 0 1 1.41 0zM17.66 6.34a1 1 0 0 1 0 1.41l-0.71 0.71a1 1 0 1 1-1.41-1.41l0.71-0.71a1 1 0 0 1 1.41 0zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
            <!-- Moon icon (dark mode) -->
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <!-- Mobile menu toggle -->
          <button
            :class="['lg:hidden p-2 rounded-lg flex-shrink-0', isDark ? 'text-white' : 'text-[#0E0E10]']"
            @click="showMenu = !showMenu"
            aria-label="Ouvrir le menu"
          >
            <svg v-if="!showMenu" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div
        v-if="showMenu"
        :class="['lg:hidden mt-2 mx-4 rounded-2xl overflow-hidden shadow-2xl', isDark ? 'bg-[#141416] border border-border-light' : 'bg-white border border-[#E5E5E5]']"
      >
        <div class="px-6 py-4 space-y-3">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            @click="closeMenu"
            :to="link.to"
            :class="[
              'flex items-center justify-between py-2 border-b border-border-light/40 transition-colors',
              isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]',
            ]"
          >
            {{ link.label }}
            <svg v-if="isActive(link.to)" width="16" height="16" viewBox="0 0 20 20" fill="none" class="text-accent-blue">
              <path d="M5 10l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </router-link>
          <div class="pt-2">
            <button
              :class="['w-full rounded-xl px-4 py-3 font-semibold', isDark ? 'bg-white text-[#0E0E10]' : 'bg-[#0E0E10] text-white']"
              @click="() => { $emit('open-contact'); closeMenu() }"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const showMenu = ref(false)
const isDark = ref(false)
const route = useRoute()

const navLinks = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/propos' },
  { label: 'Projets', to: '/projets' },
  { label: 'Services', to: '/services' },
  { label: 'Ressources', to: '/ressources' },
]

const isActive = (to: string) => {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

const applyTheme = (dark: boolean) => {
  isDark.value = dark
  if (dark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    applyTheme(true)
  } else if (saved === 'light') {
    applyTheme(false)
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark)
  }
})

const toggleTheme = () => {
  applyTheme(!isDark.value)
}

const closeMenu = () => { showMenu.value = false }
</script>
