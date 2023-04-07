
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsSgmnN20It1HUxikoW4FqrtAqaIgTrkw",
  authDomain: "akrav-ecommerce.firebaseapp.com",
  projectId: "akrav-ecommerce",
  storageBucket: "akrav-ecommerce.appspot.com",
  messagingSenderId: "825167883989",
  appId: "1:825167883989:web:f1a9660974b8a37a60bc5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;