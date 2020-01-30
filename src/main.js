

import * as views from './lib/index.js';
import * as auth from './lib/auth.js';

// Llamada para función que tiene formulario de Login
views.showLogIn();
// Llamada para función que contiene formulario de registro
document.getElementById('registerMe').addEventListener('click', registerMe)


// inicio de sesión
document.getElementById('logIn').addEventListener('click', (prevent) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  prevent.preventDefault();
  auth.logIn(email, password);

})

function showHome(user) {
  if (user.emailVerified) {

    root.innerHTML = `
    <h1>DP</h1>
    <br>
    <button id="homeMuro">HOME</button>
    <button id="perfilUsuario">fotoUsuario</button>
    <br>
    <!-------------- Buscador -------------->
    <input type="text" id="searchMuro" class="searchClass" placeholder="Buscador de DovePLayer"></input>

    <!-------------- POST Usuario -------------->

    <h1>Haz una publicación</h1>

    <!-------------- Titulo POST -------------->
    <input type="text" class="searchClass" Id="postTittle" size="15" maxlength="20" placeholder="Titulo">

    <!-------------- Comentario POST -------------->
    <input type="text" class="searchClass" Id="postText" rows="10" cols="40" placeholder="Escribe aquí tu comentario">

    <!-------------- Boton Publicar POST -------------->
    <button id="postbutton">Publicar</button>
    <div Id="postUsuario"></div>


    <!-------------- Cerrar Sesión -------------->
    <button id="btnSignOff">Cerrar Sesión</button>
    `

    document.getElementById('btnSignOff').addEventListener('click', signOff)
    function signOff() {

      firebase.auth().signOut()
        .then(function () {
          document.location.href = "/";
          //console.log('saliendo....')
        })
        .catch(function (error) {
          console.log('error')
        });
    }

  }
}

//___________________CREAR POST___________________

document.getElementById('postbutton').addEventListener('click', savePost)
  function savePost() { 
  var db = firebase.firestore();
let postTittle2 = document.getElementById('postTittle').value;
let postText2 = document.getElementById('postText').value;	

db.collection("users").add({
      Titulo: postTittle2,
      Texto: postText2,
  })
  .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
      document.getElementById('postTittle').value = ''; // Una vez se haya generado el dato se dara un string limpio (reseteara la pag)
      document.getElementById('postText').value = '';

  })
  .catch(function (error) {
      console.error("Error adding document: ", error);
        })
};
//___________________IMPRIMIR POST CREADO___________________

db.collection("users").onSnapshot((querySnapshot) => {
  postUsuario.innerHTML = '';

  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().Titulo}`);
      postUsuario.innerHTML += 
      
      ` 
      <h2 id="tittle">${doc.data().Titulo} </h2> 
      <textarea id="text">${doc.data().Texto}</textarea>
      <button id="postDeleted" onclick="postDeleted('${doc.id}')"> Borrar </button>
      <button id="postEditUs" onclick="postEditUs('${doc.id}','${doc.data().Titulo}','${doc.data().Texto}')"> Editar </button>
      `
  });
});

//___________________ELIMINAR POST___________________

function postDeleted(id) {
  db.collection("users").doc(id).delete().then(function() {
      console.log("Vaya, vaya, has eliminado el post correctamente!");
  }).catch(function(error) {
      console.error("Ups!, Ocurrio un error: ", error);
  });
};


//___________________REGISTRARSE___________________

function registerMe() {
  const root = document.getElementById('root');
   root.innerHTML = `<h4>Crear Cuenta</h4>
  <input id="name" placeholder="Nombre y Apellido">
  <input id="date" type="date" placeholder="Fecha de Nacimiento">
  <form>
  <input type="radio" name="gender" value="male" > Masculino
  <input type="radio" name="gender" value="female"> Femenino
  <input type="radio" name="gender" value="other"> Otro
  </form>
  <input id="registerEmail" type="email" placeholder="Ingresa tu Email">
  <p>Tu contraseña debe tener un mínimo de 6 caracteres númericos</p>
  <input id="registerPassword" type="password" placeholder="Ingresa tu contraseña">
  <button id="btnRegisterMe">Registrarme</button>
  `
  document.getElementById('btnRegisterMe').addEventListener('click', register)
  }
  
  


function register() {
  const registerEmail = document.getElementById('registerEmail').value;
  const registerPassword = document.getElementById('registerPassword').value;


  firebase.auth().createUserWithEmailAndPassword(registerEmail, registerPassword)
    .then(function () {
      check()
      alert('La cuenta se ha creado exitosamente');
    })
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      alert('Debe completar todos los campos')
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
};

//___________________CERRAR SESIÓN___________________

function check() {
  let user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function () {
    // Email sent.
    console.log('enviando correo...');
  })
    .catch(function (error) {
      // An error happened.
      console.log(error);
    });
}

function observer() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      showHome(user);
      savePost();
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
