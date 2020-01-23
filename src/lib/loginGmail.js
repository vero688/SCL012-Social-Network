

//iniciar con gmail 

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