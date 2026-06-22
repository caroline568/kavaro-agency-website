import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// These will be empty strings at build time if env vars aren't set —
// the client is only actually called at runtime in the browser.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder",
);

// ── Types matching the database schema ──────────────────────────────────────

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
