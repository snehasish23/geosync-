import { createClient } from '@supabase/supabase-js';

// Create a Supabase client with the service role key for admin operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Function to create the contact_submissions table if it doesn't exist
export async function setupContactSubmissionsTable() {
  try {
    // Use RPC to run an idempotent setup function defined in the DB.
    const { data, error } = await supabaseAdmin.rpc('setup_contact_submissions');

    if (error) {
      console.error('Setup RPC failed:', error);
      return false;
    }

    console.log('Setup RPC executed successfully', data ?? '');
    return true;
  } catch (error) {
    console.error('Error running setup RPC:', error);
    return false;
  }
}

// Function to get all contact submissions
export async function getAllContactSubmissions() {
  const { data, error } = await supabaseAdmin
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    console.error('Error fetching submissions:', error);
    return [];
  }
  
  return data;
}