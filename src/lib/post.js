// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCJK1y95OD8KAEsm8rzYjeZLcwyJ6Hfa5A",
  authDomain: "social-network-7c958.firebaseapp.com",
  projectId: "social-network-7c958",
});

var db = firebase.firestore();

//agregar documentos
function guardar() {
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
      
  });
}

// LEER DOCUMENTOS

db.collection("users").onSnapshot((querySnapshot) => {
  postUsuario.innerHTML = '';

  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().Titulo}`);
      postUsuario.innerHTML += 
      
      ` 
      <h1>${doc.data().Titulo} </h1> 
      <textarea>${doc.data().Texto}</textarea>
      `
  });
});