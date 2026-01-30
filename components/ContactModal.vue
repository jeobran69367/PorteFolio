<template>
  <transition name="fade">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div class="fixed inset-0 bg-black/60" @click="close"></div>

      <div class="relative w-full max-w-lg mx-4">
        <div
          class="rounded-2xl p-8 bg-surface dark:bg-[#0B0B0C] text-text-primary"
        >
          <button
            class="absolute top-4 right-4 p-2 text-text-secondary"
            @click="close"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div class="flex flex-col items-center gap-4">
            <div
              class="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center"
            >
            <img
                src="../public/img/Vector.png"
                alt="logo"
                class="w-16 h-16 object-contain"
            />
            </div>

            <h3 class="text-2xl font-bold text-center">
              Discutons de votre projet
            </h3>
            <p class="text-text-secondary text-center max-w-xs">
              Choisissez le moyen qui vous convient le mieux pour échanger avec
              moi.
            </p>

            <div class="flex gap-6 mt-4">
              <div class="flex flex-col items-center">
                <Button
                  variant="primary"
                  @click="openWhatsApp"
                  aria-label="WhatsApp"
                >
                  <span>WhatsApp</span>
                  <template v-if="IconComponent">
                    <component
                      :is="IconComponent"
                      icon="mdi:whatsapp"
                      class="inline-block ml-3"
                      width="20"
                      height="20"
                    />
                  </template>
                  <template v-else>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="inline-block ml-3"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.074-.148-.672-1.618-.921-2.218-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487 0 0 .849.365 1.522.365.673 0 1.165-.297 1.613-.595.448-.298 1.415-1.116 1.615-2.197.198-1.08.198-1.99.139-2.197-.06-.207-.273-.347-.57-.497z"
                        stroke="currentColor"
                        stroke-width="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </Button>
                <div class="mt-2 text-sm text-text-secondary">
                  Contactez moi
                </div>
              </div>

              <div class="flex flex-col items-center">
                <Button
                  variant="primary"
                  @click="openMeet"
                  aria-label="Google Meet"
                >
                  <span>Google Meet</span>
                  <template v-if="IconComponent">
                    <component
                      :is="IconComponent"
                      icon="logos:google-meet"
                      class="inline-block ml-3"
                      width="20"
                      height="20"
                    />
                  </template>
                  <template v-else>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="inline-block ml-3"
                    >
                      <path
                        d="M21 10.5V7a2 2 0 0 0-2-2h-1.5L12 11v2.5L17.5 19H19a2 2 0 0 0 2-2v-2.5z"
                        stroke="currentColor"
                        stroke-width="0.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </Button>
                <div class="mt-2 text-sm text-text-secondary">
                  Prendre rendez-vous
                </div>
              </div>
            </div>

            <div class="mt-2 text-sm text-text-secondary">
              Ou envoyez un message via le formulaire (bientôt).
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import Button from "~/components/Button.vue";
import { ref, onMounted } from "vue";

const IconComponent = ref<any>(null);
onMounted(async () => {
  try {
    // @ts-ignore: optional dependency may not be installed in the environment
    const mod = await import("@iconify/vue");
    IconComponent.value = mod.Icon || mod.default || null;
  } catch (e) {
    // Iconify not installed — IconComponent remains null
    IconComponent.value = null;
  }
});

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:modelValue"]);

const close = () => emit("update:modelValue", false);

const openWhatsApp = () => {
  window.open("https://wa.me/", "_blank");
};

const openMeet = () => {
  window.open("https://meet.google.com", "_blank");
};
</script>
