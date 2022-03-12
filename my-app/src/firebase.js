// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWHHGBrDt9LF9AbBZnk1LXA4REChaoLiE",
  authDomain: "thesis-a95ed.firebaseapp.com",
  databaseURL: "https://thesis-a95ed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "thesis-a95ed",
  storageBucket: "thesis-a95ed.appspot.com",
  messagingSenderId: "216769656163",
  appId: "1:216769656163:web:2e2ccc82c30a94ceb54f56",
  measurementId: "G-DBL0GVER2B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;