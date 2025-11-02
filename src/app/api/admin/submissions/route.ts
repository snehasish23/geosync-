import { NextResponse } from 'next/server';
import { getAllContactSubmissions } from '@/lib/supabase-admin';

export async function GET() {
  try {
    const data = await getAllContactSubmissions();
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching submissions via admin API:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}