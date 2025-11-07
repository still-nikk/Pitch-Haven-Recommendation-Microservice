import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase URL and anon key
const SUPABASE_URL = 'https://qzutdqrlfijhslnbqosw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dXRkcXJsZmlqaHNsbmJxb3N3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzOTc0NDYsImV4cCI6MjA3NDk3MzQ0Nn0.T9Fcrs_G3djFKBeNJi_59o_Eoexy0DGPrpJ0zJ1Q-bs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
