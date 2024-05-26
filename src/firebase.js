import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "login-page-d3da5.firebaseapp.com",
  projectId: "login-page-d3da5",
  storageBucket: "login-page-d3da5.appspot.com",
  messagingSenderId: "375875974574",
  appId: "1:375875974574:web:e7220a813385cbc871843f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);