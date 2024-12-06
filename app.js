import { auth,provider,createUserWithEmailAndPassword, signInWithEmailAndPassword ,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup  } from "./firebase.js"
////////////////////// sign with emai ///////////
const inputemail = document.querySelector('#signupemail')
const inputpassword = document.querySelector('#signuppassword')
const signupbutton = document.querySelector('#Signupbutton')

signupbutton.onclick = ()=>{
  createUserWithEmailAndPassword(auth, inputemail.value, inputpassword.value)
  .then((userCredential) => {
    // Signed up 

    const user = userCredential.user;
    alert("signup sucesss")
    window.location.href="./postapp.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage)
  });
} 

//------------------------- sign with google------------////

const googlebtn= document.querySelector("#googlebtn");
googlebtn.onclick=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert("login succes ")
    window.location.href="./postapp.html"

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert (errorMessage)
    // ...
  });
}

/////------------- login with emai-------------////
const  loginemail = document.querySelector('#loginemail')
const loginpassword = document.querySelector('#loginpassword')
const loginbutton = document.querySelector('#loginbutton')

loginbutton.onclick=()=>{
  signInWithEmailAndPassword(auth, loginemail.value, loginpassword.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login succesfull")
    window.location.href="./postapp.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    
  });
}

////////////////////////// check state////////////



onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
     window.location.href="./dashbord.html"
     console.log("logged state check");
     
    // ...
  } else {
    // User is signed out
    // ...
  }
});





