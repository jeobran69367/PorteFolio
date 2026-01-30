<template>
  <header class="fixed left-0 right-0 top-4 z-50">
    <div class="flex justify-center">
      <div :class="[
        'w-full max-w-[1280px] h-16 rounded-full flex items-center justify-between px-6',
        isDark ? 'bg-[#141416] border border-border-light' : 'bg-white border border-[#E5E5E5]'
      ]">
        <!-- Logo -->
        <div class="flex items-center gap-3 w-[500px]">
          <div class="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <img src="../public/img/Vector.png" alt="logo" class="w-8 h-8 object-contain" />
          </div>
          <span :class="['text-[24px] font-semibold', isDark ? 'text-white' : 'text-[#0E0E10]']">Jeobran k</span>
        </div>

        <!-- Links -->
        <nav class="hidden md:flex items-center justify-center gap-8" style="width:400px;">
          <router-link :to="{ path: '/' }" :class="isDark ? 'text-white' : 'text-[#0E0E10]'">Accueil</router-link>
          <router-link :to="{ path: '/propos' }" :class="isDark ? 'text-white' : 'text-[#0E0E10]'">A propos</router-link>
          <router-link :to="{ path: '/projets' }" :class="isDark ? 'text-white' : 'text-[#0E0E10]'">Projets</router-link>
          <router-link :to="{ path: '/services' }" :class="isDark ? 'text-white' : 'text-[#0E0E10]'">Services</router-link>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <div class="hidden md:block">
            <button :class="[
              'rounded-md px-5 py-2.5 text-[18px] font-medium flex items-center gap-2',
              isDark ? 'bg-white text-[#0E0E10]' : 'bg-[#0E0E10] text-white'
            ]" @click="$emit('open-contact')">
              <span>Me contacter</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>

          <button :class="['w-11 h-11 rounded-md flex items-center justify-center', isDark ? 'bg-[#0B0B0C]' : 'bg-[#E5E5E5]']" @click="toggleTheme" aria-label="Toggle theme">
            <svg v-if="!isDark" width="16" height="16" viewBox="0 0 20 20" fill="none" :class="isDark ? 'text-white' : 'text-[#0E0E10]'"><circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="2"/></svg>
            <svg v-else width="16" height="16" viewBox="0 0 20 20" fill="none" :class="isDark ? 'text-white' : 'text-[#0E0E10]'"><path d="M14.53 15.47A7 7 0 0 1 8.53 3.47 7 7 0 1 0 14.53 15.47z" stroke="currentColor" stroke-width="1.2" fill="currentColor" opacity="0.06"/></svg>
          </button>

          <button class="md:hidden p-2 rounded-lg" @click="showMenu = !showMenu" aria-label="Open menu">
            <svg v-if="!showMenu" width="22" height="22" viewBox="0 0 24 24" fill="none" class="text-white"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" class="text-white"><path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div v-if="showMenu" :class="['md:hidden mt-2', isDark ? 'bg-[#0B0B0C] border-t border-border-light' : 'bg-white border-t border-[#E5E5E5]']">
        <div class="px-6 py-4 space-y-3">
          <a @click="closeMenu" href="#accueil" :class="['block', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">Accueil</a>
          <a @click="closeMenu" href="#apropos" :class="['block', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">A propos</a>
          <a @click="closeMenu" href="#projets" :class="['block', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">Projets</a>
          <a @click="closeMenu" href="#services" :class="['block', isDark ? 'text-text-secondary hover:text-text-primary' : 'text-[#4B5563] hover:text-[#0E0E10]']">Services</a>
          <div class="pt-2">
            <button :class="['rounded-md px-4 py-2', isDark ? 'bg-white text-[#0E0E10]' : 'bg-[#0E0E10] text-white']" @click="() => { $emit('open-contact'); closeMenu() }">Me contacter</button>
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
