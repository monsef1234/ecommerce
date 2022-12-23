import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDw0A-gdSFqzIdoWeWj6dqa_LoIJAYDICo",
  authDomain: "ecommerce-e3f56.firebaseapp.com",
  projectId: "ecommerce-e3f56",
  storageBucket: "ecommerce-e3f56.appspot.com",
  messagingSenderId: "323611532331",
  appId: "1:323611532331:web:1acbd5aaabdf85cc3a5e6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
