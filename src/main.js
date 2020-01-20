// // Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

const btnRegistro= document.getElementById('registrarme').addEventListener('click', registrarme)
const btnEntrar = document.getElementById('entrar').addEventListener('click', entrar)

function registrarme() {
  const root = document.getElementById('root')
    root.innerHTML=  `<h4>Registro de Usuarios</h4>
  <input id="email" type="email" placeholder="ingresa tu Email">
  <input id="password" type="password" placeholder="Ingresa tu contraseña">`
}

function registrar() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
};

function entrar() {
    const email2 = document.getElementById('email2').value;
    const password2 = document.getElementById('password2').value;
    
    firebase.auth().signInWithEmailAndPassword(email2, password2)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });
}
 function observador() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
 }
 observador();