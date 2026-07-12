import { createClient } from "@supabase/supabase-js";

// ── Supabase Configuration ─────────────────────────────────────────────────
//
// To hand this project over to a new owner / new Supabase project:
//
//   1. Create a new Supabase project at https://supabase.com
//   2. Run the SQL in supabase/migrations/001_initial_schema.sql
//      (and optionally 002_optional_additions.sql)
//   3. Create an admin user in Supabase > Authentication > Users
//   4. Put the new project's URL + anon key in .env
//      (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY — see .env.example).
//      Both are found in Project Settings > API.
//   5. Update VITE_CALENDLY_URL in .env to the new Calendly event URL
//   6. Update hello@kavaroagency.com references in Navbar.tsx,
//      Footer.tsx, and api.ts to the new business email
//
// The anon key is safe to ship to the browser — Supabase Row Level
// Security policies control what it can actually access.

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // Fail loudly rather than silently connecting to the wrong/no project.
  throw new Error(
    "Missing Supabase config. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY " +
      "in your .env file (copy from .env.example).",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ── Database types ─────────────────────────────────────────────────────────

export type DbLead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  status: "new" | "read" | "replied";
  email_sent: boolean;
  created_at: string;
};

export type DbNote = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

export type DbBookedCall = {
  id: string;
  name: string | null;
  email: string | null;
  service: string | null;
  calendly_url: string;
  created_at: string;
};
