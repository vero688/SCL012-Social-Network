<<<<<<< HEAD
//inicio con google
 export const authFire = () => {
  const provider = new firebase.auth.GoogleAuthProvider();


  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then(function (result){
     let token= result.credencial.accessToken;
     let user =resul.user;
     console.log(user)
    }).catch(function(error) {
let errorCode= error.code;
let errorMessage= error.message;
let email= error.email;
let credential= error.credential;
console.error(error)

});
document.getElementById('btngmail').addEventListener('click',authFire);
}



//inicio con Facebook//

 export const authFacebook = ()=> {
const provider = new firebase.auth.FacebookAuthProvider();
  
firebase.auth().signInWithPopup(provider).then(function(result) {
  
  let token = result.credential.accessToken;
  
  let user = result.user;

}).catch(function(error) {
  
  let errorCode = error.code;
  let errorMessage = error.message;
 
  let email = error.email;
  
  let credential = error.credential;
  
});
  
document.getElementById ('btnFace').addEventListener('click',authFacebook);
 
=======

// export const authFire = () => {

//   const provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//   firebase.auth().signInWithPopup(provider).then(function(result){
//     let token= result.credencial.accessToken;
//   let user =resul.user;
// console.log(user);
// }).catch(function(error) {
// let errorCode= error.code;
// let errorMessage= error.message;
// let email= error.email;
// let credential= error.credential;
// console.error(error)
// });
// }
// document.getElementById('btngmail').addEventListener('click', authFire)

>>>>>>> 0c410981f74d67b9ceea20830e37e8412c90b244
