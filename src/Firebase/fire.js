// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_KNV07ZylWMhn6Zh1fMscfQmGXitzFH4",
  authDomain: "adminpanel-6a495.firebaseapp.com",
  projectId: "adminpanel-6a495",
  storageBucket: "adminpanel-6a495.firebasestorage.app",
  messagingSenderId: "1061916398100",
  appId: "1:1061916398100:web:78c079b2341a668a690d01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


export const auth = getAuth()

export const googleAuth=()=>{

  let provider = new GoogleAuthProvider()
    return signInWithPopup(auth,provider)

}