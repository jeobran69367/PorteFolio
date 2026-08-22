#!/usr/bin/env python3
"""
Generate professional downloadable PDF documents for the portfolio.

Produces (in public/pdf/services/):
  - profil-professionnel.pdf   (Profile / positioning summary)
  - fiche-competences.pdf      (Skills sheet: PM, agile, full-stack, IA)
  - methode-travail.pdf        (Work methodology in 4 steps)
  - etudes-de-cas.pdf          (Case studies: context, role, method, results)
  - catalogue-services.pdf     (Overview of all services)
  - ia-automatisation.pdf      (One detailed sheet per service)
  - full-stack.pdf
  - product-owner.pdf
  - chef-de-projet.pdf

Run:  python3 scripts/generate-services-pdfs.py
Requires fpdf2 and a Unicode TTF (DejaVuSans shipped on most systems).
"""
import os
from fpdf import FPDF

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "pdf", "services")

# Brand palette
DARK = (11, 11, 12)
SURFACE_LIGHT = (244, 245, 247)
BORDER_LIGHT = (228, 229, 232)
BODY = (24, 26, 30)
BODY_SUB = (80, 84, 92)
ACCENT = (59, 130, 246)
GREEN = (16, 185, 129)
YELLOW = (229, 191, 46)
MUTED = (150, 150, 155)
WHITE = (255, 255, 255)

CONTACT = {
    "name": "Jeobran Nathanael Kombou",
    "role": "Chef de projet & Développeur Full-Stack · IA",
    "email": "jeobrannathanael@gmail.com",
    "phone": "+33 7 69 10 96 26",
    "github": "github.com/jeobran69367",
    "linkedin": "linkedin.com/in/jeobran-nathanael-kombou",
}

PAGE_W, PAGE_H = 210, 297
MARGIN = 18
CONTENT_W = PAGE_W - 2 * MARGIN

SERVICES = [
    {
        "slug": "chef-de-projet",
        "category": "Project Management",
        "title": "Chef de projet / Pilotage de projet",
        "subtitle": "Cadrage, planification, coordination et suivi jusqu'à la livraison",
        "description": "Je pilote vos projets digitaux de bout en bout : du cadrage initial à la mise en production, en garantissant le respect des délais, du périmètre et de la qualité.",
        "need": ["Un projet neuf ou une refonte à structurer de A à Z", "Des équipes qui peinent à s'aligner", "Des livraisons qui glissent régulièrement", "Besoin d'un interlocuteur unique"],
        "deliverables": ["Document de cadrage", "Feuille de route et planning", "Backlog priorisé et user stories", "Reporting et comptes rendus", "Registre des risques", "Documentation et bilan"],
        "benefits": ["Un projet structuré et prévisible", "Des décisions basées sur des indicateurs", "Moins d'imprévus", "Une communication fluide"],
        "tools": ["Jira", "Notion", "Miro", "Confluence", "Scrum", "Kanban"],
    },
    {
        "slug": "product-owner",
        "category": "Product Management",
        "title": "Product Owner / Product management",
        "subtitle": "Vision produit, backlog priorisé et coordination des équipes",
        "description": "Je définis et porte la vision produit, je structure le backlog et je priorise ce qui apporte le plus de valeur.",
        "need": ["Vision produit floue", "Backlog priorisé au hasard", "Équipes sans direction produit", "Besoin de cadrer un produit"],
        "deliverables": ["Vision produit et objectifs", "Backlog priorisé et détaillé", "Roadmap produit", "Spécifications fonctionnelles", "Suivi des indicateurs produit"],
        "benefits": ["Un produit qui répond aux besoins", "Une priorisation claire", "Une équipe alignée", "Des cycles courts et prévisibles"],
        "tools": ["Jira", "Notion", "Figma", "Miro", "Scrum", "Kanban"],
    },
    {
        "slug": "full-stack",
        "category": "Développement Web",
        "title": "Développement Full-Stack",
        "subtitle": "Applications web complètes : frontend, backend, base de données",
        "description": "Je conçois et développe des applications web complètes, avec une architecture scalable et maintenable, prêtes pour la production.",
        "need": ["Création d'une application ou MVP", "Refonte d'un outil vieillissant", "Besoin d'une app performante", "Manque d'expertise interne"],
        "deliverables": ["Application complète (frontend + backend)", "API documentées et sécurisées", "Interface moderne et responsive", "Pipeline CI/CD", "Code testé et documenté"],
        "benefits": ["Une application fiable et rapide", "Un code maintenable", "Une UX fluide", "Un déploiement automatisé"],
        "tools": ["Vue.js", "Nuxt", "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "Supabase", "Docker", "Git"],
    },
    {
        "slug": "ia-automatisation",
        "category": "IA & Automatisation",
        "title": "IA & Automatisation",
        "subtitle": "Intelligence artificielle appliquée et automatisation de processus",
        "description": "Je conçois des solutions d'IA et d'automatisation qui réduisent les tâches répétitives, exploitent vos données et améliorent la décision.",
        "need": ["Des tâches répétitives", "Des données inexploitées", "Besoin d'assistance automatisée", "Améliorer la décision par la donnée"],
        "deliverables": ["Chatbot / assistant (LLM, RAG)", "Workflows automatisés", "API d'IA intégrée", "Modèle prédictif", "Documentation et formation"],
        "benefits": ["Gain de temps", "Meilleure réactivité", "Des données utiles", "Intégration propre"],
        "tools": ["Python", "LangChain", "OpenAI API", "Claude API", "FastAPI", "PostgreSQL", "TensorFlow", "scikit-learn"],
    },
]

PROFILE = {
    "positioning": "Chef de projet hybride : je pilote des projets digitaux de bout en bout (cadrage, planification, coordination, suivi) tout en maîtrisant la technique (Full-Stack & IA).",
    "paragraphs": [
        "Un projet qui dérape coûte cher : des délais glissés, un budget dépassé, des équipes qui se perdent. Mon rôle est d'empêcher cela.",
        "Je prends en charge la conduite de projet de bout en bout : cadrage, planification, coordination des équipes (tech, design, business) et pilotage des risques jusqu'à la livraison. Parce que je maîtrise aussi la technique, je transforme les exigences métier en spécifications actionnables.",
        "Résultat : des projets qui avancent, des équipes alignées, des décisions objectives basées sur des indicateurs, et des livrables concrets.",
    ],
    "domains": [
        ("Pilotage de projet", ["Cadrage du besoin", "Planification", "Coordination des équipes", "Suivi des délais", "Gestion des risques", "Reporting"]),
        ("Product management / PO", ["Vision produit", "User stories", "Priorisation du backlog", "Cérémonies agiles", "Suivi de la vélocité"]),
        ("Développement Full-Stack", ["Frontend Vue/Nuxt/React", "Backend Node/Python", "Bases de données", "Architecture", "CI/CD"]),
        ("IA & Automatisation", ["Chatbots (LLM, RAG)", "Automatisation de flux", "IA prédictive", "APIs intelligentes"]),
    ],
    "skills_pm": [
        "Pilotage de projet", "Cadrage", "Planification", "Coordination", "Gestion des parties prenantes",
        "Gestion des risques", "Suivi des délais", "Reporting", "KPI", "Amélioration des processus",
        "Résolution de problèmes", "Communication", "Coordination d'équipes", "Conduite du changement",
    ],
    "skills_technical": ["Vue.js", "Nuxt", "React", "TypeScript", "Node.js", "Python", "Supabase", "PostgreSQL", "Docker", "Git", "LangChain", "OpenAI / Claude API"],
    "tools_pm": ["Jira", "Notion", "Miro", "Confluence", "Figma", "Scrum", "Kanban"],
    "method": [
        ("Cadrage", "1-2 semaines", ["Ateliers de cadrage", "Définition des objectifs", "Cartographie des parties prenantes", "Plan de risque initial"]),
        ("Planification", "1-2 semaines", ["Feuille de route et jalons", "Backlog priorisé", "Planning et estimation", "Gouvernance et rituels"]),
        ("Pilotage", "pendant le projet", ["Rituels agiles", "Suivi d'avancement", "Gestion des risques", "Communication"]),
        ("Livraison", "fin de projet", ["Recette et validation", "Documentation", "Mise en production", "Bilan et amélioration"]),
    ],
}

CASE_STUDIES = [
    {
        "title": "Application de gestion de projets & tâches",
        "context": "Équipe en croissance utilisant des fichiers et emails pour suivre le travail, sans outil centralisé. Priorités perdues, aucune vue d'ensemble sur qui fait quoi.",
        "need": "Mettre en place un outil collaboratif simple pour organiser les tâches, assigner des responsabilités et suivre l'avancement en temps réel.",
        "role": "Chef de projet & Développeur Full-Stack",
        "method": ["Cadrage avec les utilisateurs", "Conception des flux", "Développement itératif", "Recette avec groupe pilote"],
        "results": ["Un outil centralisé adopté par l'équipe", "Une meilleure visibilité sur l'avancement", "Une coordination facilitée", "Un socle évolutif"],
        "kpis": ["Utilisateurs actifs : à compléter", "Temps gagné en coordination : à compléter", "Réduction des relances : à compléter"],
        "competencies": ["Cadrage", "Conception d'outil", "Développement", "Agile", "Écoute utilisateur"],
    },
    {
        "title": "Plateforme e-commerce",
        "context": "Un acteur souhaitant vendre en ligne sans plateforme adaptée. Le processus d'achat était peu structuré et l'administration des ventes manuelle.",
        "need": "Mettre en place une boutique en ligne complète et sécurisée, avec un tunnel de paiement fluide et un back-office d'administration.",
        "role": "Chef de projet & développeur",
        "method": ["Cadrage du parcours", "Conception architecture", "Développement par modules", "Recette du tunnel de paiement"],
        "results": ["Boutique en ligne opérationnelle", "Parcours d'achat fluide", "Back-office simplifié", "Base technique évolutive"],
        "kpis": ["Taux de conversion : à compléter", "Panier moyen : à compléter", "Temps de gestion : à compléter"],
        "competencies": ["Pilotage", "E-commerce", "Paiement", "Gestion de lots", "Back-office"],
    },
    {
        "title": "Site portfolio & plateforme personnelle",
        "context": "Besoin d'une vitrine professionnelle crédible, facile à maintenir et à faire évoluer, présentant un profil et des offres.",
        "need": "Créer une plateforme professionnelle, rapide, bien référencée et administrable.",
        "role": "Chef de projet & Développeur",
        "method": ["Cadrage des contenus", "Design system", "Développement responsive", "Optimisation SEO"],
        "results": ["Plateforme pro et responsive", "Navigation claire", "Back-office de gestion", "SEO optimisé"],
        "kpis": ["Temps de chargement : à compléter", "SEO : à compléter", "Visiteurs : à compléter"],
        "competencies": ["Cadrage", "Design system", "Full-stack", "SEO", "Gestion de contenu"],
    },
    {
        "title": "Assistant IA & automatisation de flux",
        "context": "Une part du temps d'une équipe était consacrée aux mêmes questions et demandes répétitives, sans outil automatisé.",
        "need": "Automatiser un flux répétitif et fournir un assistant répondant à partir de documents internes.",
        "role": "Chef de projet tech & développeur IA",
        "method": ["Analyser le processus", "Concevoir (RAG)", "Prototyper (PoC)", "Intégrer, mesurer"],
        "results": ["Assistant fonctionnel", "Flux répétitif automatisé", "Meilleure réactivité", "Base exploitable"],
        "kpis": ["Questions traitées : à compléter", "Temps gagné : à compléter", "Réponses pertinentes : à compléter"],
        "competencies": ["Cadrage IA", "LLM / RAG", "Automatisation", "Intégration API"],
    },
]


def find_font():
    base = "/usr/share/fonts/truetype/dejavu"
    if os.path.exists(os.path.join(base, "DejaVuSans.ttf")):
        return base
    return None


def register_fonts(pdf):
    base = find_font()
    if base:
        pdf.add_font("DJ", "", os.path.join(base, "DejaVuSans.ttf"))
        pdf.add_font("DJ", "B", os.path.join(base, "DejaVuSans-Bold.ttf"))
    else:
        raise RuntimeError("No Unicode font found")


def header(pdf, eyebrow, title, subtitle):
    pdf.set_fill_color(*DARK)
    pdf.rect(0, 0, PAGE_W, 58, style="F")
    pdf.set_fill_color(*ACCENT)
    pdf.rect(0, 0, PAGE_W, 4, style="F")
    pdf.set_xy(MARGIN, 13)
    pdf.set_font("DJ", "B", 8.5)
    pdf.set_text_color(*ACCENT)
    pdf.cell(CONTENT_W, 5, eyebrow.upper(), align="L")
    pdf.ln(8)
    pdf.set_x(MARGIN)
    pdf.set_font("DJ", "B", 22)
    pdf.set_text_color(*WHITE)
    pdf.multi_cell(CONTENT_W, 9, title, align="L")
    pdf.ln(2)
    pdf.set_x(MARGIN)
    pdf.set_font("DJ", "", 11.5)
    pdf.set_text_color(218, 218, 218)
    pdf.multi_cell(CONTENT_W, 6, subtitle, align="L")


def section(pdf, text):
    pdf.ln(6)
    y = pdf.get_y()
    pdf.set_fill_color(*ACCENT)
    pdf.rect(MARGIN, y, 3, 7, style="F")
    pdf.set_xy(MARGIN + 7, y)
    pdf.set_font("DJ", "B", 13)
    pdf.set_text_color(*BODY)
    pdf.cell(CONTENT_W - 7, 8, text, align="L")
    pdf.ln(11)


def bullets(pdf, items, color=GREEN, size=8.5, gap=4):
    pdf.set_font("DJ", "", size)
    for item in items:
        y = pdf.get_y()
        pdf.set_fill_color(*color)
        pdf.ellipse(MARGIN + 1, y + 2.4, 1.9, 1.9, style="F")
        pdf.set_xy(MARGIN + 6, y)
        pdf.set_text_color(*BODY)
        pdf.multi_cell(CONTENT_W - 6, 5, str(item), align="L")
        pdf.ln(gap)


def chips(pdf, items, size=8):
    pdf.set_font("DJ", "B", size)
    line_w = 0
    y = pdf.get_y()
    for item in items:
        w = pdf.get_string_width(item) + 8
        if line_w + w > CONTENT_W:
            pdf.ln(7)
            line_w = 0
            y = pdf.get_y()
        x = MARGIN + line_w
        pdf.set_fill_color(*SURFACE_LIGHT)
        pdf.set_draw_color(*BORDER_LIGHT)
        pdf.rect(x, y, w, 7, style="FD")
        pdf.set_text_color(*BODY)
        pdf.set_xy(x + 4, y + 1.2)
        pdf.cell(w - 8, 4.5, item, align="L")
        line_w += w + 3
    pdf.set_xy(MARGIN, y + 9)


def numbered(pdf, items, size=8.5, gap=4):
    pdf.set_font("DJ", "", size)
    for i, item in enumerate(items, 1):
        y = pdf.get_y()
        pdf.set_text_color(*ACCENT)
        pdf.set_xy(MARGIN, y)
        pdf.cell(6, 5, f"{i}.", align="L")
        pdf.set_text_color(*BODY)
        pdf.set_xy(MARGIN + 6, y)
        pdf.multi_cell(CONTENT_W - 6, 5, " " + str(item), align="L")
        pdf.ln(gap)


def footer(pdf):
    pdf.set_y(PAGE_H - 34)
    pdf.set_fill_color(*DARK)
    pdf.rect(0, PAGE_H - 34, PAGE_W, 34, style="F")
    pdf.set_font("DJ", "B", 9)
    pdf.set_text_color(*ACCENT)
    pdf.set_xy(MARGIN, PAGE_H - 29)
    pdf.cell(CONTENT_W, 5, CONTACT["name"], align="L")
    pdf.set_font("DJ", "", 8)
    pdf.set_text_color(200, 200, 205)
    pdf.set_xy(MARGIN, PAGE_H - 23)
    pdf.cell(CONTENT_W, 4, CONTACT["role"], align="L")
    pdf.set_xy(MARGIN, PAGE_H - 17)
    pdf.cell(CONTENT_W / 2, 4, f"{CONTACT['email']}  ·  {CONTACT['phone']}", align="L")
    pdf.set_xy(MARGIN + CONTENT_W / 2, PAGE_H - 17)
    pdf.cell(CONTENT_W / 2, 4, f"{CONTACT['github']}  ·  {CONTACT['linkedin']}", align="R")
    pdf.set_xy(MARGIN, PAGE_H - 11)
    pdf.set_font("DJ", "", 7)
    pdf.set_text_color(*MUTED)
    pdf.cell(CONTENT_W, 4, "Documents téléchargeables depuis le portfolio", align="L")


def page_setup():
    pdf = FPDF(format="A4", unit="mm")
    pdf.set_auto_page_break(auto=True, margin=16)
    register_fonts(pdf)
    return pdf


def body_start(pdf):
    if pdf.get_y() < 64:
        pdf.set_y(64)
    pdf.set_xy(MARGIN, pdf.get_y())


def generate_service(pdf, svc):
    pdf.add_page()
    header(pdf, svc["category"], svc["title"], svc["subtitle"])
    body_start(pdf)
    pdf.set_font("DJ", "", 10.5)
    pdf.set_text_color(*BODY)
    pdf.multi_cell(CONTENT_W, 6, svc["description"], align="L")
    section(pdf, "Le besoin auquel ce service répond")
    bullets(pdf, svc["need"], color=YELLOW)
    section(pdf, "Livrables possibles")
    bullets(pdf, svc["deliverables"])
    section(pdf, "Outils & approches")
    chips(pdf, svc["tools"])
    section(pdf, "Bénéfices pour vous")
    bullets(pdf, svc["benefits"])
    footer(pdf)


def generate_profile(pdf):
    pdf.add_page()
    header(pdf, "Profil professionnel", CONTACT["name"], PROFILE["positioning"])
    body_start(pdf)
    for para in PROFILE["paragraphs"]:
        pdf.set_font("DJ", "", 10.5)
        pdf.set_text_color(*BODY)
        pdf.multi_cell(CONTENT_W, 6, para, align="L")
        pdf.ln(4)
    pdf.ln(6)
    section(pdf, "Pôles d'expertise")
    pdf.set_font("DJ", "B", 11)
    pdf.set_text_color(*BODY)
    for name, points in PROFILE["domains"]:
        pdf.set_x(MARGIN)
        pdf.cell(CONTENT_W, 7, name, align="L")
        pdf.ln(7)
        bullets(pdf, points, color=ACCENT, size=8, gap=2)
        pdf.ln(4)
    footer(pdf)


def generate_skills(pdf):
    pdf.add_page()
    header(pdf, "Fiche de compétences", "Compétences & outils", "Gestion de projet, méthodes agiles, développement full-stack et IA.")
    body_start(pdf)
    section(pdf, "Compétences en gestion de projet")
    chips(pdf, PROFILE["skills_pm"])
    section(pdf, "Compétences techniques")
    chips(pdf, PROFILE["skills_technical"])
    section(pdf, "Outils de gestion de projet")
    chips(pdf, PROFILE["tools_pm"])
    footer(pdf)


def generate_method(pdf):
    pdf.add_page()
    header(pdf, "Méthode de travail", "Ma démarche en 4 étapes", "Une méthode structurée pour des projets prévisibles et livrés.")
    body_start(pdf)
    for i, (title, duration, items) in enumerate(PROFILE["method"], 1):
        pdf.set_fill_color(*ACCENT)
        y = pdf.get_y()
        pdf.rect(MARGIN, y, 3, 8, style="F")
        pdf.set_x(MARGIN + 7)
        pdf.set_font("DJ", "B", 12)
        pdf.set_text_color(*BODY)
        pdf.cell(CONTENT_W - 7, 8, f"{i}. {title}  —  {duration}", align="L")
        pdf.ln(10)
        bullets(pdf, items, color=ACCENT, size=8.5, gap=2)
        pdf.ln(4)
    footer(pdf)


def generate_cases(pdf):
    for i, c in enumerate(CASE_STUDIES, 1):
        pdf.add_page()
        # Compact header band
        pdf.set_fill_color(*DARK)
        pdf.rect(0, 0, PAGE_W, 44, style="F")
        pdf.set_fill_color(*ACCENT)
        pdf.rect(0, 0, PAGE_W, 3.5, style="F")
        pdf.set_xy(MARGIN, 9)
        pdf.set_font("DJ", "B", 8)
        pdf.set_text_color(*ACCENT)
        pdf.cell(CONTENT_W, 5, f"ÉTUDE DE CAS {i} — {c['role'].upper()}", align="L")
        pdf.ln(8)
        pdf.set_x(MARGIN)
        pdf.set_font("DJ", "B", 17)
        pdf.set_text_color(*WHITE)
        pdf.multi_cell(CONTENT_W, 7.5, c["title"], align="L")

        pdf.set_y(50)
        pdf.set_xy(MARGIN, pdf.get_y())

        def sec(text):
            y = pdf.get_y()
            pdf.set_fill_color(*ACCENT)
            pdf.rect(MARGIN, y, 2.5, 6, style="F")
            pdf.set_xy(MARGIN + 6, y)
            pdf.set_font("DJ", "B", 10)
            pdf.set_text_color(*BODY)
            pdf.cell(CONTENT_W - 6, 7, text, align="L")
            pdf.ln(10)

        def para(text, size=9, lh=5):
            pdf.set_font("DJ", "", size)
            pdf.set_text_color(*BODY)
            pdf.multi_cell(CONTENT_W, lh, text, align="L")
            pdf.ln(2)

        sec("Contexte & enjeu")
        para(c["context"])
        sec("Besoin initial")
        para(c["need"])
        sec("Méthodologie")
        pdf.set_font("DJ", "", 8.5)
        for idx, m in enumerate(c["method"], 1):
            y = pdf.get_y()
            pdf.set_text_color(*ACCENT)
            pdf.set_xy(MARGIN, y)
            pdf.cell(4.5, 4.6, f"{idx}.", align="L")
            pdf.set_text_color(*BODY)
            pdf.set_xy(MARGIN + 4.5, y)
            pdf.multi_cell(CONTENT_W - 4.5, 4.6, " " + m, align="L")
        sec("Résultats obtenus")
        pdf.set_font("DJ", "", 8.5)
        for r in c["results"]:
            y = pdf.get_y()
            pdf.set_fill_color(*GREEN)
            pdf.ellipse(MARGIN + 1, y + 2, 1.6, 1.6, style="F")
            pdf.set_xy(MARGIN + 5, y)
            pdf.set_text_color(*BODY)
            pdf.multi_cell(CONTENT_W - 5, 4.6, str(r), align="L")
        sec("Indicateurs (à compléter)")
        pdf.set_font("DJ", "", 8)
        for k in c["kpis"]:
            y = pdf.get_y()
            pdf.set_fill_color(*YELLOW)
            pdf.ellipse(MARGIN + 1, y + 2, 1.6, 1.6, style="F")
            pdf.set_xy(MARGIN + 5, y)
            pdf.set_text_color(*BODY)
            pdf.multi_cell(CONTENT_W - 5, 4.6, str(k), align="L")
        sec("Compétences démontrées")
        chips(pdf, c["competencies"], size=7.5)


def generate_catalogue(pdf):
    pdf.add_page()
    header(pdf, "Offres & services", "Catalogue de services", "Du pilotage de projet au développement et à l'IA.")
    body_start(pdf)
    pdf.set_font("DJ", "", 10.5)
    pdf.set_text_color(*BODY)
    pdf.multi_cell(CONTENT_W, 6, "Ce document présente l'ensemble de mes services. Chaque offre fait l'objet d'une fiche détaillée (téléchargeable).", align="L")
    card_h = 38
    for svc in SERVICES:
        y = pdf.get_y() + 5
        pdf.set_fill_color(*SURFACE_LIGHT)
        pdf.set_draw_color(*BORDER_LIGHT)
        pdf.rect(MARGIN, y, CONTENT_W, card_h, style="FD")
        pdf.set_fill_color(*ACCENT)
        pdf.rect(MARGIN, y, 3, card_h, style="F")
        pdf.set_xy(MARGIN + 12, y + 6)
        pdf.set_font("DJ", "B", 13)
        pdf.set_text_color(*BODY)
        pdf.cell(CONTENT_W - 20, 7, svc["title"], align="L")
        pdf.set_xy(MARGIN + 12, y + 15)
        pdf.set_font("DJ", "", 9)
        pdf.set_text_color(*BODY_SUB)
        pdf.multi_cell(CONTENT_W - 20, 5, svc["subtitle"], align="L")
        pdf.set_xy(MARGIN + 12, y + 27)
        pdf.set_font("DJ", "B", 8)
        pdf.set_text_color(*ACCENT)
        stack = " • ".join(svc["tools"][:5]) + (" ..." if len(svc["tools"]) > 5 else "")
        pdf.cell(CONTENT_W - 20, 5, stack, align="L")
        pdf.set_y(y + card_h + 3)
    footer(pdf)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    docs = [
        ("profil-professionnel", generate_profile),
        ("fiche-competences", generate_skills),
        ("methode-travail", generate_method),
        ("etudes-de-cas", generate_cases),
        ("catalogue-services", generate_catalogue),
    ]
    for name, fn in docs:
        pdf = page_setup()
        fn(pdf)
        out = os.path.join(OUT_DIR, f"{name}.pdf")
        pdf.output(out)
        print("wrote", out)
    for svc in SERVICES:
        pdf = page_setup()
        generate_service(pdf, svc)
        out = os.path.join(OUT_DIR, f"{svc['slug']}.pdf")
        pdf.output(out)
        print("wrote", out)


if __name__ == "__main__":
    main()
