// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJOsEyi0Nc8TK_ClQvX0ONYDVhD9v_A4U",
  authDomain: "simple-firebase-auth-f18c6.firebaseapp.com",
  projectId: "simple-firebase-auth-f18c6",
  storageBucket: "simple-firebase-auth-f18c6.firebasestorage.app",
  messagingSenderId: "315200945429",
  appId: "1:315200945429:web:499813f674ac4fd26bfd1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
