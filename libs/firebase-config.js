// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkBu09pZFbS7mh2N-gEtgeYzTTzeb9qmU",
  authDomain: "kstore-e67bb.firebaseapp.com",
  projectId: "kstore-e67bb",
  storageBucket: "kstore-e67bb.appspot.com",
  messagingSenderId: "1008229111054",
  appId: "1:1008229111054:web:6004a1698b1176d6e1735f",
  measurementId: "G-71PQQ5S8GJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
