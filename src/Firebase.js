// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCSKislKjT9sxfM50VvchBtA074Jc77jc",
  authDomain: "user-okurmen.firebaseapp.com",
  projectId: "user-okurmen",
  storageBucket: "user-okurmen.appspot.com",
  messagingSenderId: "824934006808",
  appId: "1:824934006808:web:7f633c948e45167c15036d",
  measurementId: "G-CK18KS6NKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);