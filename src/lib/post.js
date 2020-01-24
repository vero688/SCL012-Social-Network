// Initialize Cloud Firestore through Firebase

function postUsuario() {
    const root2 = document.getElementById('root2')
    root2.innerHTML=`<header id="root2">
    <button id="Gmail">Ingresa Aqui</button>
  </header>
 `
}

firebase.initializeApp({
    apiKey: "AIzaSyCJK1y95OD8KAEsm8rzYjeZLcwyJ6Hfa5A",
    authDomain: "social-network-7c958.firebaseapp.com",
    projectId: "social-network-7c958"
  });
  
  var db = firebase.firestore();

  db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});