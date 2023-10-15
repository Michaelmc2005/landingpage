// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoSqKTUrNCvj-03W1tJF_izqRGDnfR5nY",
  authDomain: "socratique-51535.firebaseapp.com",
  databaseURL: "https://socratique-51535-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socratique-51535",
  storageBucket: "socratique-51535.appspot.com",
  messagingSenderId: "13244664859",
  appId: "1:13244664859:web:c690d586e20f67e7b6bcbe",
  measurementId: "G-XNKE05VS45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

// Initialize Google Auth Provider
const provider = new GoogleAuthProvider();

// Function to perform the Google sign-in process
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
  }
};

export { db, auth, signInWithGoogle };
