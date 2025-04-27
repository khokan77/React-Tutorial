
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvy7z_jY-8V8uhYqr2d7pdw_QycZ-p9NI",
  authDomain: "simple-firebase-ede7f.firebaseapp.com",
  projectId: "simple-firebase-ede7f",
  storageBucket: "simple-firebase-ede7f.firebasestorage.app",
  messagingSenderId: "1096447254782",
  appId: "1:1096447254782:web:0df96d4608ceede79e45af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
