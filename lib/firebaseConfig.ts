// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHhm6KpYBHMJVQpaS7d-4dxje7AsTnNSA",
  authDomain: "titan-luxe.firebaseapp.com",
  projectId: "titan-luxe",
  storageBucket: "titan-luxe.firebasestorage.app",
  messagingSenderId: "251831262362",
  appId: "1:251831262362:web:2105e74dcd7e2ae416d323"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore DB
export const db = getFirestore(app);
