export default defineNuxtRouteMiddleware(async (to, from) => {
  const client = useSupabaseClient()
  
  const { data: { session } } = await client.auth.getSession()
  
  // If not authenticated, redirect to login
  if (!session) {
    return navigateTo('/admin/login')
  }
})
