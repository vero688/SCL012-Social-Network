//  Función que crea la pagina de inicio
function showLogIn() {
  window.location.hash = '/login';
    root.innerHTML = ` 
    <img class="logo" src="img/logo.png">
    <h4>Ingreso de Usuarios</h4>
   <form> 
    <input id="email" type="email" placeholder="ingresa tu Email" required>
    <input id="password" type="password" placeholder="Ingresa tu contraseña" required>
    <button id="logIn">Iniciar Sesión</button>
    </form>
    <img class="witch" src="img/brujo.png">
    <button id="registerMe">Registrarme</button>
  
    <button id="recoverBtn">¿Olvidaste tu contraseña?</button>`
  }
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

  
// Recuperación de contraseña
let recoverPass = function(){ // para invocar a la funcion de firebase
    let auth = firebase.auth();
    let emailAddress = document.getElementById('email').value; //para recuperar valor email
    console.log("EMAIL:", emailAddress);
    auth.sendPasswordResetEmail(emailAddress)//metodo para recuperacion de correo
    .then(function(){ //notificar cuando se envio el correo
      alert('Se ha enviado un correo a tu cuenta. Porfavor sigue las intrucciones')
  
    },function(error){ // funcion anonima para manejar errores
      console.log(error)
    })
  }
  

  export {showLogIn, logIn, recoverPass}