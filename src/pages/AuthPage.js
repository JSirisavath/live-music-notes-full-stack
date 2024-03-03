import React from 'react';

// Sign ins and Signup components
import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import SignInWithGoogle from '../components/auth/SignInWithGoogle';

// Authorized details
import AuthDetails from '../components/AuthDetails';

function AuthPage() {
  return (
    <div>
      <SignIn />

      <SignUp />

      <SignInWithGoogle />

      <AuthDetails />
    </div>
  );
}

export default AuthPage;
