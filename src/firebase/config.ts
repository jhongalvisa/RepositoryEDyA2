import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDlva-7MocHjiogEz4G4xW_udvRM_H-DlE",
  authDomain: "fir-project-16c3e.firebaseapp.com",
  projectId: "fir-project-16c3e",
  storageBucket: "fir-project-16c3e.firebasestorage.app",
  messagingSenderId: "60484678141",
  appId: "1:60484678141:web:be9860da0a4cfa6df2e994",
  measurementId: "G-STDQLPFV5E",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
