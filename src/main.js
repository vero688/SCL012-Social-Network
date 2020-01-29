// // Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
showLogIn();
 document.getElementById('registerMe').addEventListener('click', registerMe)

//  Función que crea la pagina de inicio
function showLogIn () {
  root.innerHTML = ` <h4>Ingreso de Usuarios</h4>
 <form> 
  <input id="email" type="email" placeholder="ingresa tu Email" required>
  <input id="password" type="password" placeholder="Ingresa tu contraseña" required>
  <button id="logIn">Iniciar Sesión</button>
  </form>
  <img class="witch" src="img/brujo.png">
  <button id="registerMe">Registrarme</button>
  <button id="recoverBtn">¿Olvidaste tu contraseña?</button>`
}
// inicio de sesión
document.getElementById('logIn').addEventListener('click', (prevent) => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  prevent.preventDefault();
  logIn(email,password);
   
})
// función que realiza el incio de sesión en firebase
function logIn(email, password) { 
  firebase.auth().signInWithEmailAndPassword(email, password)
   
  .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      alert('Debe Ingresar su correo electrónico y Contraseña')
      // ...
      console.log(errorCode);
      console.log(errorMessage);s
    });
  
}

function showHome (user) {
  if(user.emailVerified) {
        
    root.innerHTML = `
    <h1>DP</h1>
    <br>
    <button id="homeMuro">HOME</button>
    <button id="perfilUsuario">fotoUsuario</button>
    <br>
    <!-- Buscador -->
    <input type="text" id="searchMuro" class="searchClass" placeholder="Buscador de DovePLayer"></input>
    <!-- Cerrar sesión -->
    <button id="btnSignOff">Cerrar Sesión</button>
    `  
    
   document.getElementById('btnSignOff').addEventListener('click', signOff)
   function signOff() {
  
    firebase.auth().signOut()
    .then(function(){
      document.location.href="/";
      //console.log('saliendo....')
    })
    .catch(function(error){
      console.log('error')
    });
  }
   
  }
}
// REGISTRAR USUARIO
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
    .then(function(){
      check()
      alert('La cuenta se ha creado exitosamente');
    })
    .catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        alert('Debe completar todos los campos')
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });    
};

// funcion CERRAR SESIÓN

 
function check() {
  let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('enviando correo...');
})
.catch(function(error) {
  // An error happened.
  console.log(error);
});
}

 function observer() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      showHome(user);
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