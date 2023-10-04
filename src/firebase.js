// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDP3Jk8iAIzM5MLwNph-GYujm34JBTn3_s',
  authDomain: 'react-chat-cbf01.firebaseapp.com',
  projectId: 'react-chat-cbf01',
  storageBucket: 'react-chat-cbf01.appspot.com',
  messagingSenderId: '450617012070',
  appId: '1:450617012070:web:01d2537bc0851c1e5f22a7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);