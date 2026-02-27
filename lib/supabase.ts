// Supabase clients — wired up in Session 3 when persistence is added.
// Stubs live here so imports don't break across the codebase.

import { createClient } from "@supabase/supabase-js";

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL  ?? "";
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Browser client (client components)
export function createSupabaseBrowserClient() {
  return createClient(supabaseUrl, supabaseAnon);
}

// Server client (server components + API routes)
export function createSupabaseServerClient() {
  return createClient(supabaseUrl, supabaseAnon);
}
