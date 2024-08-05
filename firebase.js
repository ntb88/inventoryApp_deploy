// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWplmp0fFRQzqWpvROct0UPGOwReejOa8",
    authDomain: "inventory-management-app-71ced.firebaseapp.com",
    projectId: "inventory-management-app-71ced",
    storageBucket: "inventory-management-app-71ced.appspot.com",
    messagingSenderId: "630834553377",
    appId: "1:630834553377:web:a9b14474d2bf858b163960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export { firestore } 