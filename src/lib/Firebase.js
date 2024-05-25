import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "ichat-1646b.firebaseapp.com",
  projectId: "ichat-1646b",
  storageBucket: "ichat-1646b.appspot.com",
  messagingSenderId: "219558170369",
  appId: "1:219558170369:web:6abd7b0b1beec07413d500"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()