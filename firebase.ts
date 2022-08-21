// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7MfgoMlXwflyNXev_mbZiC5IvO9nQX0c",
  authDomain: "twitter-clone-nextjs-e34be.firebaseapp.com",
  projectId: "twitter-clone-nextjs-e34be",
  storageBucket: "twitter-clone-nextjs-e34be.appspot.com",
  messagingSenderId: "468280164900",
  appId: "1:468280164900:web:cd21f088b4bc727e63ceb1",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
