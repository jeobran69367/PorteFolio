import type { Database } from '~/types/database'

/**
 * Composable to access Supabase client with typed database schema
 * 
 * @example
 * ```typescript
 * const client = useSupabaseClient<Database>()
 * 
 * // Fetch projects
 * const { data: projects } = await client
 *   .from('projects')
 *   .select('*')
 *   .eq('featured', true)
 * ```
 */
export const useDatabase = () => {
  const client = useSupabaseClient<Database>()
  const supa: any = client
  
  return {
    client,
    
    // Projects
    projects: {
      getAll: async () => {
        return await client
          .from('projects')
          .select('*')
          .order('order_index', { ascending: true })
      },
      
      getFeatured: async () => {
        return await client
          .from('projects')
          .select('*')
          .eq('featured', true)
          .order('order_index', { ascending: true })
      },
      
      getByCategory: async (category: string) => {
        return await client
          .from('projects')
          .select('*')
          .eq('category', category)
          .order('order_index', { ascending: true })
      },
      
      getById: async (id: string) => {
        return await client
          .from('projects')
          .select('*')
          .eq('id', id)
          .single()
      },
      
      create: async (project: any) => {
        return await supa
          .from('projects')
          .insert([project])
          .select()
          .single()
      },
      
      update: async (id: string, updates: any) => {
        return await supa
          .from('projects')
          .update(updates)
          .eq('id', id)
          .select()
          .single()
      },
      
      delete: async (id: string) => {
        return await supa
          .from('projects')
          .delete()
          .eq('id', id)
      }
    },
    
    // Skills
    skills: {
      getAll: async () => {
        return await client
          .from('skills')
          .select('*')
          .order('order_index', { ascending: true })
      },
      
      getByCategory: async (category: string) => {
        return await client
          .from('skills')
          .select('*')
          .eq('category', category)
          .order('order_index', { ascending: true })
      }
    },
    
    // Experience
    experience: {
      getAll: async () => {
        return await client
          .from('experience')
          .select('*')
          .order('start_date', { ascending: false })
      },
      
      getCurrent: async () => {
        return await client
          .from('experience')
          .select('*')
          .eq('is_current', true)
          .order('start_date', { ascending: false })
      }
    },
    
    // Education
    education: {
      getAll: async () => {
        return await client
          .from('education')
          .select('*')
          .order('start_date', { ascending: false })
      },
      
      getCurrent: async () => {
        return await client
          .from('education')
          .select('*')
          .eq('is_current', true)
          .order('start_date', { ascending: false })
      }
    },
    
    // Contact Messages
    contactMessages: {
      create: async (message: {
        name: string
        email: string
        subject?: string
        message: string
      }) => {
        return await supa
          .from('contact_messages')
          .insert([message])
      },
      
      getAll: async () => {
        return await supa
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false })
      },
      
      getUnread: async () => {
        return await supa
          .from('contact_messages')
          .select('*')
          .eq('is_read', false)
          .order('created_at', { ascending: false })
      },
      
      markAsRead: async (id: string) => {
        return await supa
          .from('contact_messages')
          .update({ is_read: true })
          .eq('id', id)
      }
    },
    
    // Services
    services: {
      getAll: async () => {
        return await client
          .from('services')
          .select('*')
          .order('order_index', { ascending: true })
      },
      
      getActive: async () => {
        return await client
          .from('services')
          .select('*')
          .eq('status', 'active')
          .order('order_index', { ascending: true })
      },
      
      getFeatured: async () => {
        return await client
          .from('services')
          .select('*')
          .eq('featured', true)
          .eq('status', 'active')
          .order('order_index', { ascending: true })
      },
      
      getBySlug: async (slug: string) => {
        return await client
          .from('services')
          .select('*')
          .eq('slug', slug)
          .single()
      },
      
      getByCategory: async (category: string) => {
        return await client
          .from('services')
          .select('*')
          .eq('category', category)
          .order('order_index', { ascending: true })
      }
    },
    
    // Storage
    storage: {
      uploadProjectImage: async (file: File, path?: string) => {
        const fileName = path || `${Date.now()}-${file.name}`
        const filePath = `projects/${fileName}`
        
        const { data, error } = await client.storage
          .from('project-images')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false
          })
        
        if (error) return { data: null, error }
        
        // Get public URL
        const { data: { publicUrl } } = client.storage
          .from('project-images')
          .getPublicUrl(filePath)
        
        return { data: { path: filePath, url: publicUrl }, error: null }
      },
      
      deleteProjectImage: async (input: any) => {
        // Normalize input to an array of strings representing the paths inside the bucket
        const resolvePath = (p: any): string | null => {
          if (!p) return null
          if (typeof p === 'string') {
            // If already a bucket-relative path like 'projects/...' return it
            if (p.startsWith('projects/')) return p

            // If the string contains 'project-images/' (public URL or storage URL), take the remainder
            const idx = p.indexOf('project-images/')
            if (idx !== -1) {
              return decodeURIComponent(p.slice(idx + 'project-images/'.length))
            }

            // If the string contains 'object/public/' pattern (supabase public URL)
            const m = p.match(/object\/public\/project-images\/(.+)$/)
            if (m && m[1]) return decodeURIComponent(m[1])

            // Try decode/inspect
            try {
              const dec = decodeURIComponent(p)
              const idx2 = dec.indexOf('project-images/')
              if (idx2 !== -1) return dec.slice(idx2 + 'project-images/'.length)
            } catch (e) {
              // ignore
            }

            // Unknown format
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
          .map(i => resolvePath(i))
          .filter((x): x is string => typeof x === 'string' && x.length > 0)

        if (filePaths.length === 0) {
          // Nothing to delete or bad format
          return { data: null, error: null }
        }

        try {
          return await client.storage
            .from('project-images')
            .remove(filePaths)
        } catch (err) {
          return { data: null, error: err }
        }
      }
    }
  }
}
