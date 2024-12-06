import { auth,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged,signOut  } from "./firebase.js"

const Signout = document.querySelector('#Signout')
Signout.onclick=() =>{
  signOut(auth).then(() => {
    // Sign-out successful.
    alert("sign out sucessful")
    window.location.href = "./index.html"
  }).catch((error) => {
    // An error happened.
    alert("error")
  });
}


//////  check status/////
onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      
       console.log("logged state check");
       
      // ...
    } else {
      // User is signed out
      // ...
       window.location.href="./index.html"
    }
  });