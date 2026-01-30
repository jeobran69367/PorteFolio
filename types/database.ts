// Database types for Supabase tables

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: Project
        Insert: ProjectInsert
        Update: ProjectUpdate
      }
      skills: {
        Row: Skill
        Insert: SkillInsert
        Update: SkillUpdate
      }
      experience: {
        Row: Experience
        Insert: ExperienceInsert
        Update: ExperienceUpdate
      }
      education: {
        Row: Education
        Insert: EducationInsert
        Update: EducationUpdate
      }
      contact_messages: {
        Row: ContactMessage
        Insert: ContactMessageInsert
        Update: ContactMessageUpdate
      }
      services: {
        Row: Service
        Insert: ServiceInsert
        Update: ServiceUpdate
      }
    }
  }
}

// Project types
export interface Project {
  id: string
  title: string
  description: string
  objectif: string[]
  solution: string[]
  long_description: string | null
  image_url: string | null
  project_url: string | null
  github_url: string | null
  technologies: string[]
  category: string | null
  featured: boolean
  start_date: string | null
  end_date: string | null
  status: string
  order_index: number
  created_at: string
  updated_at: string
}

export interface ProjectInsert {
  id?: string
  title: string
  description: string
  objectif?: string[]
  solution?: string[]
  long_description?: string | null
  image_url?: string | null
  project_url?: string | null
  github_url?: string | null
  technologies?: string[]
  category?: string | null
  featured?: boolean
  start_date?: string | null
  end_date?: string | null
  status?: string
  order_index?: number
  created_at?: string
  updated_at?: string
}

export interface ProjectUpdate {
  id?: string
  title?: string
  description?: string
  objectif?: string[]
  solution?: string[]
  long_description?: string | null
  image_url?: string | null
  project_url?: string | null
  github_url?: string | null
  technologies?: string[]
  category?: string | null
  featured?: boolean
  start_date?: string | null
  end_date?: string | null
  status?: string
  order_index?: number
  updated_at?: string
}

// Skill types
export interface Skill {
  id: string
  name: string
  category: string
  proficiency_level: number | null
  years_of_experience: number | null
  icon_url: string | null
  order_index: number
  created_at: string
  updated_at: string
}

export interface SkillInsert {
  id?: string
  name: string
  category: string
  proficiency_level?: number | null
  years_of_experience?: number | null
  icon_url?: string | null
  order_index?: number
  created_at?: string
  updated_at?: string
}

export interface SkillUpdate {
  id?: string
  name?: string
  category?: string
  proficiency_level?: number | null
  years_of_experience?: number | null
  icon_url?: string | null
  order_index?: number
  updated_at?: string
}

// Experience types
export interface Experience {
  id: string
  company_name: string
  position: string
  description: string | null
  start_date: string
  end_date: string | null
  is_current: boolean
  location: string | null
  company_url: string | null
  logo_url: string | null
  achievements: string[]
  order_index: number
  created_at: string
  updated_at: string
}

export interface ExperienceInsert {
  id?: string
  company_name: string
  position: string
  description?: string | null
  start_date: string
  end_date?: string | null
  is_current?: boolean
  location?: string | null
  company_url?: string | null
  logo_url?: string | null
  achievements?: string[]
  order_index?: number
  created_at?: string
  updated_at?: string
}

export interface ExperienceUpdate {
  id?: string
  company_name?: string
  position?: string
  description?: string | null
  start_date?: string
  end_date?: string | null
  is_current?: boolean
  location?: string | null
  company_url?: string | null
  logo_url?: string | null
  achievements?: string[]
  order_index?: number
  updated_at?: string
}

// Education types
export interface Education {
  id: string
  institution: string
  degree: string
  field_of_study: string | null
  description: string | null
  start_date: string
  end_date: string | null
  is_current: boolean
  location: string | null
  grade: string | null
  logo_url: string | null
  order_index: number
  created_at: string
  updated_at: string
}

export interface EducationInsert {
  id?: string
  institution: string
  degree: string
  field_of_study?: string | null
  description?: string | null
  start_date: string
  end_date?: string | null
  is_current?: boolean
  location?: string | null
  grade?: string | null
  logo_url?: string | null
  order_index?: number
  created_at?: string
  updated_at?: string
}

export interface EducationUpdate {
  id?: string
  institution?: string
  degree?: string
  field_of_study?: string | null
  description?: string | null
  start_date?: string
  end_date?: string | null
  is_current?: boolean
  location?: string | null
  grade?: string | null
  logo_url?: string | null
  order_index?: number
  updated_at?: string
}

// Contact Message types
export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string | null
  message: string
  is_read: boolean
  replied: boolean
  replied_at: string | null
  created_at: string
}

export interface ContactMessageInsert {
  id?: string
  name: string
  email: string
  subject?: string | null
  message: string
  is_read?: boolean
  replied?: boolean
  replied_at?: string | null
  created_at?: string
}

export interface ContactMessageUpdate {
  id?: string
  name?: string
  email?: string
  subject?: string | null
  message?: string
  is_read?: boolean
  replied?: boolean
  replied_at?: string | null
}

// Service types
export interface Service {
  id: string
  title: string
  slug: string
  category: string
  subtitle: string | null
  description: string
  icon_url: string | null
  problems_addressed: string[]
  solutions: string[]
  benefits: string[]
  tech_stack: string[]
  approach: string[]
  status: string
  featured: boolean
  order_index: number
  metadata: Record<string, any>
  created_at: string
  updated_at: string
}

export interface ServiceInsert {
  id?: string
  title: string
  slug: string
  category: string
  subtitle?: string | null
  description: string
  icon_url?: string | null
  problems_addressed?: string[]
  solutions?: string[]
  benefits?: string[]
  tech_stack?: string[]
  approach?: string[]
  status?: string
  featured?: boolean
  order_index?: number
  metadata?: Record<string, any>
  created_at?: string
  updated_at?: string
}

export interface ServiceUpdate {
  id?: string
  title?: string
  slug?: string
  category?: string
  subtitle?: string | null
  description?: string
  icon_url?: string | null
  problems_addressed?: string[]
  solutions?: string[]
  benefits?: string[]
  tech_stack?: string[]
  approach?: string[]
  status?: string
  featured?: boolean
  order_index?: number
  metadata?: Record<string, any>
  updated_at?: string
}
