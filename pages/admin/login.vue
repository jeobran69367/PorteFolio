<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-6">
    <div class="max-w-md w-full">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-text-primary">Admin Login</h1>
        <p class="text-text-secondary mt-2">Connectez-vous pour gérer vos projets</p>
      </div>

      <div class="bg-white rounded-lg shadow-md p-8">
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-text-primary mb-2">
              Email
            </label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-text-primary mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <div v-if="error" class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">{{ error }}</p>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ loading ? 'Connexion...' : 'Se connecter' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const client = useSupabaseClient()
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  loading.value = true

  try {
    const { error: signInError } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (signInError) {
      error.value = 'Email ou mot de passe incorrect'
      return
    }

    // Redirect to admin projects page
    await router.push('/admin/projets')
  } catch (e) {
    error.value = 'Une erreur est survenue'
    console.error(e)
  } finally {
    loading.value = false
  }
}

// Redirect if already logged in
onMounted(async () => {
  const { data: { session } } = await client.auth.getSession()
  if (session) {
    await router.push('/admin/projets')
  }
})
</script>
