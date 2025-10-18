
'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');
  const [message, setMessage] = useState('Verifying your email...');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!token) {
      setMessage('No verification token found. Please check your email again.');
      setError(true);
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await fetch(`/api/auth/verify-email?token=${token}`);
        
        // The API route redirects on success, so this part will likely only run on failure.
        if (res.ok) {
          setMessage('Email verified successfully! You can now log in.');
          // For redundancy, in case the redirect from the API fails
          setTimeout(() => router.push('/login?verified=true'), 2000);
        } else {
          const errorData = await res.json();
          setMessage(errorData.message || 'Verification failed. The link may have expired.');
          setError(true);
        }
      } catch (err) {
        console.error('Email verification error', err);
        setMessage('An error occurred during email verification. Please try again later.');
        setError(true);
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center' }}>
      <h1>Email Verification</h1>
      <p style={{ color: error ? 'red' : 'green' }}>{message}</p>
      {error ? (
        <Link href="/signup">Try signing up again</Link>
      ) : (
        <Link href="/login">Go to Login</Link>
      )}
    </div>
  );
}

export default function VerifyEmailPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <VerifyEmailContent />
        </Suspense>
    )
}
now ginow 