//___________________REGISTRARSE___________________
// Función que muestra formulario de registro
function registerMe() {
    window.location.hash = '/register';
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
    
    
//   Función para registro con Firebase
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
  export{registerMe, register, check}