import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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
