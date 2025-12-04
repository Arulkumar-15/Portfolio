// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD12xEt-3sonmfDzqlF1GlUmQ4wnmxt630",
  authDomain: "portfolio-c847f.firebaseapp.com",
  projectId: "portfolio-c847f",
  storageBucket: "portfolio-c847f.firebasestorage.app",
  messagingSenderId: "1070021607371",
  appId: "1:1070021607371:web:1e24a86eb596610f6ac04e",
  measurementId: "G-Y7LQS52YEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
// Analytics (only in browser, not during SSR)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Firestore Database
const db = getFirestore(app);

// Authentication
const auth = getAuth(app);

// Storage
const storage = getStorage(app);

// Cloud Functions
const functions = getFunctions(app);

export { app, analytics, db, auth, storage, functions };

