// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDREZ-UcPKF270h3ZbFr_-F_TYUpYEXIrM",
  authDomain: "ema-jhon-firebase-d571e.firebaseapp.com",
  projectId: "ema-jhon-firebase-d571e",
  storageBucket: "ema-jhon-firebase-d571e.appspot.com",
  messagingSenderId: "383454116732",
  appId: "1:383454116732:web:cb1e0612eb63aa5fb542f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export default app;
 
//  export default auth;