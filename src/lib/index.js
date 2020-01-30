//  Función que crea la pagina de inicio
function showLogIn() {
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


  export {showLogIn}