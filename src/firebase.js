// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjvunkX5TrT4JZFWdBQnFEx1EA9bqLjwc",
  authDomain: "bingebot-e3845.firebaseapp.com",
  projectId: "bingebot-e3845",
  storageBucket: "bingebot-e3845.firebasestorage.app",
  messagingSenderId: "273396753288",
  appId: "1:273396753288:web:a816abb7f8c63bac48903d",
  measurementId: "G-2V24243GVT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth };
