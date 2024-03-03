import React from 'react';
import { auth, googleProvider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';

const SignInWithGoogle = () => {
  // Function to handle button event. Firebase will be able to handle the sign in pop up will show for google sign in
  const signInWTGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign-in-container">
      <button onClick={signInWTGoogle}>Sign in with google</button>
    </div>
  );
};

export default SignInWithGoogle;
