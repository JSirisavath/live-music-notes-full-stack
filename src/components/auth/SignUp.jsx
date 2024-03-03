import React from 'react';
import { useState } from 'react';

import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
  // Use state for users data inputs
  // useState hook is used to manage the state of the email and password input fields.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission. Firebase will be able to handle the sign up process
  const signUp = (e) => {
    // Sign in
    // Prevent refresh state when app is reloaded
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
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
      <form onSubmit={signUp}>
        <h1>Create An Account!</h1>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
