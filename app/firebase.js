// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxECbhVOD8J7zSfmWBalzS29tBl8ISCL4",
  authDomain: "pantry-jg.firebaseapp.com",
  projectId: "pantry-jg",
  storageBucket: "pantry-jg.appspot.com",
  messagingSenderId: "262779022050",
  appId: "1:262779022050:web:f140ba68caefd27bc9ccbb",
  measurementId: "G-9RWWLBR6C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {app, analytics, firestore};
