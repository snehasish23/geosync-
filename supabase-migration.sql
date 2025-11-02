-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS policies (Row Level Security)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to read all rows
CREATE POLICY "Service role can read all contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  TO service_role 
  USING (true);

-- Create policy to allow service role to insert rows
CREATE POLICY "Service role can insert contact submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  TO service_role 
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all rows (for admin dashboard)
CREATE POLICY "Authenticated users can read all contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  TO authenticated 
  USING (true);