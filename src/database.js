// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,Auth, createUserWithEmailAndPassword,browserLocalPersistence } from "firebase/auth";
import {Firestore, getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqm5iI-nYsmxzySrhDqyxvRTkWrd2Lf3o",
  authDomain: "memes212.firebaseapp.com",
  projectId: "memes212",
  storageBucket: "memes212.appspot.com",
  messagingSenderId: "172728240627",
  appId: "1:172728240627:web:26bda44be6e78f28a72a86",
  measurementId: "G-W7TG21C7F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const storage=getStorage(app);
const auth=getAuth(app)
console.log("jojo")
export{app,db,storage,auth}