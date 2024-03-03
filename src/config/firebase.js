// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// Auth with google- sign in
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// We can add more custom firebase configs here. We also replace the passkeys within the firebase-configs to reference to a .env file.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase with the current firebase configs settings
const app = initializeApp(firebaseConfig);

// Exports instances of "auth" and "googleProvider"

// Use firebase's initialize app for both google providers and getting to authenticate
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

// Analytics
// const analytics = getAnalytics(app);
