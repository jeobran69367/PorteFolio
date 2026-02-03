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
        return await client
          .from('projects')
          .insert([project])
          .select()
          .single()
      },
      
      update: async (id: string, updates: any) => {
        return await client
          .from('projects')
          .update(updates)
          .eq('id', id)
          .select()
          .single()
      },
      
      delete: async (id: string) => {
        return await client
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
        return await client
          .from('contact_messages')
          .insert([message])
      },
      
      getAll: async () => {
        return await client
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false })
      },
      
      getUnread: async () => {
        return await client
          .from('contact_messages')
          .select('*')
          .eq('is_read', false)
          .order('created_at', { ascending: false })
      },
      
      markAsRead: async (id: string) => {
        return await client
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
      
      deleteProjectImage: async (path: string) => {
        // Extract the file path from the URL or use as-is if it's already a path
        let filePath = path
        
        // If it's a full URL, extract just the path
        if (path.includes('project-images/')) {
          filePath = path.substring(path.indexOf('project-images/') + 'project-images/'.length)
        }
        
        return await client.storage
          .from('project-images')
          .remove([filePath])
      }
    }
  }
}
