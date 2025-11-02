'use client';

import { useState, useEffect } from 'react';
// Data is fetched via server-side API using service role

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [setupStatus, setSetupStatus] = useState<string | null>(null);

  // Function to fetch submissions
  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin/submissions');
      const json = await res.json();
      if (!json.success) {
        throw new Error(json.message || 'Failed to fetch submissions');
      }
      setSubmissions(json.data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch submissions');
    } finally {
      setLoading(false);
    }
  };

  // Function to set up the database
  const setupDatabase = async () => {
    try {
      setSetupStatus('Setting up database...');
      const response = await fetch('/api/setup-db');
      const data = await response.json();
      
      if (data.success) {
        setSetupStatus('Database setup complete! Refreshing data...');
        setTimeout(() => {
          fetchSubmissions();
          setSetupStatus(null);
        }, 2000);
      } else {
        setSetupStatus(`Setup failed: ${data.message}`);
      }
    } catch (err) {
      setSetupStatus('Error setting up database. Check console for details.');
      console.error(err);
    }
  };

  // Load submissions on page load
  useEffect(() => {
    fetchSubmissions();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Form Submissions</h1>
      
      {setupStatus && (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4">
          {setupStatus}
        </div>
      )}
      
      <div className="mb-6 flex gap-4">
        <button 
          onClick={fetchSubmissions}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Refresh Data'}
        </button>
        
        <button 
          onClick={setupDatabase}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Setup Database Table
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
          Error: {error}
        </div>
      )}
      
      {submissions.length === 0 && !loading ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          No submissions found. Make sure the table exists and has data.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 text-gray-900">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 border text-gray-700">Date</th>
                <th className="px-4 py-2 border text-gray-700">Name</th>
                <th className="px-4 py-2 border text-gray-700">Email</th>
                <th className="px-4 py-2 border text-gray-700">Phone</th>
                <th className="px-4 py-2 border text-gray-700">Organization</th>
                <th className="px-4 py-2 border text-gray-700">Message</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id}>
                  <td className="px-4 py-2 border text-gray-900">{formatDate(submission.created_at)}</td>
                  <td className="px-4 py-2 border text-gray-900">{submission.name}</td>
                  <td className="px-4 py-2 border text-gray-900">{submission.email}</td>
                  <td className="px-4 py-2 border text-gray-900">{submission.phone || '-'}</td>
                  <td className="px-4 py-2 border text-gray-900">{submission.organization || '-'}</td>
                  <td className="px-4 py-2 border text-gray-900">
                    <div className="max-h-32 overflow-y-auto">
                      {submission.message}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}