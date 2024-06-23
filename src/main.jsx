// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCukQtk5BfONF8KiGohFretIh6yTjr9qKE",
  authDomain: "nandeesh-bhatrai---portfolio.firebaseapp.com",
  projectId: "nandeesh-bhatrai---portfolio",
  storageBucket: "nandeesh-bhatrai---portfolio.appspot.com",
  messagingSenderId: "657575794523",
  appId: "1:657575794523:web:19589e4cbc87306b42ec7e",
  measurementId: "G-P7C9HT6Z53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
