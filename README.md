# Portfolio Website

A modern portfolio website built with Nuxt.js and Supabase.

## Features

- 🎨 Modern and responsive design
- 🗄️ Supabase backend for data management
- 🔒 Row Level Security (RLS) for data protection
- 📝 Contact form with message storage
- 💼 Projects showcase
- 🎓 Education and experience sections
- 🛠️ Skills display with proficiency levels
- 📱 TypeScript support for type safety

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

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
cp .env.example .env
```

Edit `.env`:
```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_KEY=your-anon-key-here
```

### 3. Set Up Database

#### Option A: Using Supabase Dashboard (Recommended for Production)

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the migrations in order:
   - First: `supabase/migrations/20260105000001_initial_schema.sql`
   - Second: `supabase/migrations/20260105000002_rls_policies.sql`
4. (Optional) Run `supabase/seed.sql` for sample data

#### Option B: Using Supabase CLI (Recommended for Local Development)

```bash
# Install Supabase CLI
npm install -g supabase

# Start local Supabase (includes PostgreSQL, Auth, Storage, etc.)
supabase start

# Apply migrations
supabase db reset

# Load seed data (optional)
psql -h localhost -p 54322 -U postgres -d postgres -f supabase/seed.sql
```

See [supabase/README.md](./supabase/README.md) for detailed database documentation.

## Development Server

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

The application uses 5 main tables:

- **projects** - Portfolio projects showcase
- **skills** - Technical skills and competencies
- **experience** - Professional work experience
- **education** - Educational background
- **contact_messages** - Contact form submissions

See [supabase/README.md](./supabase/README.md) for complete database documentation.

## Project Structure

```
├── app/                    # Nuxt application files
├── supabase/              # Supabase configuration and migrations
│   ├── migrations/        # Database migrations
│   ├── config.toml        # Supabase local config
│   ├── seed.sql          # Sample data
│   └── README.md         # Database documentation
├── types/                 # TypeScript type definitions
│   └── database.ts       # Database types
├── public/               # Static assets
├── .env.example          # Environment variables template
└── nuxt.config.ts        # Nuxt configuration
```

## Resources

- [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
- [Supabase documentation](https://supabase.com/docs)
- [Supabase Nuxt module](https://supabase.nuxtjs.org/)

## License

This project is open source and available under the MIT License.

