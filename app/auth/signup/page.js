"use client"
import { useRouter } from 'next/navigation';
import AuthForm from '@/components/auth/AuthForm';

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = async (formData) => {
    try {
      // TODO: Implement actual signup logic
      console.log('Signup attempt:', formData);
      // On successful signup, redirect to login or onboarding
      router.push('/auth/login');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      // TODO: Implement Google OAuth
      console.log('Google auth initiated');
      // On successful auth, redirect to onboarding or dashboard
      // router.push('/onboarding');
    } catch (error) {
      console.error('Google auth failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-purple/20 via-transparent to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-blue/20 via-transparent to-transparent opacity-30" />
      
      {/* Content */}
      <div className="relative w-full max-w-md">
        <AuthForm 
          type="signup" 
          onSubmit={handleSignup}
          onGoogleAuth={handleGoogleAuth}
        />
      </div>
    </div>
  );
}
