// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK2tnScT1xsGYgdxpHUt3pB61uYBMZvMQ",
  authDomain: "auth-registration-6e034.firebaseapp.com",
  projectId: "auth-registration-6e034",
  storageBucket: "auth-registration-6e034.firebasestorage.app",
  messagingSenderId: "735341719115",
  appId: "1:735341719115:web:a8fe524e3d762a486727ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);