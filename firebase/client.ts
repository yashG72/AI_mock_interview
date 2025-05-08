// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkFtRN7sMSolirDgzuCG7g61RBXWZKcxQ",
  authDomain: "prepwise-5a6a4.firebaseapp.com",
  projectId: "prepwise-5a6a4",
  storageBucket: "prepwise-5a6a4.firebasestorage.app",
  messagingSenderId: "73510344642",
  appId: "1:73510344642:web:f23c51ae0fa0672caba85b",
  measurementId: "G-RSF60VP6F3"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);