#!/usr/bin/env python3
"""
Generate professional service brochure PDFs for the portfolio.

Produces:
  - public/pdf/services/catalogue-services.pdf  (overview of all services)
  - public/pdf/services/ia-automatisation.pdf   (one per service)
  - public/pdf/services/full-stack.pdf
  - public/pdf/services/product-owner.pdf

Run:  python3 scripts/generate-services-pdfs.py
Requires fpdf2 and a Unicode TTF (DejaVuSans shipped on most systems).
"""
import os
from fpdf import FPDF

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "pdf", "services")

# Brand palette (mirrors tailwind.config.js)
DARK = (11, 11, 12)
SURFACE = (20, 20, 22)
BORDER = (42, 42, 44)
TEXT = (255, 255, 255)
SUBTEXT = (218, 218, 218)
ACCENT = (59, 130, 246)
GREEN = (16, 185, 129)
YELLOW = (229, 214, 46)
MUTED = (150, 150, 155)

# Light body (print-friendly brochure)
BODY = (24, 26, 30)
BODY_SUB = (80, 84, 92)
SURFACE_LIGHT = (244, 245, 247)
BORDER_LIGHT = (228, 229, 232)

SERVICES = [
    {
        "slug": "ia-automatisation",
        "category": "AI & Automatisation",
        "title": "Développement IA & Automatisation",
        "subtitle": "Modèles d'IA et automatisation de vos processus métier",
        "description": (
            "Je conçois des solutions d'intelligence artificielle et d'automatisation sur-mesure "
            "qui optimisent vos processus, réduisent vos coûts et transforment vos données en "
            "décisions stratégiques."
        ),
        "problems": [
            "Processus manuels chronophages et répétitifs",
            "Décisions peu ou pas orientées données",
            "Données métier sous-exploitées",
            "Coûts opérationnels élevés",
        ],
        "solutions": [
            "IA prédictive & scoring",
            "NLP / Chatbots intelligents",
            "Workflows automatisés (RPA)",
            "APIs intelligentes (LLM, embeddings)",
            "Tableaux de bord décisionnels",
        ],
        "benefits": [
            "Réduction des coûts opérationnels",
            "Gain de temps opérationnel",
            "Aide à la décision basée sur les données",
            "Exploiter la valeur de vos données",
        ],
        "stack": ["Python", "TensorFlow", "scikit-learn", "LangChain", "OpenAI / Claude API", "FastAPI", "PostgreSQL", "Docker"],
        "approach": [
            "Audit des besoins métier",
            "Conception de modèles adaptés",
            "Proof-of-Concept",
            "Intégration à votre infrastructure",
            "Formation & documentation",
        ],
    },
    {
        "slug": "full-stack",
        "category": "Développement Web",
        "title": "Développement Full-Stack",
        "subtitle": "Frontend moderne & Backend robuste pour des apps scalables",
        "description": (
            "Je développe des applications web complètes, de l'interface utilisateur jusqu'au "
            "backend, avec une architecture scalable, testée et maintenable. Du MVP à la mise "
            "en production."
        ),
        "problems": [
            "Applications legacy difficiles à maintenir",
            "Performances et temps de chargement médiocres",
            "Manque de scalabilité et d'évolutivité",
            "Failles de sécurité et absence de tests",
        ],
        "solutions": [
            "Frontend moderne (Vue.js, Nuxt, React)",
            "Backend robuste (Node.js, Spring Boot)",
            "APIs REST / GraphQL sécurisées",
            "Architecture microservices ou monolithe modulaire",
            "CI/CD, tests automatisés & monitoring",
        ],
        "benefits": [
            "Code maintenable et testé",
            "Applications performantes",
            "Architecture évolutive",
            "Sécurité & conformité renforcées",
        ],
        "stack": ["Vue.js", "Nuxt", "React", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL", "Supabase", "TailwindCSS", "Docker"],
        "approach": [
            "Architecture scalable",
            "Tests automatisés",
            "Intégration continue / déploiement",
            "Code maintenable & documenté",
            "Sécurité & authentification",
        ],
    },
    {
        "slug": "product-owner",
        "category": "Product Management",
        "title": "Product Owner / Stakeholder",
        "subtitle": "Vision produit & coordination des acteurs",
        "description": (
            "Accompagnement dans la définition de la vision produit, la coordination des équipes "
            "techniques et métier, et la gestion du backlog pour livrer la bonne valeur au bon "
            "moment."
        ),
        "problems": [
            "Manque de vision produit claire",
            "Communication difficile entre équipes tech et métier",
            "Priorisation inefficace du backlog",
            "Délais et périmètres non maîtrisés",
        ],
        "solutions": [
            "Compréhension des enjeux métier",
            "Traduction des besoins en solutions techniques",
            "Collaboration équipes techniques & business",
            "Gestion & priorisation du backlog",
            "Méthodes agiles (Scrum, Kanban)",
        ],
        "benefits": [
            "Vision produit alignée sur les objectifs business",
            "Meilleure communication inter-équipes",
            "Priorisation optimisée",
            "Livraison de valeur plus rapide",
        ],
        "stack": ["Jira", "Notion", "Figma", "Miro", "Scrum", "Kanban"],
        "approach": [
            "Gestion de backlog",
            "Rédaction de user stories",
            "Méthodes agiles (Scrum)",
            "Facilitation des cérémonies agiles",
            "Suivi de la vélocité & KPIs",
        ],
    },
]

CONTACT = {
    "name": "Jeobran Nathanael Kombou",
    "role": "Développeur Full-Stack · IA · Product Owner",
    "email": "jeobrannathanael@gmail.com",
    "phone": "+33 7 69 10 96 26",
    "github": "github.com/jeobran69367",
    "linkedin": "linkedin.com/in/jeobran-nathanael-kombou",
}

PAGE_W, PAGE_H = 210, 297
MARGIN = 18
CONTENT_W = PAGE_W - 2 * MARGIN


def find_font():
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None


def register_fonts(pdf):
    dejavu = find_font()
    if dejavu:
        base = os.path.dirname(dejavu)
        pdf.add_font("DejaVu", "", os.path.join(base, "DejaVuSans.ttf"), uni=True)
        pdf.add_font("DejaVu", "B", os.path.join(base, "DejaVuSans-Bold.ttf"), uni=True)
    else:
        # Fallback: register fonts based in the repo assets if they exist
        assets = os.path.join(os.path.dirname(__file__), "..", "assets", "fonts")
        if os.path.exists(os.path.join(assets, "Inter-Regular.ttf")):
            pdf.add_font("DejaVu", "", os.path.join(assets, "Inter-Regular.ttf"), uni=True)
        if os.path.exists(os.path.join(assets, "Inter-Bold.ttf")):
            pdf.add_font("DejaVu", "B", os.path.join(assets, "Inter-Bold.ttf"), uni=True)
        else:
            raise RuntimeError("No Unicode TTF font found (expected DejaVuSans or repo Inter)")


def draw_header(pdf, category, title, subtitle):
    # Dark header band
    pdf.set_fill_color(*DARK)
    pdf.rect(0, 0, PAGE_W, 52, style="F")
    # Accent top bar
    pdf.set_fill_color(*ACCENT)
    pdf.rect(0, 0, PAGE_W, 4, style="F")

    pdf.set_xy(MARGIN, 12)
    pdf.set_font("DejaVu", "B", 9)
    pdf.set_text_color(*ACCENT)
    pdf.cell(CONTENT_W, 6, category.upper(), align="L")
    pdf.ln(8)

    pdf.set_x(MARGIN)
    pdf.set_font("DejaVu", "B", 21)
    pdf.set_text_color(*TEXT)
    pdf.multi_cell(CONTENT_W, 9, title, align="L")
    pdf.ln(2)

    pdf.set_x(MARGIN)
    pdf.set_font("DejaVu", "", 12)
    pdf.set_text_color(*SUBTEXT)
    pdf.multi_cell(CONTENT_W, 6, subtitle, align="L")


def section_title(pdf, text):
    pdf.ln(6)
    y = pdf.get_y()
    pdf.set_fill_color(*ACCENT)
    pdf.rect(MARGIN, y, 3, 7, style="F")
    pdf.set_xy(MARGIN + 7, y)
    pdf.set_font("DejaVu", "B", 13)
    pdf.set_text_color(*BODY)
    pdf.cell(CONTENT_W - 7, 8, text, align="L")
    pdf.ln(11)


def bullet_list(pdf, items, color=GREEN, size=8.5, gap=4):
    pdf.set_font("DejaVu", "", size)
    for item in items:
        y = pdf.get_y()
        pdf.set_fill_color(*color)
        pdf.ellipse(MARGIN + 1, y + 2.4, 1.9, 1.9, style="F")
        pdf.set_xy(MARGIN + 6, y)
        pdf.set_text_color(*BODY)
        pdf.multi_cell(CONTENT_W - 6, 5, str(item), align="L")
        pdf.ln(gap)


def chips(pdf, items, size=8):
    pdf.set_font("DejaVu", "B", size)
    line_w = 0
    y = pdf.get_y()
    for item in items:
        w = pdf.get_string_width(item) + 8
        if line_w + w > CONTENT_W:
            pdf.ln(7)
            line_w = 0
            x = MARGIN
            y = pdf.get_y()
        else:
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
    pdf.set_font("DejaVu", "", size)
    for i, item in enumerate(items, 1):
        y = pdf.get_y()
        pdf.set_text_color(*ACCENT)
        pdf.set_xy(MARGIN, y)
        pdf.cell(6, 5, f"{i}.", align="L")
        pdf.set_text_color(*BODY)
        pdf.set_xy(MARGIN + 6, y)
        pdf.multi_cell(CONTENT_W - 6, 5, " " + str(item), align="L")
        pdf.ln(gap)


def draw_footer(pdf):
    pdf.set_y(PAGE_H - 34)
    pdf.set_fill_color(*DARK)
    pdf.rect(0, PAGE_H - 34, PAGE_W, 34, style="F")
    pdf.set_font("DejaVu", "B", 9)
    pdf.set_text_color(*ACCENT)
    pdf.set_xy(MARGIN, PAGE_H - 29)
    pdf.cell(CONTENT_W, 5, CONTACT["name"], align="L")
    pdf.set_font("DejaVu", "", 8)
    pdf.set_text_color(*SUBTEXT)
    pdf.set_xy(MARGIN, PAGE_H - 23)
    pdf.cell(CONTENT_W, 4, CONTACT["role"], align="L")
    pdf.set_xy(MARGIN, PAGE_H - 17)
    pdf.cell(CONTENT_W / 2, 4, f"{CONTACT['email']}  ·  {CONTACT['phone']}", align="L")
    pdf.set_xy(MARGIN + CONTENT_W / 2, PAGE_H - 17)
    pdf.cell(CONTENT_W / 2, 4, f"{CONTACT['github']}  ·  {CONTACT['linkedin']}", align="R")
    pdf.set_xy(MARGIN, PAGE_H - 11)
    pdf.set_font("DejaVu", "", 7)
    pdf.set_text_color(*MUTED)
    pdf.cell(CONTENT_W, 4, "Téléchargeable depuis le portfolio · Documents détaillés de mes services", align="L")


def generate_service(pdf, svc):
    pdf.add_page()
    draw_header(pdf, svc["category"], svc["title"], svc["subtitle"])

    # ensure content starts clearly below the dark header band (52mm)
    if pdf.get_y() < 58:
        pdf.set_y(58)
    pdf.set_xy(MARGIN, pdf.get_y())
    pdf.set_font("DejaVu", "", 10.5)
    pdf.set_text_color(*BODY)
    pdf.multi_cell(CONTENT_W, 6, svc["description"], align="L")

    section_title(pdf, "Problèmes adressés")
    bullet_list(pdf, svc["problems"], color=YELLOW)

    section_title(pdf, "Solutions proposées")
    bullet_list(pdf, svc["solutions"], color=GREEN)

    section_title(pdf, "Bénéfices pour votre entreprise")
    bullet_list(pdf, svc["benefits"])

    section_title(pdf, "Stack technique")
    chips(pdf, svc["stack"])

    section_title(pdf, "Approche & méthodologie")
    numbered(pdf, svc["approach"])

    draw_footer(pdf)


def generate_catalogue(pdf):
    pdf.add_page()
    draw_header(pdf, "Offres & Services", "Catalogue de services", "Développement, IA & Produit — du cadrage à la mise en production")

    # start content clearly below the dark header band (52mm)
    pdf.set_y(58)
    pdf.set_font("DejaVu", "", 10.5)
    pdf.set_text_color(*BODY)
    pdf.multi_cell(
        CONTENT_W,
        6,
        "Ce document présente l'ensemble de mes services. Chaque offre fait l'objet d'une "
        "fiche détaillée (téléchargeable depuis le portfolio) incluant les problèmes adressés, "
        "les solutions, les bénéfices, le stack technique et la méthodologie.",
        align="L",
    )

    card_h = 36
    for i, svc in enumerate(SERVICES):
        y = pdf.get_y() + 5
        pdf.set_fill_color(*SURFACE_LIGHT)
        pdf.set_draw_color(*BORDER_LIGHT)
        pdf.rect(MARGIN, y, CONTENT_W, card_h, style="FD")

        pdf.set_fill_color(*ACCENT)
        pdf.rect(MARGIN, y, 3, card_h, style="F")

        pdf.set_xy(MARGIN + 12, y + 6)
        pdf.set_font("DejaVu", "B", 13)
        pdf.set_text_color(*BODY)
        pdf.cell(CONTENT_W - 20, 7, svc["title"], align="L")

        pdf.set_xy(MARGIN + 12, y + 15)
        pdf.set_font("DejaVu", "", 9)
        pdf.set_text_color(*BODY_SUB)
        pdf.multi_cell(CONTENT_W - 20, 5, svc["subtitle"], align="L")

        pdf.set_xy(MARGIN + 12, y + 15 + 12)
        pdf.set_font("DejaVu", "B", 8)
        pdf.set_text_color(*ACCENT)
        stack_preview = " • ".join(svc["stack"][:5]) + (" ..." if len(svc["stack"]) > 5 else "")
        pdf.cell(CONTENT_W - 20, 5, stack_preview, align="L")

        pdf.set_y(y + card_h + 3)

    draw_footer(pdf)


def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    for svc in SERVICES:
        pdf = FPDF(format="A4", unit="mm")
        pdf.set_auto_page_break(auto=True, margin=16)
        register_fonts(pdf)
        generate_service(pdf, svc)
        out = os.path.join(OUT_DIR, f"{svc['slug']}.pdf")
        pdf.output(out)
        print("wrote", out)

    cat = FPDF(format="A4", unit="mm")
    cat.set_auto_page_break(auto=True, margin=16)
    register_fonts(cat)
    generate_catalogue(cat)
    out = os.path.join(OUT_DIR, "catalogue-services.pdf")
    cat.output(out)
    print("wrote", out)


if __name__ == "__main__":
    main()
