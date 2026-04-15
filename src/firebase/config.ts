// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDApZtEXMxgEAFzOnbrT7T5Q1xoktLohwM",
  authDomain: "parcial-2-jhon-galvis.firebaseapp.com",
  projectId: "parcial-2-jhon-galvis",
  storageBucket: "parcial-2-jhon-galvis.firebasestorage.app",
  messagingSenderId: "460330694296",
  appId: "1:460330694296:web:e6e85d83325787fd8282ed",
  measurementId: "G-Q4QS6SHT5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {app, auth, db}