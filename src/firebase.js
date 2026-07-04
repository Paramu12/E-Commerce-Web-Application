// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxLq6mkSffUVVtxSXBEv6PRB3ofnBQP4Y",
  authDomain: "python-fullstack-234.firebaseapp.com",
  projectId: "python-fullstack-234",
  storageBucket: "python-fullstack-234.firebasestorage.app",
  messagingSenderId: "371302712200",
  appId: "1:371302712200:web:c47ee9ae71f12ba1f4b03d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);