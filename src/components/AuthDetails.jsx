import React from 'react';
import { useEffect, useState } from 'react';

import { auth } from '../config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// To check authentication and see if users is signed in or signed out?
const AuthDetails = () => {
  const [authorizedUser, setAuthorizedUser] = useState(null);

  useEffect(() => {
    // Adds an "observer" for changes to the user's sign-in state.
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is true, then set the new authorized user state to be the new user object
        setAuthorizedUser(user);
      } else {
        // Default set authorized user to null
        setAuthorizedUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {authorizedUser ? (
        <>
          <p>{`Signed In as ${authorizedUser.email}`}</p>
          <button
            className="'bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 mt-4 rounded'"
            onClick={userSignOut}
          >
            Sign Out?
          </button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
