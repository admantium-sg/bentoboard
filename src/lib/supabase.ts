import { createClient, SupabaseClient } from '@supabase/supabase-js'

// We use a simple untyped client to avoid complex generic conflicts.
// Type safety is enforced by our own types.ts definitions.

let _client: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (_client) return _client

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase env vars. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local'
    )
  }

  _client = createClient(supabaseUrl, supabaseAnonKey)
  return _client
}
