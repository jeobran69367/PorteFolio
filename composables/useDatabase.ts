import type { Database } from '~/types/database'
import { mockServices, mockFeatures, mockProjects, mockExperience, mockEducation, mockSkills } from '~/data/mockContent'

/**
 * Composable to access Supabase client with typed database schema.
 *
 * When Supabase is not configured (no `.env`, or placeholder URL from the
 * default `nuxt.config`), every method gracefully falls back to the rich mock
 * content in `~/data/mockContent` so the portfolio always renders complete,
 * professional data (local dev, previews and demos).
 *
 * @example
 * ```typescript
 * const db = useDatabase()
 * const { data: projects } = await db.projects.getFeatured()
 * ```
 */
export const useDatabase = () => {
  const client = useSupabaseClient<Database>()
  const supa: any = client

  // Detect whether a real Supabase backend is configured.
  const rawUrl = (import.meta.env?.SUPABASE_URL as string) || (process.env.SUPABASE_URL as string) || ''
  const useMock = !rawUrl || rawUrl === 'https://placeholder.supabase.co'

  const ok = (data: any) => ({ data, error: null })
  const fail = (error: any) => ({ data: null, error })

  // Wrap a query so it uses mock data when Supabase is unavailable.
  const whenConfigured = async (query: () => Promise<any>, fallback: any) => {
    if (useMock) return ok(fallback)
    try {
      const res = await query()
      if (res?.error) return ok(res.data ?? fallback)
      return res
    } catch (err) {
      console.warn('[useDatabase] Supabase request failed, falling back to mock data.', err)
      return ok(fallback)
    }
  }

  const singleWhenConfigured = async (query: () => Promise<any>, fallback: any) => {
    if (useMock) return ok(fallback)
    try {
      const res = await query()
      if (res?.error) return ok(fallback)
      return res
    } catch (err) {
      console.warn('[useDatabase] Supabase request failed, falling back to mock data.', err)
      return ok(fallback)
    }
  }

  return {
    client,

    // Projects
    projects: {
      getAll: async () =>
        whenConfigured(
          () => client.from('projects').select('*').order('order_index', { ascending: true }),
          mockProjects,
        ),

      getFeatured: async () =>
        whenConfigured(
          () => client.from('projects').select('*').eq('featured', true).order('order_index', { ascending: true }),
          mockProjects.filter((p) => p.featured),
        ),

      getByCategory: async (category: string) =>
        whenConfigured(
          () => client.from('projects').select('*').eq('category', category).order('order_index', { ascending: true }),
          mockProjects.filter((p) => p.category === category),
        ),

      getById: async (id: string) =>
        singleWhenConfigured(
          () => client.from('projects').select('*').eq('id', id).single(),
          mockProjects.find((p) => p.id === id) ?? null,
        ),

      create: async (project: any) =>
        useMock ? ok(project) : supa.from('projects').insert([project]).select().single(),

      update: async (id: string, updates: any) =>
        useMock
          ? ok({ ...mockProjects.find((p) => p.id === id), ...updates })
          : supa.from('projects').update(updates).eq('id', id).select().single(),

      delete: async (id: string) =>
        useMock ? ok(null) : supa.from('projects').delete().eq('id', id),
    },

    // Skills
    skills: {
      getAll: async () =>
        whenConfigured(
          () => client.from('skills').select('*').order('order_index', { ascending: true }),
          mockSkills,
        ),

      getByCategory: async (category: string) =>
        whenConfigured(
          () => client.from('skills').select('*').eq('category', category).order('order_index', { ascending: true }),
          mockSkills.filter((s) => s.category === category),
        ),
    },

    // Experience
    experience: {
      getAll: async () =>
        whenConfigured(
          () => client.from('experience').select('*').order('start_date', { ascending: false }),
          mockExperience,
        ),

      getCurrent: async () =>
        whenConfigured(
          () => client.from('experience').select('*').eq('is_current', true).order('start_date', { ascending: false }),
          mockExperience.filter((e) => e.is_current),
        ),
    },

    // Education
    education: {
      getAll: async () =>
        whenConfigured(
          () => client.from('education').select('*').order('start_date', { ascending: false }),
          mockEducation,
        ),

      getCurrent: async () =>
        whenConfigured(
          () => client.from('education').select('*').eq('is_current', true).order('start_date', { ascending: false }),
          mockEducation.filter((e) => e.is_current),
        ),
    },

    // Contact Messages
    contactMessages: {
      create: async (message: { name: string; email: string; subject?: string; message: string }) =>
        useMock
          ? ok({ ...message, id: `msg-${Date.now()}`, created_at: new Date().toISOString() })
          : supa.from('contact_messages').insert([message]),

      getAll: async () =>
        useMock
          ? ok([])
          : supa.from('contact_messages').select('*').order('created_at', { ascending: false }),

      getUnread: async () =>
        useMock
          ? ok([])
          : supa.from('contact_messages').select('*').eq('is_read', false).order('created_at', { ascending: false }),

      markAsRead: async (id: string) =>
        useMock ? ok(null) : supa.from('contact_messages').update({ is_read: true }).eq('id', id),
    },

    // Services
    services: {
      getAll: async () =>
        whenConfigured(
          () => client.from('services').select('*').order('order_index', { ascending: true }),
          mockServices,
        ),

      getActive: async () =>
        whenConfigured(
          () => client.from('services').select('*').eq('status', 'active').order('order_index', { ascending: true }),
          mockServices.filter((s) => s.status === 'active'),
        ),

      getFeatured: async () =>
        whenConfigured(
          () => client.from('services').select('*').eq('featured', true).eq('status', 'active').order('order_index', { ascending: true }),
          mockServices.filter((s) => s.featured && s.status === 'active'),
        ),

      getBySlug: async (slug: string) =>
        singleWhenConfigured(
          () => client.from('services').select('*').eq('slug', slug).single(),
          mockServices.find((s) => s.slug === slug) ?? null,
        ),

      getByCategory: async (category: string) =>
        whenConfigured(
          () => client.from('services').select('*').eq('category', category).order('order_index', { ascending: true }),
          mockServices.filter((s) => s.category === category),
        ),
    },

    // Storage
    storage: {
      uploadProjectImage: async (file: File, path?: string) => {
        if (useMock) return { data: { path: path || file.name, url: '' }, error: null }
        const fileName = path || `${Date.now()}-${file.name}`
        const filePath = `projects/${fileName}`

        const { data, error } = await client.storage
          .from('project-images')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
          })

        if (error) return { data: null, error }

        const { data: { publicUrl } } = client.storage
          .from('project-images')
          .getPublicUrl(filePath)

        return { data: { path: filePath, url: publicUrl }, error: null }
      },

      deleteProjectImage: async (input: any) => {
        if (useMock) return { data: null, error: null }
        const resolvePath = (p: any): string | null => {
          if (!p) return null
          if (typeof p === 'string') {
            if (p.startsWith('projects/')) return p
            const idx = p.indexOf('project-images/')
            if (idx !== -1) return decodeURIComponent(p.slice(idx + 'project-images/'.length))
            const m = p.match(/object\/public\/project-images\/(.+)$/)
            if (m && m[1]) return decodeURIComponent(m[1])
            try {
              const dec = decodeURIComponent(p)
              const idx2 = dec.indexOf('project-images/')
              if (idx2 !== -1) return dec.slice(idx2 + 'project-images/'.length)
            } catch (e) {
              // ignore
            }
            return null
          }
          if (typeof p === 'object') {
            if (p.path) return p.path.replace(/^\/+/, '')
            if (p.url) return resolvePath(p.url)
          }
          return null
        }

        const inputs = Array.isArray(input) ? input : [input]
        const filePaths: string[] = inputs
          .map((i) => resolvePath(i))
          .filter((x): x is string => typeof x === 'string' && x.length > 0)

        if (filePaths.length === 0) return { data: null, error: null }

        try {
          return await client.storage.from('project-images').remove(filePaths)
        } catch (err) {
          return { data: null, error: err }
        }
      },
    },

    // Features (for modular lists on pages)
    features: {
      getAll: async () =>
        whenConfigured(
          () => client.from('features').select('*').order('order_index', { ascending: true }),
          mockFeatures,
        ),

      getBySection: async (section: string) =>
        whenConfigured(
          () => client.from('features').select('*').eq('section', section).order('order_index', { ascending: true }),
          mockFeatures.filter((f) => f.section === section),
        ),

      getByService: async (serviceId: string) =>
        whenConfigured(
          () => client.from('features').select('*').eq('service_id', serviceId).order('order_index', { ascending: true }),
          mockFeatures.filter((f) => f.service_id === serviceId),
        ),
    },
  }
}
