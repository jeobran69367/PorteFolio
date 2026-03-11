<template>
  <div class="min-h-screen bg-background">
    <div class="bg-white shadow">
      <div
        class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <!-- Gauche -->
        <div class="flex items-center gap-4">
          <button
            @click="router.push('/admin')"
            class="bg-gray-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
          >
            Retour
          </button>

          <h1 class="text-2xl font-bold text-text-muted">
            Gestion des Projets
          </h1>
        </div>
        <div class="flex gap-4">
          <button
            @click="
              showForm = true;
              editingService = null;
            "
            class="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            + Nouveau Service
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
      <!-- Services List -->
      <div v-if="!showForm" class="space-y-4">
        <div v-if="loading" class="text-center py-12">
          <p class="text-text-secondary">Chargement...</p>
        </div>

        <div v-else-if="services.length === 0" class="text-center py-12">
          <p class="text-text-secondary">Aucun service trouvé</p>
        </div>

        <div v-else class="grid gap-4">
          <div
            v-for="svc in services"
            :key="svc.id"
            class="bg-white rounded-lg shadow-md p-6 flex gap-6 items-start"
          >
            <div class="flex-grow">
              <h3 class="text-xl font-bold text-text-primary mb-2">
                {{ svc.title }}
              </h3>
              <p class="text-text-secondary mb-2 line-clamp-3">
                {{ svc.subtitle || svc.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-2">
                <span
                  v-if="svc.category"
                  class="text-sm px-2 py-1 bg-gray-100 rounded"
                  >{{ svc.category }}</span
                >
                <span
                  class="text-sm px-2 py-1 rounded"
                  :class="
                    svc.featured
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-50 text-gray-600'
                  "
                  >{{ svc.featured ? "En vedette" : "" }}</span
                >
              </div>
              <div class="text-sm text-text-secondary">
                <span v-if="svc.status" class="mr-4"
                  >Statut: {{ svc.status }}</span
                >
              </div>
            </div>

            <div class="flex-shrink-0 flex flex-col gap-2">
              <button
                @click="editService(svc)"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Modifier
              </button>
              <button
                @click="confirmDelete(svc)"
                class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Service Form -->
      <div v-else class="bg-white rounded-lg shadow-md p-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold text-text-primary">
            {{ editingService ? "Modifier le Service" : "Nouveau Service" }}
          </h2>
          <button @click="cancelForm" class="text-gray-500 hover:text-gray-700">
            ✕ Annuler
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2"
                >Titre *</label
              >
              <input
                v-model="form.title"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="Titre du service"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2"
                >Slug</label
              >
              <input
                v-model="form.slug"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                placeholder="slug-pour-url"
              />
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-text-primary mb-2"
              >Sous-titre</label
            >
            <input
              v-model="form.subtitle"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Sous-titre court"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-text-primary mb-2"
              >Description *</label
            >
            <textarea
              v-model="form.description"
              required
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Description détaillée"
            />
          </div>

          <!-- Arrays: problems / solutions / benefits / tech_stack / approach -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2"
              >Problèmes adressés (une ligne = un item)</label
            >
            <textarea
              v-model="problemsInput"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Problème 1\nProblème 2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-text-primary mb-2"
              >Solutions (une ligne = un item)</label
            >
            <textarea
              v-model="solutionsInput"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Solution 1\nSolution 2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-text-primary mb-2"
              >Avantages pour le client (une ligne = un item)</label
            >
            <textarea
              v-model="benefitsInput"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Bénéfice 1\nBénéfice 2"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-text-primary mb-2"
              >Stack technique (séparées par des virgules)</label
            >
            <input
              v-model="techInput"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Vue.js, Node.js, PostgreSQL"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-text-primary mb-2"
              >Approche / Méthodologie (une ligne = un item)</label
            >
            <textarea
              v-model="approachInput"
              rows="3"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Étape 1\nÉtape 2"
            />
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2"
                >Catégorie</label
              >
              <input
                v-model="form.category"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
                placeholder="Consulting, Design, Dev"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-text-primary mb-2"
                >Statut</label
              >
              <select
                v-model="form.status"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="active">Actif</option>
                <option value="in_development">En développement</option>
                <option value="coming_soon">Bientôt</option>
              </select>
            </div>
            <div>
              <label class="flex items-center gap-2 cursor-pointer">
                <input
                  v-model="form.featured"
                  type="checkbox"
                  class="w-5 h-5 rounded border-gray-300 text-primary"
                />
                <span class="text-sm font-medium text-text-primary"
                  >En vedette</span
                >
              </label>
            </div>
          </div>

          <div
            v-if="formError"
            class="p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <p class="text-red-600 text-sm">{{ formError }}</p>
          </div>

          <div class="flex gap-4">
            <button
              type="submit"
              :disabled="submitting"
              class="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50"
            >
              {{ submitting ? "Enregistrement..." : "Enregistrer" }}
            </button>
            <button
              type="button"
              @click="cancelForm"
              class="px-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition"
            >
              Annuler
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
        <h3 class="text-xl font-bold text-text-primary mb-4">
          Confirmer la suppression
        </h3>
        <p class="text-text-secondary mb-6">
          Êtes-vous sûr de vouloir supprimer le service "{{
            deleteConfirm?.title
          }}" ? Cette action est irréversible.
        </p>
        <div class="flex gap-4">
          <button
            @click="handleDelete"
            :disabled="deleting"
            class="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition disabled:opacity-50"
          >
            {{ deleting ? "Suppression..." : "Supprimer" }}
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
definePageMeta({ middleware: "auth" });

const db = useDatabase();
const client = useSupabaseClient() as any;
const router = useRouter();

// State
const loading = ref(true);
const services = ref<any[]>([]);
const showForm = ref(false);
const editingService = ref<any>(null);
const submitting = ref(false);
const formError = ref("");
const deleteConfirm = ref<any>(null);
const deleting = ref(false);

// Form
const form = ref<any>({
  title: "",
  slug: "",
  category: "",
  subtitle: "",
  description: "",
  problems_addressed: [] as string[],
  solutions: [] as string[],
  benefits: [] as string[],
  tech_stack: [] as string[],
  approach: [] as string[],
  status: "active",
  featured: false,
  order_index: 0,
});

const problemsInput = ref("");
const solutionsInput = ref("");
const benefitsInput = ref("");
const techInput = ref("");
const approachInput = ref("");

async function loadServices() {
  loading.value = true;
  try {
    const { data, error } = await db.services.getAll();
    if (error) {
      console.error("Error loading services", error);
      services.value = [];
    } else {
      services.value = data ?? [];
    }
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  loadServices();
});

function resetForm() {
  form.value = {
    title: "",
    slug: "",
    category: "",
    subtitle: "",
    description: "",
    problems_addressed: [],
    solutions: [],
    benefits: [],
    tech_stack: [],
    approach: [],
    status: "active",
    featured: false,
    order_index: 0,
  };
  problemsInput.value = "";
  solutionsInput.value = "";
  benefitsInput.value = "";
  techInput.value = "";
  approachInput.value = "";
  formError.value = "";
}

function editService(svc: any) {
  editingService.value = svc;
  form.value = { ...svc };
  // Convert JSON arrays to textareas
  problemsInput.value = (svc.problems_addressed || []).join("\n");
  solutionsInput.value = (svc.solutions || []).join("\n");
  benefitsInput.value = (svc.benefits || []).join("\n");
  techInput.value = Array.isArray(svc.tech_stack)
    ? svc.tech_stack.join(", ")
    : (svc.tech_stack || "").toString();
  approachInput.value = (svc.approach || []).join("\n");
  showForm.value = true;
}

function cancelForm() {
  showForm.value = false;
  editingService.value = null;
  resetForm();
}

function confirmDelete(svc: any) {
  deleteConfirm.value = svc;
}

async function handleDelete() {
  if (!deleteConfirm.value) return;
  deleting.value = true;
  try {
    const { error } = await client
      .from("services")
      .delete()
      .eq("id", deleteConfirm.value.id);
    if (error) {
      console.error(error);
      // show simple error
    } else {
      await loadServices();
      deleteConfirm.value = null;
    }
  } finally {
    deleting.value = false;
  }
}

function buildArrayFromTextarea(value: string) {
  return value
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
}

async function handleSubmit() {
  submitting.value = true;
  formError.value = "";

  // Prepare payload
  const payload: any = {
    title: form.value.title,
    slug:
      form.value.slug ||
      (form.value.title || "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    category: form.value.category,
    subtitle: form.value.subtitle,
    description: form.value.description,
    problems_addressed: buildArrayFromTextarea(problemsInput.value),
    solutions: buildArrayFromTextarea(solutionsInput.value),
    benefits: buildArrayFromTextarea(benefitsInput.value),
    tech_stack: techInput.value
      .split(",")
      .map((s: string) => s.trim())
      .filter(Boolean),
    approach: buildArrayFromTextarea(approachInput.value),
    status: form.value.status,
    featured: !!form.value.featured,
    order_index: form.value.order_index || 0,
    metadata: form.value.metadata || {},
  };

  try {
    if (editingService.value) {
      const { data, error } = await client
        .from("services")
        .update(payload)
        .eq("id", editingService.value.id)
        .select()
        .single();
      if (error) {
        formError.value = error.message || "Erreur lors de la mise à jour";
      } else {
        await loadServices();
        cancelForm();
      }
    } else {
      const { data, error } = await client
        .from("services")
        .insert([payload])
        .select()
        .single();
      if (error) {
        formError.value = error.message || "Erreur lors de la création";
      } else {
        await loadServices();
        cancelForm();
      }
    }
  } catch (err: any) {
    formError.value = err?.message || "Erreur inattendue";
  } finally {
    submitting.value = false;
  }
}

async function handleLogout() {
  try {
    await useSupabaseClient().auth.signOut();
    router.push("/admin/login");
  } catch (e) {
    console.error("Logout failed", e);
  }
}
</script>
