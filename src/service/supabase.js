import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://geyocaunfjzdwsavvfgh.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdleW9jYXVuZmp6ZHdzYXZ2ZmdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMDk2NTEsImV4cCI6MjAzNjY4NTY1MX0.rLrIph-EYKMB4aQUKSso6e60Y8Y7-FVSH3drkzT2P68";

export const supabase = createClient(supabaseUrl, supabaseKey);
