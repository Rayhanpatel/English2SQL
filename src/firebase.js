// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmUNuhdaS2ZyWmovBWmqVih1TeQ9pP1dU",
  authDomain: "english2sql-128ac.firebaseapp.com",
  projectId: "english2sql-128ac",
  storageBucket: "english2sql-128ac.appspot.com",
  messagingSenderId: "7000117981",
  appId: "1:7000117981:web:39e60465a22b411c954134",
  measurementId: "G-64GGEFSY20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export {auth, app}