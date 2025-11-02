import { NextResponse } from 'next/server';
import { setupContactSubmissionsTable } from '@/lib/supabase-admin';

export async function GET() {
  try {
    const success = await setupContactSubmissionsTable();
    
    if (success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Contact submissions table setup complete' 
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to set up contact submissions table' 
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in setup-db route:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Server error during database setup' 
    }, { status: 500 });
  }
}