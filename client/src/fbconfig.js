 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
 const firebaseConfig = {
   apiKey: "AIzaSyBrQ_XKIoyutMqBCM4HXyB63Nc4CFhIAFA",
   authDomain: "roundtable-83388.firebaseapp.com",
   projectId: "roundtable-83388",
   storageBucket: "roundtable-83388.appspot.com",
   messagingSenderId: "663482147722",
   appId: "1:663482147722:web:46a737874f0dea99981e73",
   measurementId: "G-4VGPGS23YX"
 };
 
 // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);