// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaPAWhnH96dOuJ8FMtE68qbC6Dtxntlrk",
  authDomain: "eaglecabs-a0c74.firebaseapp.com",
  databaseURL: "https://eaglecabs-a0c74-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eaglecabs-a0c74",
  storageBucket: "eaglecabs-a0c74.firebasestorage.app",
  messagingSenderId: "227926287271",
  appId: "1:227926287271:web:b73693b7c3ed2b6c7a0c82",
  measurementId: "G-7MVL1G1D21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); 
const auth = getAuth(app);
export { app, analytics, database, auth };
