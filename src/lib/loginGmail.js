//boton de gmail//
export const authFire = ()=> {
  const provider= new firebase.auth.GoogleAuthProvider(); {

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  };

<<<<<<< HEAD
function logGmail() {
  const root2 = document.getElementById('root2')
  root2.innerHTML=`<header id="root2">
  <button id="Gmail">Ingresa Aqui</button>
</header>
`
}

function logG (){
  const Gmail =document.getElementById('Gmail').value;
 
  firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      // ...
    });

} 
=======
firebase.auth().sigInWithPopup(provider).then(function(result){

  let token= result.credencial.accessToken;

  let user =resul.user;
console.log(user);

}).catch(function(error) {
let errorCode= error.code;
let errorMessage= error.message;
let email= error.email;
let credential= error.credential;
console.error(error)

});
}


document.getElementById('btngmail').addEventListener('click',authFire)
>>>>>>> 8606b5cf34808720d934d9a4619d0533ca5c2f9b
