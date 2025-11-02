import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveContactSubmission(data: {
  name: string;
  email: string;
  phone?: string;
  org?: string;
  message: string;
}) {
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        organization: data.org || null,
        message: data.message,
        created_at: new Date().toISOString()
      }
    ]);

  if (error) {
    console.error('Error saving contact submission:', error);
    throw error;
  }

  return result;
}