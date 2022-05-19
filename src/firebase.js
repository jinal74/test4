// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6puz4VjPq4pus_vld1U70iyC4AycLkVg",
    authDomain: "test4app-f393d.firebaseapp.com",
    projectId: "test4app-f393d",
    storageBucket: "test4app-f393d.appspot.com",
    messagingSenderId: "937016014555",
    appId: "1:937016014555:web:637e882d0dd83b62ce7efe",
    measurementId: "G-L35CLEWPC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);