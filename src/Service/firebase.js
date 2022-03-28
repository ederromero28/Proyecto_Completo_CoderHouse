// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYLypgWeRDLwX8zVFdxeBzFEe1bu0w0vQ",
  authDomain: "celucommercecoderrct.firebaseapp.com",
  projectId: "celucommercecoderrct",
  storageBucket: "celucommercecoderrct.appspot.com",
  messagingSenderId: "151653184328",
  appId: "1:151653184328:web:ae6dc82ac39e4d2189f97d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
