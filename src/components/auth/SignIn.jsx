import React from 'react';
import { useState } from 'react';

import { auth } from '../../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  // Use state for users data inputs
  // useState hook is used to manage the state of the email and password input fields.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    // Sign in
    // Prevent refresh state when app is reloaded
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      {/* On Submit, the fire base will handle authentications */}
      <form onSubmit={signIn}>
        <h1>Log In with Email/Password</h1>
        {/* Email */}
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
