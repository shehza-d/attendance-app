import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
  deleteDoc,
  updateDoc,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2JJOBvOzJV68O9jWkM_ASH_nvXu4m-Hg",
  authDomain: "hackathon-attendance1.firebaseapp.com",
  projectId: "hackathon-attendance1",
  storageBucket: "hackathon-attendance1.appspot.com",
  messagingSenderId: "1068266974284",
  appId: "1:1068266974284:web:d3fdbdfb24dbbf584858e9",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// JWT
// Oauth2.0
// single page nhi lagaty flag nhi lagaty
