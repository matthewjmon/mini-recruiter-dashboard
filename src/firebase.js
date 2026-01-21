import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";

// Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase app
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize analytics and log app load event
const analytics = getAnalytics(firebaseApp);
logEvent(analytics, "app_loaded");

// Initialize Firebase authentication
export const auth = getAuth(firebaseApp);

// Sign in anonymously to demonstrate Firebase auth usage
signInAnonymously(auth).catch(error => {
  console.error("Anonymous auth failed:", error);
});
