// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD6wSqmONlaqwWeiDhGfsu1rJEHl0SHOu8",
  authDomain: "medium-clone-6526a.firebaseapp.com",
  projectId: "medium-clone-6526a",
  storageBucket: "medium-clone-6526a.appspot.com",
  messagingSenderId: "146296783107",
  appId: "1:146296783107:web:25cd34a317f0555e41a936",
  measurementId: "G-93XEEFWCH8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();