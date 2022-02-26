// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ7pkpiw1gmucpPcXudWyGA9lycoeFrQU",
  authDomain: "livestreamingapp-1.firebaseapp.com",
  projectId: "livestreamingapp-1",
  storageBucket: "livestreamingapp-1.appspot.com",
  messagingSenderId: "220607346241",
  appId: "1:220607346241:web:075e7b7fa4f691dba5b8c0",
  measurementId: "G-F423ZVGT2P",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
const auth = getAuth();

const provider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export { auth, provider, FacebookProvider, storage };
export default db;
