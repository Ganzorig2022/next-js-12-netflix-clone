// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'netflix-clone-7a3ea.firebaseapp.com',
  projectId: 'netflix-clone-7a3ea',
  storageBucket: 'netflix-clone-7a3ea.appspot.com',
  messagingSenderId: '40717660294',
  appId: '1:40717660294:web:10743c6f8655168de9e107',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { auth, db };
