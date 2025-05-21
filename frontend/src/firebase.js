import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgJ3AvKL24XiJy41E_1fauqoA5xxkHsik",
  authDomain: "vison-8768c.firebaseapp.com",
  projectId: "vison-8768c",
  storageBucket: "vison-8768c.firebasestorage.app",
  messagingSenderId: "174749893224",
  appId: "1:174749893224:web:c85de2504a3ff084c6b1dd",
  measurementId: "G-CXLSH3YJV4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
