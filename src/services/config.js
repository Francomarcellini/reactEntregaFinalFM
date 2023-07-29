import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "geek-n-resin.firebaseapp.com",
  projectId: "geek-n-resin",
  storageBucket: "geek-n-resin.appspot.com",
  messagingSenderId: "463725320467",
  appId: "1:463725320467:web:e23622e548e43cd803a2e6",
  measurementId: "G-EEBGGD4GQB"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




