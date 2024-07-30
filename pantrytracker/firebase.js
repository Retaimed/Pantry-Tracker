// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjlwLGKlo36wVhsrlUOQvS5oa4wuqOIzs",
  authDomain: "headstart-pantry-app.firebaseapp.com",
  projectId: "headstart-pantry-app",
  storageBucket: "headstart-pantry-app.appspot.com",
  messagingSenderId: "603753484260",
  appId: "1:603753484260:web:7b0d13a64b149bf943c1f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app,firestore}
// Allows to be accessible from anywhere including phone (this is a NoSQL database only python and js needed to access)