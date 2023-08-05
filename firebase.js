// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6wSqmONlaqwWeiDhGfsu1rJEHl0SHOu8",
  authDomain: "medium-clone-6526a.firebaseapp.com",
  projectId: "medium-clone-6526a",
  storageBucket: "medium-clone-6526a.appspot.com",
  messagingSenderId: "146296783107",
  appId: "1:146296783107:web:25cd34a317f0555e41a936",
  measurementId: "G-93XEEFWCH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};