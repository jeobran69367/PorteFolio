<template>
  <header class="fixed left-0 right-0 top-4 z-50 px-4">
    <div class="flex justify-center">
      <div :class="[
        'w-full max-w-[1280px] h-16 rounded-full flex items-center justify-between px-4 md:px-6',
        isDark ? 'bg-[#141416] border border-border-light' : 'bg-white border border-[#E5E5E5]'
      ]">
        <!-- Logo -->
        <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <div class="w-7 h-7 md:w-8 md:h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <img src="../public/img/Vector.png" alt="logo" class="w-7 h-7 md:w-8 md:h-8 object-contain" />
          </div>
          <span :class="['text-lg md:text-[24px] font-semibold whitespace-nowrap', isDark ? 'text-white' : 'text-[#0E0E10]']">Jeobran k</span>
        </div>

        <!-- Links -->
        <nav class="hidden lg:flex items-center justify-center gap-6 xl:gap-8 flex-1">
          <router-link :to="{ path: '/' }" :class="['text-sm xl:text-base whitespace-nowrap', isDark ? 'text-white' : 'text-[#0E0E10]']">Accueil</router-link>
          <router-link :to="{ path: '/propos' }" :class="['text-sm xl:text-base whitespace-nowrap', isDark ? 'text-white' : 'text-[#0E0E10]']">A propos</router-link>
          <router-link :to="{ path: '/projets' }" :class="['text-sm xl:text-base whitespace-nowrap', isDark ? 'text-white' : 'text-[#0E0E10]']">Projets</router-link>
          <router-link :to="{ path: '/services' }" :class="['text-sm xl:text-base whitespace-nowrap', isDark ? 'text-white' : 'text-[#0E0E10]']">Services</router-link>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <div class="hidden lg:block">
            <button :class="[
              'rounded-md px-4 py-2 md:px-5 md:py-2.5 text-base md:text-[18px] font-medium flex items-center gap-2 whitespace-nowrap',
              isDark ? 'bg-white text-[#0E0E10]' : 'bg-[#0E0E10] text-white'
            ]" @click="$emit('open-contact')">
              <span>Me contacter</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>

          <button :class="['w-10 h-10 md:w-11 md:h-11 rounded-md flex items-center justify-center flex-shrink-0', isDark ? 'bg-[#0B0B0C]' : 'bg-[#E5E5E5]']" @click="toggleTheme" aria-label="Toggle theme">
            <svg v-if="!isDark" width="16" height="16" viewBox="0 0 20 20" fill="none" :class="isDark ? 'text-white' : 'text-[#0E0E10]'"><circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="2"/></svg>
            <svg v-else width="16" height="16" viewBox="0 0 20 20" fill="none" :class="isDark ? 'text-white' : 'text-[#0E0E10]'"><path d="M14.53 15.47A7 7 0 0 1 8.53 3.47 7 7 0 1 0 14.53 15.47z" stroke="currentColor" stroke-width="1.2" fill="currentColor" opacity="0.06"/></svg>
          </button>

          <button :class="['lg:hidden p-2 rounded-lg flex-shrink-0', isDark ? 'text-white' : 'text-[#0E0E10]']" @click="showMenu = !showMenu" aria-label="Open menu">
            <svg v-if="!showMenu" width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showMenu" :class="['lg:hidden mt-2 mx-4 rounded-2xl overflow-hidden', isDark ? 'bg-[#141416] border border-border-light' : 'bg-white border border-[#E5E5E5]']">
        <div class="px-6 py-4 space-y-3">
          <router-link @click="closeMenu" to="/" :class="['block py-2', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">Accueil</router-link>
          <router-link @click="closeMenu" to="/propos" :class="['block py-2', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">A propos</router-link>
          <router-link @click="closeMenu" to="/projets" :class="['block py-2', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">Projets</router-link>
          <router-link @click="closeMenu" to="/services" :class="['block py-2', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">Services</router-link>
          <div class="pt-2 border-t" :class="isDark ? 'border-border-light' : 'border-[#E5E5E5]'">
            <button :class="['w-full rounded-md px-4 py-2.5 font-medium', isDark ? 'bg-white text-[#0E0E10]' : 'bg-[#0E0E10] text-white']" @click="() => { $emit('open-contact'); closeMenu() }">Me contacter</button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showMenu = ref(false)
const isDark = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else if (saved === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark
    if (prefersDark) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }
})

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
  localStorage.setItem('theme', 'dark')
  } else {
  document.documentElement.classList.remove('dark')
  document.documentElement.classList.add('light')
  localStorage.setItem('theme', 'light')
  }
}

const closeMenu = () => { showMenu.value = false }
</script>
