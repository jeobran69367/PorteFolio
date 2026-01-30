// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  supabase: {
  url: process.env.SUPABASE_URL || 'https://placeholder.supabase.co',
  // support both SUPABASE_KEY and SUPABASE_ANON_KEY env names
  key: process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || 'placeholder-key',
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/*'],
    }
  }
})
