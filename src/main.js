import * as views from './lib/login.js';
import * as home from '/lib/home.js';
import * as register from '/lib/register.js';

views.showLogIn();
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBZF84S9Tn7VgJgLJmn92t8uj-MqzNIqGI",
    authDomain: "social-network-3c789.firebaseapp.com",
    databaseURL: "https://social-network-3c789.firebaseio.com",
    projectId: "social-network-3c789",
    storageBucket: "social-network-3c789.appspot.com",
    messagingSenderId: "742708776120",
    appId: "1:742708776120:web:371134ec16af70a32a384d",
    measurementId: "G-P3NYGRX0KZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Llamada para función de recuperar contraseña
const recoverBtn = document.getElementById('recoverBtn');
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
});

// Función observador
function observer() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in.
      home.showHome(user);
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
      const photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
      // ...
};
});
};

observer();