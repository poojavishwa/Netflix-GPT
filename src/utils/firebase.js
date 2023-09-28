// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWuiol4tE0BJGEMhrS8TVPaMMNk7k7B1g",
  authDomain: "netflixgpt-5ef84.firebaseapp.com",
  projectId: "netflixgpt-5ef84",
  storageBucket: "netflixgpt-5ef84.appspot.com",
  messagingSenderId: "930320152348",
  appId: "1:930320152348:web:9a09268370d12803c2acd9",
  measurementId: "G-TQ4CP5M5G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();