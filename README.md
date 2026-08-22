# Portfolio Website

A modern, professional portfolio built with Nuxt 4 + Supabase.

## Features

- 🎨 Modern and responsive design with a complete design system (dark/light themes)
- 🗄️ Supabase backend for data management
- 🔒 Row Level Security (RLS) for data protection
- 📝 Contact modal (WhatsApp, Calendly, email)
- 💼 Projects showcase with detail pages
- 🛠️ Services with grouped (problems / solutions / benefits) sections
- 📄 **Ressources** page: downloadable service brochures (PDF)
- 🎓 Education, certifications and experience sections
- 📱 TypeScript support for type safety
- 🧪 **Mock data fallback** — the site is fully functional without a Supabase project (great for local dev, previews and demos)

## Ressources téléchargeables

Le portfolio propose une page `/ressources` avec des brochures de services en PDF :
`catalogue-services.pdf`, `ia-automatisation.pdf`, `full-stack.pdf`, `product-owner.pdf`.

Ces documents sont générés par un script Python (fpdf2). Pour les régénérer :

```bash
python3 -m venv .pdfenv
source .pdfenv/bin/activate
pip install fpdf2
python3 scripts/generate-services-pdfs.py
```

Les PDF sont écrits dans `public/pdf/services/`. (Le venv `.pdfenv` n'est pas versionné.)

## Setup

### 1. Install Dependencies

Make sure to install dependencies:

```bash
# pnpm (recommended)
pnpm install

# npm
npm install

# yarn
yarn install

# bun
bun install
```

### 2. Configure Supabase

You have three options for running the application:

#### Option A: With Mock Data Only (Quickest - No Setup Required)

The application will work immediately without any Supabase configuration. It will use rich mock data for all content. Simply skip creating a `.env` file and proceed to step 3. The seed content lives in `data/mockContent.ts` and is used automatically whenever the Supabase URL is missing or set to the placeholder.

#### Option B: With Local Supabase (Recommended for Development)

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Start local Supabase instance:
```bash
# This will start Supabase on http://127.0.0.1:54321
supabase start
```

3. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

4. Edit `.env` and uncomment the local Supabase configuration:
```env
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
```

5. Apply migrations and seed data:
```bash
supabase db reset
```

#### Option C: With Remote Supabase (Production/Staging)

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

4. Get your credentials from [Supabase Dashboard](https://app.supabase.com) → Project Settings → API

5. Edit `.env` and uncomment the remote Supabase configuration:
```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_KEY=your-anon-key-here
```

6. Run migrations via the Supabase Dashboard SQL Editor:
   - First: `supabase/migrations/20260105000001_initial_schema.sql`
   - Second: `supabase/migrations/20260105000002_rls_policies.sql`
7. (Optional) Run `supabase/seed.sql` for sample data

### 3. Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev

# npm
npm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build

# npm
npm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# pnpm
pnpm preview

# npm
npm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Database Structure

The application uses 6 main tables:

- **projects** - Portfolio projects showcase
- **skills** - Technical skills and competencies
- **experience** - Professional work experience
- **education** - Educational background
- **contact_messages** - Contact form submissions
- **services** - Professional services offered

See [supabase/README.md](./supabase/README.md) for complete database documentation.

## Project Structure

```
├── app.vue                 # Root component + global SEO
├── components/            # Reusable UI components
├── pages/                 # Routes (index, propos, projets, services, ressources, admin, design-system)
├── data/                  # Mock / fallback content (used when Supabase is not configured)
├── composables/           # useDatabase.ts (Supabase + mock fallback)
├── public/
│   ├── img/              # Images
│   └── pdf/services/     # Generated service brochures (PDF)
├── scripts/               # generate-services-pdfs.py (PDF brochure generator)
├── supabase/              # Supabase configuration and migrations
│   ├── migrations/        # Database migrations
│   ├── config.toml        # Supabase local config
│   ├── seed.sql           # Sample data
│   └── README.md          # Database documentation
├── types/                 # TypeScript type definitions
│   └── database.ts        # Database types
├── .env.example           # Environment variables template
└── nuxt.config.ts         # Nuxt configuration
```

## Resources

- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- [Supabase documentation](https://supabase.com/docs)
- [Supabase Nuxt module](https://supabase.nuxtjs.org/)

## License

This project is open source and available under the MIT License.

