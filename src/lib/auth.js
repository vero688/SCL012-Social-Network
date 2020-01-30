// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJK1y95OD8KAEsm8rzYjeZLcwyJ6Hfa5A",
    authDomain: "social-network-7c958.firebaseapp.com",
    databaseURL: "https://social-network-7c958.firebaseio.com",
    projectId: "social-network-7c958",
    storageBucket: "social-network-7c958.appspot.com",
    messagingSenderId: "533235702935",
    appId: "1:533235702935:web:5b58d0628a18cc8c51ddd2",
    measurementId: "G-N8NJGBC7MR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
// función que realiza el incio de sesión en firebase
function logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
  
      .catch(function (error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert('Debe Ingresar su correo electrónico y Contraseña')
        // ...
        console.log(errorCode);
        console.log(errorMessage); s
      });

    }

     
  export {logIn}