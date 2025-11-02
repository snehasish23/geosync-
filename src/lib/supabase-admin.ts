import { createClient } from '@supabase/supabase-js';

// Create a Supabase client with the service role key for admin operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

// Function to create the contact_submissions table if it doesn't exist
export async function setupContactSubmissionsTable() {
  try {
    console.log('Creating contact_submissions table if it does not exist...');
    
    // Create the table directly using simpler SQL commands
    // First check if table exists
    const { data: tableExists, error: checkError } = await supabaseAdmin
      .from('contact_submissions')
      .select('id')
      .limit(1)
      .maybeSingle();
    
    if (checkError && !checkError.message.includes('does not exist')) {
      console.error('Error checking table:', checkError);
      return false;
    }
    
    // If we got data or no specific error, table exists
    if (tableExists || !checkError) {
      console.log('Table already exists');
      return true;
    }
    
    // Table doesn't exist, create it
    const { error } = await supabaseAdmin.sql`
      CREATE TABLE public.contact_submissions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        organization TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;
    
    if (error) {
      console.error('Error creating table:', error);
      return false;
    }
    
    // Enable RLS
    const { error: rlsError } = await supabaseAdmin.sql`
      ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
    `;
    
    if (rlsError) {
      console.error('Error enabling RLS:', rlsError);
      // Continue anyway
    }
    
    // Create basic policies
    const { error: policyError } = await supabaseAdmin.sql`
      CREATE POLICY "Allow all access" ON public.contact_submissions FOR ALL USING (true);
    `;
    
    if (policyError) {
      console.error('Error creating policy:', policyError);
      // Continue anyway
    }
    
    console.log('Table setup completed successfully');
    return true;
  } catch (error) {
    console.error('Error setting up table:', error);
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