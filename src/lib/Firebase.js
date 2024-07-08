import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyASY8qaF0kOV8mc0g5GKICogQeR3KwNIuU",
  authDomain: "ichat1-edf7d.firebaseapp.com",
  projectId: "ichat1-edf7d",
  storageBucket: "ichat1-edf7d.appspot.com",
  messagingSenderId: "1042653240666",
  appId: "1:1042653240666:web:b422018dd6a3ec093b6763"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()