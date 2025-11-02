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

-- Helper function to idempotently set up the contact_submissions table and policies
-- Call via Supabase JS using supabase.rpc('setup_contact_submissions')
CREATE OR REPLACE FUNCTION public.setup_contact_submissions()
RETURNS void AS $$
BEGIN
  -- Create table if it does not exist
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' AND table_name = 'contact_submissions'
  ) THEN
    CREATE TABLE public.contact_submissions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      organization TEXT,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    );
  END IF;

  -- Enable RLS (safe to run repeatedly)
  EXECUTE 'ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY';

  -- Conditionally create policies to avoid duplicates
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'contact_submissions' 
      AND polname = 'Service role can read all contact submissions'
  ) THEN
    CREATE POLICY "Service role can read all contact submissions" 
      ON public.contact_submissions 
      FOR SELECT 
      TO service_role 
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'contact_submissions' 
      AND polname = 'Service role can insert contact submissions'
  ) THEN
    CREATE POLICY "Service role can insert contact submissions" 
      ON public.contact_submissions 
      FOR INSERT 
      TO service_role 
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'contact_submissions' 
      AND polname = 'Authenticated users can read all contact submissions'
  ) THEN
    CREATE POLICY "Authenticated users can read all contact submissions" 
      ON public.contact_submissions 
      FOR SELECT 
      TO authenticated 
      USING (true);
  END IF;
END;
$$ LANGUAGE plpgsql;