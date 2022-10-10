// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN1P6_iPpROhsB6vszRd95BUgGg-SD8c4",
  authDomain: "e-commerce-site-19c7a.firebaseapp.com",
  databaseURL: "https://e-commerce-site-19c7a.firebaseio.com",
  projectId: "e-commerce-site-19c7a",
  storageBucket: "e-commerce-site-19c7a.appspot.com",
  messagingSenderId: "168560685354",
  appId: "1:168560685354:web:097a0acdc3c4e8318c2e53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);