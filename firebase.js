
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged ,signOut ,GoogleAuthProvider,signInWithPopup} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyAQObnAQvDumtcheYD3FI1129BCpWVaXf8",
  authDomain: "mini-hackathon-ebabf.firebaseapp.com",
  projectId: "mini-hackathon-ebabf",
  storageBucket: "mini-hackathon-ebabf.firebasestorage.app",
  messagingSenderId: "1074298661887",
  appId: "1:1074298661887:web:5a2beaaa0c8741819cd5ca",
  measurementId: "G-BBDY8PMDQ0"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,provider,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged ,signOut,GoogleAuthProvider,signInWithPopup }