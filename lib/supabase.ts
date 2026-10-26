import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://oorkdkikqpxfmtidebaj.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vcmtka2lrcXB4Zm10aWRlYmFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NTI4NzUsImV4cCI6MjEwODMyODg3NX0.txbzW0ojhbv-4B0qvOIdHpy3GZpgFAOosNIefjP4cJs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
