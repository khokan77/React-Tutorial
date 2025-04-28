// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAEGCLnnLKsJCxQTBBRZ9U-QOGTroxMJU",
  authDomain: "explore-email-password-fd7dc.firebaseapp.com",
  projectId: "explore-email-password-fd7dc",
  storageBucket: "explore-email-password-fd7dc.firebasestorage.app",
  messagingSenderId: "1000280599352",
  appId: "1:1000280599352:web:1560e37b88dcf99870efcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);