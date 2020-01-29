// INICIO DE POST -- VARINEA //
firebase.initializeApp({
    apiKey: "AIzaSyCJK1y95OD8KAEsm8rzYjeZLcwyJ6Hfa5A",
    authDomain: "social-network-7c958.firebaseapp.com",
    projectId: "social-network-7c958",
});

var db = firebase.firestore();

//agregar documentos

document.getElementById('postbutton').addEventListener('click',function(){
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
					})
});

// LEER DOCUMENTOS

db.collection("users").onSnapshot((querySnapshot) => {
    postUsuario.innerHTML = '';

    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().Titulo}`);
        postUsuario.innerHTML += 
        
        ` 
        <h2 id="tittle">${doc.data().Titulo} </h2> 
        <textarea id="text">${doc.data().Texto}</textarea>
        <button id="postDeleted" onclick="postDeleted('${doc.id}')"> Borrar </button>
        <button id="postEditUs" onclick="postEditUs('${doc.id}','${doc.data().Titulo}','${doc.data().Texto}')"> Editar </button>
        `
    });
});

// ELIMINAR DOCUMENTOS

function postDeleted(id) {
    db.collection("users").doc(id).delete().then(function() {
        console.log("Vaya, vaya, has eliminado el post correctamente!");
    }).catch(function(error) {
        console.error("Ups!, Ocurrio un error: ", error);
    });

};

