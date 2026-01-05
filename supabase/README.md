# Supabase Database Structure

This directory contains the database schema and migrations for the portfolio application.

## Database Schema

The database consists of 6 main tables:

### 1. Projects Table
Stores portfolio projects to showcase work.

**Columns:**
- `id` (UUID): Primary key
- `title` (VARCHAR): Project name
- `description` (TEXT): Short description
- `long_description` (TEXT): Detailed description
- `image_url` (TEXT): Project image URL
- `project_url` (TEXT): Live project URL
- `github_url` (TEXT): GitHub repository URL
- `technologies` (JSONB): Array of technologies used
- `category` (VARCHAR): Project category (e.g., "Web Development")
- `featured` (BOOLEAN): Whether to feature on homepage
- `start_date` (DATE): Project start date
- `end_date` (DATE): Project end date
- `status` (VARCHAR): Project status (e.g., "completed", "in-progress")
- `order_index` (INTEGER): Display order
- `created_at` (TIMESTAMPTZ): Creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

### 2. Skills Table
Stores technical skills and competencies.

**Columns:**
- `id` (UUID): Primary key
- `name` (VARCHAR): Skill name
- `category` (VARCHAR): Skill category (e.g., "Frontend", "Backend", "Tools")
- `proficiency_level` (INTEGER): Level from 1-5
- `years_of_experience` (NUMERIC): Years of experience
- `icon_url` (TEXT): Skill icon URL
- `order_index` (INTEGER): Display order
- `created_at` (TIMESTAMPTZ): Creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

### 3. Experience Table
Stores professional work experience.

**Columns:**
- `id` (UUID): Primary key
- `company_name` (VARCHAR): Company name
- `position` (VARCHAR): Job title
- `description` (TEXT): Job description
- `start_date` (DATE): Employment start date
- `end_date` (DATE): Employment end date (NULL if current)
- `is_current` (BOOLEAN): Whether currently employed
- `location` (VARCHAR): Job location
- `company_url` (TEXT): Company website URL
- `logo_url` (TEXT): Company logo URL
- `achievements` (JSONB): Array of achievements
- `order_index` (INTEGER): Display order
- `created_at` (TIMESTAMPTZ): Creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

### 4. Education Table
Stores educational background.

**Columns:**
- `id` (UUID): Primary key
- `institution` (VARCHAR): School/university name
- `degree` (VARCHAR): Degree name
- `field_of_study` (VARCHAR): Major/specialization
- `description` (TEXT): Additional details
- `start_date` (DATE): Start date
- `end_date` (DATE): End date (NULL if current)
- `is_current` (BOOLEAN): Whether currently enrolled
- `location` (VARCHAR): Institution location
- `grade` (VARCHAR): Grade/GPA
- `logo_url` (TEXT): Institution logo URL
- `order_index` (INTEGER): Display order
- `created_at` (TIMESTAMPTZ): Creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

### 5. Contact Messages Table
Stores messages submitted via contact form.

**Columns:**
- `id` (UUID): Primary key
- `name` (VARCHAR): Sender name
- `email` (VARCHAR): Sender email
- `subject` (VARCHAR): Message subject
- `message` (TEXT): Message content
- `is_read` (BOOLEAN): Whether message has been read
- `replied` (BOOLEAN): Whether message has been replied to
- `replied_at` (TIMESTAMPTZ): Reply timestamp
- `created_at` (TIMESTAMPTZ): Creation timestamp

### 6. Services Table
Stores professional services offered on the portfolio.

**Columns:**
- `id` (UUID): Primary key
- `title` (VARCHAR): Service name
- `slug` (VARCHAR): URL-friendly identifier (unique)
- `category` (VARCHAR): Service category (e.g., "AI & Automation", "Web Development", "Product Management")
- `subtitle` (TEXT): Short subtitle
- `description` (TEXT): Detailed service description
- `icon_url` (TEXT): Service icon URL
- `problems_addressed` (JSONB): Array of problems this service addresses
- `solutions` (JSONB): Array of solutions provided
- `benefits` (JSONB): Array of client benefits
- `tech_stack` (JSONB): Array of technologies used (for technical services)
- `approach` (JSONB): Array of methodology/approach details
- `status` (VARCHAR): Service status (e.g., "active", "in_development", "coming_soon")
- `featured` (BOOLEAN): Whether to feature this service
- `order_index` (INTEGER): Display order
- `metadata` (JSONB): Additional flexible metadata
- `created_at` (TIMESTAMPTZ): Creation timestamp
- `updated_at` (TIMESTAMPTZ): Last update timestamp

## Row Level Security (RLS)

All tables have RLS enabled with the following policies:

### Projects, Skills, Experience, Education, Services
- **Public Read Access**: Anyone can view these records
- **Authenticated Write Access**: Only authenticated users can create, update, or delete records

### Contact Messages
- **Public Insert**: Anyone can submit messages via contact form
- **Authenticated Read/Update/Delete**: Only authenticated users can view and manage messages

## Migrations

Migrations are located in the `migrations/` directory and are applied in order:

1. `20260105000001_initial_schema.sql` - Creates initial tables (projects, skills, experience, education, contact_messages), indexes, and triggers
2. `20260105000002_rls_policies.sql` - Sets up Row Level Security policies for initial tables
3. `20260105000003_add_services_table.sql` - Creates services table with indexes and triggers
4. `20260105000004_services_rls_policies.sql` - Sets up Row Level Security policies for services table

## Seed Data

Sample data for development and testing is provided in `seed.sql`. This includes:
- 3 sample projects
- 12 sample skills
- 2 sample work experiences
- 2 sample education entries
- 3 sample services (IA & Automatisation, Full Stack, Product Owner)

## Usage

### Local Development with Supabase CLI

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Initialize Supabase (if not already initialized):
```bash
supabase init
```

3. Start local Supabase:
```bash
supabase start
```

4. Apply migrations:
```bash
supabase db reset
```

5. (Optional) Load seed data:
```bash
supabase db seed
```

### Production Deployment

1. Link to your Supabase project:
```bash
supabase link --project-ref your-project-ref
```

2. Push migrations to production:
```bash
supabase db push
```

## Environment Variables

Add these to your `.env` file:

```env
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-anon-key
```

## API Usage Examples

### Fetch all projects
```typescript
const { data: projects } = await supabase
  .from('projects')
  .select('*')
  .eq('featured', true)
  .order('order_index', { ascending: true })
```

### Fetch skills by category
```typescript
const { data: skills } = await supabase
  .from('skills')
  .select('*')
  .eq('category', 'Frontend')
  .order('order_index', { ascending: true })
```

### Insert contact message
```typescript
const { data, error } = await supabase
  .from('contact_messages')
  .insert([
    {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Question',
      message: 'Hello!'
    }
  ])
```

### Fetch all active services
```typescript
const { data: services } = await supabase
  .from('services')
  .select('*')
  .eq('status', 'active')
  .order('order_index', { ascending: true })
```

### Fetch service by slug
```typescript
const { data: service } = await supabase
  .from('services')
  .select('*')
  .eq('slug', 'ia-automatisation')
  .single()
```
```

## Indexes

Indexes are created on commonly queried columns for optimal performance:
- Projects: featured, category, status, created_at
- Skills: category, order_index
- Experience: is_current, start_date
- Education: is_current, start_date
- Contact Messages: is_read, created_at
- Services: category, status, featured, slug, order_index

## Automatic Timestamp Updates

The `updated_at` column is automatically updated on all relevant tables using database triggers whenever a record is modified.
