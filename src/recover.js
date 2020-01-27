

 // RECUPERACION CLAVE -- DIANA 
 const recoverBtn = document.getElementById("recoverBtn");
 recoverBtn.addEventListener('click', () => {  //llamando al boton

function recoverPassword(){
const contentRecover = document.getElementById('contentRecover');//llamando divcontenedor en html

    const inputRecover = document.createElement("input");//creando input
    inputRecover.setAttribute('id','inputRecover'); 
    contentRecover.appendChild(inputRecover);


  inputRecover.type = 'text'; //indicando que tipo de input es
  inputRecover.id="inputRecover";//crear id de input
  const writeEmail = inputRecover.value;//declarando constante para que tome valor del input 
  contentRecover.appendChild(inputRecover);//hacendo hijo al input del div contenedor
 
  // const sendEmail = document.creatElement('button');//boton enviar
  //   sendEmail.innerHTML = 'Enviar';
  //   sendEmail.addEventListener('click', () => {
  //       recoverPass();
  //   })
  //   contentRecover.appendChild(sendEmail)

let recoverPass = function(){// para invocar a la funcion de firebase
    let auth = firebase.auth();
    let emailAddress = document.getElementById('emailAddress').value; //para recuperar valor email
    auth.sendPasswordResetEmail(emailAddress)//metodo para recuperacion de correo
    .then(function(){ //notificar cuando se envio el correo
      alert('Se ha enviado un correo a tu cuenta. Porfavor sigue las intrucciones')
  
    },function(error){ // funcion anonima para manejar errores
      console.log(error)
    })
}
recoverPass(writeEmail);//indicando que al hacer click aplique esta funcion 


})

// TERMINO DE FUNCION -- DIANA //