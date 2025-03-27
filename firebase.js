// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMdKmv7zXaM28Qg6oTGJmjIFDsSxs8DEQ",
  authDomain: "task-manager-c98cd.firebaseapp.com",
  projectId: "task-manager-c98cd",
  storageBucket: "task-manager-c98cd.firebasestorage.app",
  messagingSenderId: "846818943768",
  appId: "1:846818943768:web:32bedbea79b71e86e6346d",
  measurementId: "G-99CZTWYJ7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db, signInWithPopup, signOut, collection, addDoc, getDocs, deleteDoc, doc, updateDoc };
