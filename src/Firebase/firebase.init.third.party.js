// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdrTFLfpt_dUG0y22cGc1HM-YT6Jwqof8",
  authDomain: "simple-firebase-github-3610e.firebaseapp.com",
  projectId: "simple-firebase-github-3610e",
  storageBucket: "simple-firebase-github-3610e.firebasestorage.app",
  messagingSenderId: "961489552032",
  appId: "1:961489552032:web:af5b81e32b5125da2abfc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);