

import * as views from './lib/login.js';
import * as home from '/lib/home.js';
import * as register from '/lib/register.js';
views.showLogIn();
// Your web app's Firebase configuration
export const firebaseConfig = {
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

// Llamada para función que tiene formulario de Login


// Llamada para función de recuperar contraseña
const recoverBtn = document.getElementById("recoverBtn");
  recoverBtn.addEventListener('click', () => {  
  views.recoverPass();

  })
// Llamada para función que contiene formulario de registro
document.getElementById('registerMe').addEventListener('click', register.registerMe)


// inicio de sesión
document.getElementById('logIn').addEventListener('click', (prevent) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  prevent.preventDefault();
  views.logIn(email, password);

})
// Llamada a función
// Función observador
function observer() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      home.showHome(user);
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
      let providerData = user.providerData;
      // ...
    } else {

    }

  });

 }
 observer();


