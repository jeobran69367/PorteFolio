<template>
  <div class="min-h-screen bg-background">
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div class="flex items-center gap-4">
          <button @click="goBack" class="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition">Retour</button>
          <h1 class="text-2xl font-bold text-text-primary">Gestion des Certifications</h1>
        </div>

        <div>
          <button @click="openCreate" class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">+ Nouvelle</button>
        </div>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-6 py-8">
      <div v-if="loading" class="text-center py-12">
        <p class="text-text-secondary">Chargement des certifications...</p>
      </div>

      <div v-else>
        <div v-if="certifications.length === 0" class="text-center py-12">
          <p class="text-text-secondary">Aucune certification trouvée</p>
        </div>

        <div v-else class="grid gap-4">
          <div v-for="cert in certifications" :key="cert.id" class="bg-white rounded-lg shadow-md p-6 flex justify-between items-center">
            <div>
              <h3 class="text-lg font-semibold text-text-primary">{{ cert.name }}</h3>
              <p class="text-text-secondary text-sm">{{ formatDate(cert.date) }}</p>
              <p v-if="cert.institution" class="text-text-secondary text-sm">{{ cert.institution }}</p>
            </div>

            <div class="flex gap-2">
              <button @click="startEdit(cert)" class="bg-amber-500 text-white px-3 py-2 rounded-lg hover:bg-amber-600 transition">Modifier</button>
              <button @click="confirmDelete(cert)" class="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition">Supprimer</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Modal / Panel -->
      <div v-if="showForm" class="fixed inset-0 z-50 flex items-start justify-center p-6">
        <div class="bg-black/40 absolute inset-0" @click="closeForm"></div>
        <div class="relative bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 z-10">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold">{{ editing ? 'Modifier la certification' : 'Nouvelle certification' }}</h2>
            <button @click="closeForm" class="text-gray-500 hover:text-gray-700">✕</button>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-text-primary mb-1">Nom *</label>
              <input v-model="form.name" type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-text-primary mb-1">Institution</label>
                <input v-model="form.institution" type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label class="block text-sm font-medium text-text-primary mb-1">Date</label>
                <input v-model="form.date" type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-text-primary mb-1">URL (certificat / preuve)</label>
              <input v-model="form.url" type="url" class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div class="flex justify-end gap-3">
              <button type="button" @click="closeForm" class="px-4 py-2 bg-gray-200 rounded-lg">Annuler</button>
              <button type="submit" :disabled="submitting" class="px-4 py-2 bg-blue-600 text-white rounded-lg">{{ submitting ? 'Enregistrement...' : (editing ? 'Enregistrer' : 'Créer') }}</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Delete confirmation -->
      <div v-if="deleting" class="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div class="bg-black/40 absolute inset-0"></div>
        <div class="relative bg-white rounded-lg shadow-lg p-6 z-10 max-w-md w-full">
          <h3 class="text-lg font-semibold mb-2">Confirmer la suppression</h3>
          <p class="text-text-secondary mb-4">Voulez-vous vraiment supprimer la certification « {{ deleting.name }} » ? Cette action est irréversible.</p>
          <div class="flex justify-end gap-3">
            <button @click="deleting = null" class="px-4 py-2 bg-gray-200 rounded-lg">Annuler</button>
            <button @click="deleteConfirmed" class="px-4 py-2 bg-red-600 text-white rounded-lg">Supprimer</button>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useDatabase } from '~/composables/useDatabase'

const router = useRouter()
const db = useDatabase()

const certifications = ref<any[]>([])
const loading = ref(true)
const showForm = ref(false)
const editing = ref(false)
const submitting = ref(false)
const deleting = ref<any | null>(null)

const form = ref({ name: '', institution: '', date: '', url: '', id: null })

const goBack = () => router.push('/admin')
const openCreate = () => {
  editing.value = false
  form.value = { name: '', institution: '', date: '', url: '', id: null }
  showForm.value = true
}
const closeForm = () => { showForm.value = false }

const load = async () => {
  loading.value = true
  const { data, error } = await db.certifications.getAll()
  loading.value = false
  if (error) {
    // eslint-disable-next-line no-console
    console.error('Failed fetching certifications', error)
    certifications.value = []
    return
  }
  certifications.value = data ?? []
}

onMounted(() => load())

const startEdit = (c: any) => {
  editing.value = true
  form.value = { name: c.name || '', institution: c.institution || '', date: c.date || '', url: c.url || '', id: c.id }
  showForm.value = true
}

const handleSubmit = async () => {
  if (!form.value.name) return
  submitting.value = true
  try {
    if (editing.value && form.value.id) {
      const { data, error } = await db.certifications.update(String(form.value.id), { name: form.value.name, institution: form.value.institution, date: form.value.date, url: form.value.url })
      if (!error) {
        await load()
        showForm.value = false
      }
    } else {
      const { data, error } = await db.certifications.create({ name: form.value.name, institution: form.value.institution, date: form.value.date, url: form.value.url })
      if (!error) {
        await load()
        showForm.value = false
      }
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  } finally {
    submitting.value = false
  }
}

const confirmDelete = (c: any) => { deleting.value = c }

const deleteConfirmed = async () => {
  if (!deleting.value) return
  try {
    await db.certifications.delete(String(deleting.value.id))
    deleting.value = null
    await load()
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e)
  }
}

const formatDate = (d: string | null) => {
  if (!d) return ''
  try {
    const dt = new Date(d)
    return dt.toLocaleDateString()
  } catch (e) {
    return String(d)
  }
}
</script>

<style scoped>
/* small tweaks to match admin aesthetic */
.bg-background { background-color: var(--bg-background, #f8fafc); }
.text-text-primary { color: var(--text-primary, #0f172a); }
.text-text-secondary { color: var(--text-secondary, #6b7280); }
</style>