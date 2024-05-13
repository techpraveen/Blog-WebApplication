// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-129f0.firebaseapp.com",
  projectId: "mern-blog-129f0",
  storageBucket: "mern-blog-129f0.appspot.com",
  messagingSenderId: "16520847940",
  appId: "1:16520847940:web:4801195703f43457595211"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
