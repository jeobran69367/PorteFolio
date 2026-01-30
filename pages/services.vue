<template>
    <main class="page">
        <section class="card">
            <div class="illustration" aria-hidden="true">
                <!-- simple SVG placeholder -->
                <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="160" height="120" rx="8" fill="#f3f4f6"/>
                    <g transform="translate(20,20)" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0 60h120"/>
                        <path d="M40 0v60"/>
                        <circle cx="80" cy="30" r="18" fill="#e2e8f0" stroke="none"/>
                    </g>
                </svg>
            </div>

            <h1>Services</h1>
            <p class="lead">Page en cours de développement. Merci de votre patience — du contenu arrivera bientôt.</p>

            <ul class="todo">
                <li>Présentation personnelle</li>
                <li>Compétences et technos</li>
                <li>Projets et contact</li>
            </ul>

            <div class="actions">
                <button @click="goBack" class="btn">Retour</button>
                <button @click="notify" class="btn btn-outline">Me prévenir quand c'est prêt</button>
            </div>

            <p v-if="notified" class="notice">Merci — vous serez prévenu.e quand la page sera publiée.</p>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const notified = ref(false)

function goBack() {
    if (window.history.length > 1) {
        router.back()
    } else {
        router.push('/')
    }
}

function notify() {
    // simple placeholder: remplacez par une vraie intégration (API, modal, etc.)
    notified.value = true
}
</script>

<style scoped>
.page {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(180deg,#ffffff,#f8fafc);
    color: #0f172a;
    font-family: system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.card {
    width: 100%;
    max-width: 760px;
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 6px 18px rgba(2,6,23,0.08);
    text-align: center;
}

.illustration {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

h1 {
    margin: 0.25rem 0 0.5rem;
    font-size: 1.5rem;
}

.lead {
    margin: 0 0 1rem;
    color: #475569;
}

.todo {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    display: flex;
    gap: 0.5rem 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.todo li {
    background: #f1f5f9;
    color: #0f172a;
    padding: 0.45rem 0.75rem;
    border-radius: 999px;
    font-size: 0.875rem;
}

.actions {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
}

.btn {
    background: #0ea5a4;
    color: white;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    cursor: pointer;
}

.btn-outline {
    background: transparent;
    border: 1px solid #0ea5a4;
    color: #0ea5a4;
}

.notice {
    margin-top: 1rem;
    color: #047857;
    font-weight: 600;
}
</style>