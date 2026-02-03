<template>
  <div class="min-h-screen bg-background">
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold text-text-primary">Gestion des Projets</h1>
        <div class="flex gap-4">
          <button
            @click="showForm = true; editingProject = null"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600-dark transition"
          >
            + Nouveau Projet
          </button>
          <button
            @click="handleLogout"
            class="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- Projects List -->
      <div v-if="!showForm" class="space-y-4">
        <div v-if="loading" class="text-center py-12">
          <p class="text-text-secondary">Chargement...</p>
        </div>
        
        <div v-else-if="projects.length === 0" class="text-center py-12">
          <p class="text-text-secondary">Aucun projet trouvé</p>
        </div>

        <div v-else class="grid gap-4">
          <div
            v-for="project in projects"
            :key="project.id"
            class="bg-white rounded-lg shadow-md p-6 flex gap-6"
          >
            <div v-if="(project.image_urls && project.image_urls.length) || project.image_url" class="flex-shrink-0">
              <img
                :src="(project.image_urls && project.image_urls.length) ? project.image_urls[0] : project.image_url"
                :alt="project.title"
                class="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <div v-else class="flex-shrink-0 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <span class="text-gray-400">No image</span>
            </div>

            <div class="flex-grow">
              <h3 class="text-xl font-bold text-text-primary mb-2">{{ project.title }}</h3>
              <p class="text-text-secondary mb-2">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="bg-blue-600/10 text-primary px-2 py-1 rounded text-sm"
                >
                  {{ tech }}
                </span>
              </div>
              <div class="text-sm text-text-secondary">
                <span v-if="project.category" class="mr-4">📁 {{ project.category }}</span>
                <span v-if="project.status" class="mr-4">⚡ {{ project.status }}</span>
              </div>
            </div>

            <div class="flex-shrink-0 flex flex-col gap-2">
              <button
                @click="editProject(project)"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Modifier
              </button>
              <button
                @click="confirmDelete(project)"
                class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Form -->
      <div v-else class="bg-white rounded-lg shadow-md p-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-text-primary">
            {{ editingProject ? 'Modifier le Projet' : 'Nouveau Projet' }}
          </h2>
          <button
            @click="cancelForm"
            class="text-gray-500 hover:text-gray-700"
          >
            ✕ Annuler
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Image Upload -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">
              Image du projet
            </label>
            <div v-if="form.image_urls || imagePreviews.length" class="mb-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div v-for="(src, i) in imagePreviews" :key="i" class="relative">
                  <img :src="src" :alt="`Preview ${i+1}`" class="w-full h-48 object-cover rounded-lg" />
                  <button type="button" @click="removeImage(i)" class="absolute top-2 right-2 bg-white/80 rounded-full p-1 text-red-600">✕</button>
                </div>
                <div v-if="!imagePreviews.length && ((Array.isArray(form.image_urls) && form.image_urls.length) || form.image_url)" class="relative">
                  <img :src="(Array.isArray(form.image_urls) && form.image_urls.length) ? form.image_urls[0] : (form.image_url || '')" alt="Preview" class="w-full h-48 object-cover rounded-lg" />
                  <button type="button" @click="removeImage()" class="absolute top-2 right-2 bg-white/80 rounded-full p-1 text-red-600">✕</button>
                </div>
              </div>
            </div>
            <input
              ref="fileInput"
              type="file"
              multiple
              accept="image/*"
              @change="handleFileChange"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <!-- Title -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">
              Titre *
            </label>
            <input
              v-model="form.title"
              type="text"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="Mon Projet"
            />
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">
              Description courte *
            </label>
            <textarea
              v-model="form.description"
              required
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="Une brève description du projet"
            />
          </div>

          <!-- Long Description -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">
              Description détaillée
            </label>
            <textarea
              v-model="form.long_description"
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="Description complète du projet"
            />
          </div>

          <!-- Objectifs -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">
              Objectifs (un par ligne)
            </label>
            <textarea
              v-model="objectifsInput"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="Objectif 1&#10;Objectif 2&#10;Objectif 3"
            />
          </div>

          <!-- Solutions -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">
              Solutions (un par ligne)
            </label>
            <textarea
              v-model="solutionsInput"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="Solution 1&#10;Solution 2&#10;Solution 3"
            />
          </div>

          <!-- Technologies -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">
              Technologies (séparées par des virgules)
            </label>
            <input
              v-model="technologiesInput"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              placeholder="Vue.js, Node.js, PostgreSQL"
            />
          </div>

          <!-- URLs -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2">
                URL du projet
              </label>
              <input
                v-model="form.project_url"
                type="url"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="https://example.com"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2">
                URL GitHub
              </label>
              <input
                v-model="form.github_url"
                type="url"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="https://github.com/username/repo"
              />
            </div>
          </div>

          <!-- Category & Status -->
          <div class="grid md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2">
                Catégorie
              </label>
              <input
                v-model="form.category"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Web Development"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2">
                Statut
              </label>
              <select
                v-model="form.status"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              >
                <option value="completed">Terminé</option>
                <option value="in_progress">En cours</option>
                <option value="planned">Planifié</option>
              </select>
            </div>
            <div>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  v-model="form.featured"
                  type="checkbox"
                  class="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span class="text-sm font-medium text-text-primary">Projet en vedette</span>
              </label>
            </div>
          </div>

          <!-- Dates -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2">
                Date de début
              </label>
              <input
                v-model="form.start_date"
                type="date"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2">
                Date de fin
              </label>
              <input
                v-model="form.end_date"
                type="date"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
          </div>

          <!-- Error Message -->
          <div v-if="formError" class="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">{{ formError }}</p>
          </div>

          <!-- Submit Buttons -->
          <div class="flex gap-4">
            <button
              type="submit"
              :disabled="submitting"
              class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-600-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ submitting ? 'Enregistrement...' : 'Enregistrer' }}
            </button>
            <button
              type="button"
              @click="cancelForm"
              class="px-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition"
            >
              Annuler yg
            </button>
          </div>
        </form>
      </div>
    </main>

    <!-- Delete Confirmation Modal -->
    <div
      v-if="deleteConfirm"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click.self="deleteConfirm = null"
    >
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-xl font-bold text-text-primary mb-4">Confirmer la suppression</h3>
        <p class="text-text-secondary mb-6">
          Êtes-vous sûr de vouloir supprimer le projet "{{ deleteConfirm?.title }}" ?
          Cette action est irréversible.
        </p>
        <div class="flex gap-4">
          <button
            @click="handleDelete"
            :disabled="deleting"
            class="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition disabled:opacity-50"
          >
            {{ deleting ? 'Suppression...' : 'Supprimer' }}
          </button>
          <button
            @click="deleteConfirm = null"
            class="px-6 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const db = useDatabase()
const client = useSupabaseClient()
const router = useRouter()

// State
const loading = ref(true)
const projects = ref<any[]>([])
const showForm = ref(false)
const editingProject = ref<any>(null)
const submitting = ref(false)
const formError = ref('')
const deleteConfirm = ref<any>(null)
const deleting = ref(false)

// Form data
const form = ref({
  title: '',
  description: '',
  long_description: '',
  objectif: [] as string[],
  solution: [] as string[],
  image_urls: [] as string[] | null,
  image_url: '' as string | null,
  project_url: '',
  github_url: '',
  technologies: [] as string[],
  category: '',
  status: 'completed',
  featured: false,
  start_date: '',
  end_date: '',
  order_index: 0
})

const technologiesInput = ref('')
const objectifsInput = ref('')
const solutionsInput = ref('')
const selectedFiles = ref<File[]>([])
const imagePreviews = ref<string[]>([])
const fileInput = ref<HTMLInputElement | null>(null)
const oldImageUrl = ref<string | null>(null)

// Load projects
const loadProjects = async () => {
  loading.value = true
  const { data, error } = await db.projects.getAll()
  if (error) {
    console.error('Error loading projects:', error)
  } else {
    projects.value = data || []
  }
  loading.value = false
}

// Handle file selection (multiple)
const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = Array.from(target.files || []) as File[]

  if (files.length > 0) {
    selectedFiles.value = files
    imagePreviews.value = []

    files.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        imagePreviews.value.push(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    })
  } else {
    selectedFiles.value = []
    imagePreviews.value = []
  }
}

// Sanitize filename to avoid invalid storage keys (remove accents, quotes, spaces, special chars)
const sanitizeFileName = (name: string) => {
  // extract extension
  const idx = name.lastIndexOf('.')
  const ext = idx !== -1 ? name.slice(idx + 1) : ''
  const base = idx !== -1 ? name.slice(0, idx) : name

  // normalize accents, replace spaces and remove invalid chars
  const slug = base
    .normalize('NFD') // separate accents
    .replace(/\p{Diacritic}/gu, '') // remove diacritics (use Unicode property)
    .replace(/[^\w\- ]+/g, '') // remove non word chars except space and hyphen
    .trim()
    .replace(/\s+/g, '-') // spaces -> dashes
    .replace(/_+/g, '-')
    .toLowerCase()

  const safe = `${Date.now()}-${slug}${ext ? '.' + ext : ''}`
  return safe
}

// Remove image(s)
const removeImage = (index?: number) => {
  if (typeof index === 'number') {
    // remove a single preview/file
    selectedFiles.value.splice(index, 1)
    imagePreviews.value.splice(index, 1)
  } else {
    // remove all
    selectedFiles.value = []
    imagePreviews.value = []
    form.value.image_urls = []
  }

  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Edit project
const editProject = (project: any) => {
  editingProject.value = project
  form.value = {
    title: project.title,
    description: project.description,
    long_description: project.long_description || '',
    objectif: project.objectif || [],
    solution: project.solution || [],
    image_urls: project.image_urls || [],
  image_url: (Array.isArray(project.image_urls) && project.image_urls.length) ? project.image_urls[0] : (project.image_url || ''),
  project_url: project.project_url || '',
    github_url: project.github_url || '',
    technologies: project.technologies || [],
    category: project.category || '',
    status: project.status || 'completed',
    featured: project.featured || false,
    start_date: project.start_date || '',
    end_date: project.end_date || '',
    order_index: project.order_index || 0
  }
  technologiesInput.value = (project.technologies || []).join(', ')
  objectifsInput.value = (project.objectif || []).join('\n')
  solutionsInput.value = (project.solution || []).join('\n')
  oldImageUrl.value = project.image_urls
  showForm.value = true
}

// Cancel form
const cancelForm = () => {
  showForm.value = false
  editingProject.value = null
  resetForm()
}

// Reset form
const resetForm = () => {
  form.value = {
    title: '',
    description: '',
    long_description: '',
    objectif: [],
    solution: [],
  image_urls: [],
  image_url: '',
    project_url: '',
    github_url: '',
    technologies: [],
    category: '',
    status: 'completed',
    featured: false,
    start_date: '',
    end_date: '',
    order_index: 0
  }
  technologiesInput.value = ''
  objectifsInput.value = ''
  solutionsInput.value = ''
  selectedFiles.value = []
  imagePreviews.value = []
  oldImageUrl.value = null
  formError.value = ''
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Handle form submit
const handleSubmit = async () => {
  formError.value = ''
  submitting.value = true
  console.debug('[admin] handleSubmit start', { editing: editingProject.value })

  try {
    // Parse technologies
    form.value.technologies = technologiesInput.value
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0)
    
    // Parse objectifs
    form.value.objectif = objectifsInput.value
      .split('\n')
      .map(o => o.trim())
      .filter(o => o.length > 0)
    
    // Parse solutions
    form.value.solution = solutionsInput.value
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0)

      // Upload new images if selected (support multiple)
      if (selectedFiles.value.length > 0) {
        const uploadedUrls: string[] = []

        for (const original of selectedFiles.value) {
          const safeName = sanitizeFileName(original.name)
          const safeFile = new File([original], safeName, { type: original.type })

          const { data: uploadData, error: uploadError } = await db.storage.uploadProjectImage(safeFile)

              if (uploadError) {
                console.error('[admin] upload error', uploadError)
                formError.value = 'Erreur lors du téléchargement de l\'image: ' + (uploadError.message || JSON.stringify(uploadError))
                submitting.value = false
                return
              }

          if (uploadData?.url) uploadedUrls.push(uploadData.url)
        }

        // Delete old image if exists and is different from the first new one
        if (oldImageUrl.value && uploadedUrls[0] && oldImageUrl.value !== uploadedUrls[0]) {
          await db.storage.deleteProjectImage(oldImageUrl.value)
        }

        // Save first image for backward compatibility and full gallery in `image_urls`
        form.value.image_url = uploadedUrls[0] || null
        form.value.image_urls = uploadedUrls
        console.debug('[admin] uploadedUrls =', uploadedUrls)
      }

  // Normalize empty date strings to null so Postgres "date" columns don't receive "" which causes 22007
  if (form.value.start_date === '') form.value.start_date = null as any
  if (form.value.end_date === '') form.value.end_date = null as any

    // Create or update project. Use a payload copy and retry without image_urls if the DB doesn't have the column yet.
  const payload: any = JSON.parse(JSON.stringify(form.value))
  console.debug('[admin] project payload =', payload)

    if (editingProject.value) {
      console.debug('[admin] calling update for id', editingProject.value.id)
      let res = await db.projects.update(editingProject.value.id, payload)
      console.debug('[admin] update response =', res)
      if (res?.error) {
        console.error('[admin] update error initial:', res.error)
        // If PostgREST reports missing column, retry without `image_urls` to remain compatible
        if ((res.error as any).code === 'PGRST204' || (res.error as any).message?.includes("Could not find the 'image_urls'")) {
          delete payload.image_urls
          res = await db.projects.update(editingProject.value.id, payload)
        }
      }

      if (res?.error) {
        console.error('[admin] update final error:', res.error)
        formError.value = (res.error as any).message || JSON.stringify(res.error)
        return
      }
    } else {
      console.debug('[admin] calling create')
      let res = await db.projects.create(payload)
      console.debug('[admin] create response =', res)
      if (res?.error) {
        console.error('[admin] create error initial:', res.error)
        if ((res.error as any).code === 'PGRST204' || (res.error as any).message?.includes("Could not find the 'image_urls'")) {
          delete payload.image_urls
          res = await db.projects.create(payload)
        }
      }

      if (res?.error) {
        console.error('[admin] create final error:', res.error)
        formError.value = (res.error as any).message || JSON.stringify(res.error)
        return
      }
    }

    // Success - reload and close form
    await loadProjects()
    cancelForm()
  } catch (e) {
    console.error(e)
    formError.value = 'Une erreur est survenue'
  } finally {
    submitting.value = false
  }
}

// Confirm delete
const confirmDelete = (project: any) => {
  deleteConfirm.value = project
}

// Handle delete
const handleDelete = async () => {
  if (!deleteConfirm.value) return
  
  deleting.value = true
  
  try {
    // Delete image if exists
    if (deleteConfirm.value.image_urls && Array.isArray(deleteConfirm.value.image_urls)) {
      // remove each image path/url
      for (const img of deleteConfirm.value.image_urls) {
        try { await db.storage.deleteProjectImage(img) } catch (e) { /* ignore */ }
      }
    } else if (deleteConfirm.value.image_url) {
      try { await db.storage.deleteProjectImage(deleteConfirm.value.image_url) } catch (e) { /* ignore */ }
    }
    
    // Delete project
    const { error } = await db.projects.delete(deleteConfirm.value.id)
    if (error) {
      console.error('Error deleting project:', error)
      return
    }
    
    // Reload projects
    await loadProjects()
    deleteConfirm.value = null
  } catch (e) {
    console.error(e)
  } finally {
    deleting.value = false
  }
}

// Logout
const handleLogout = async () => {
  await client.auth.signOut()
  await router.push('/admin/login')
}

// Load projects on mount
onMounted(() => {
  loadProjects()
})
</script>
