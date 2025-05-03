// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADkT0HZVPXsmMVRqRGT5tD-CCWSeBwixo",
  authDomain: "dragon-news-breaking-1707c.firebaseapp.com",
  projectId: "dragon-news-breaking-1707c",
  storageBucket: "dragon-news-breaking-1707c.firebasestorage.app",
  messagingSenderId: "434751476243",
  appId: "1:434751476243:web:81e392d313c6dfe9daa5e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
