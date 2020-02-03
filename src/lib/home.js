// Función que muestra el muro 
function showHome(user) {
  if (user.emailVerified) {
    window.location.hash = '/home';
    root.innerHTML = `
      <h1>DP</h1>
      <br>
      <button id="homeMuro"class="btn-naranjo">HOME</button>
      <button id="perfilUsuario" >fotoUsuario</button>
      <br>
      <!-------------- Buscador -------------->
      <input type="text" id="searchMuro" class="searchClass" placeholder="Buscador de DovePLayer"></input>
  
      <!-------------- POST Usuario -------------->
  
      <h1>Haz una publicación</h1>
  
      <!-------------- Titulo POST -------------->
      <input type="text" class="searchClass" Id="postTittle" size="15" maxlength="20" placeholder="Titulo">
  
      <!-------------- Comentario POST -------------->
      <input type="text" class="searchClass "  Id="postText" rows="10" cols="40" placeholder="Escribe aquí tu comentario">
  
      <!-------------- Boton Publicar POST -------------->
      <button id="postbutton"class="btn-naranjo">Publicar</button>
      <div id="postUsuario"></div>
  
      <section>
        <div class="box-flex">
            <div class="tarjeta white">
                <div class="fila head-user">
                    <div class="columna">
                       
                    </div>
                    <div class="columna">
                        <h2>Susej</h2>
                        <p>5.0</p>
                        <p>MASTER</p>
                    </div>
                </div>
                <div class="fila">
                    <div class="columna">
                        <h3>Catan</h3>
                        <p>“La esencia del juego no está en competir, sino en colaborar: los problemas de la competic  ión se pueden resolver de manera no violenta”</p>
                        <p>
                            <span><a href="">#tablegame</a></span>
                        </p>
                    </div>
                </div>
                <div class="fila">
                    <img src="../img/juego.png" class="fullwidth" alt="">
                </div>
                <div class="fila flex-end">
                    <ul class="social-icons pad-all">
                        <li>
                            <a href="">12 <i class="fa fa-heart" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="">4  <i class="fa fa-commenting-o" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="">5  <i class="fa fa-share" aria-hidden="true"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
      <!-------------- Cerrar Sesión -------------->
      <button id="btnSignOff" class="btn-naranjo">Cerrar Sesión</button>  `
      
      document.getElementById('btnSignOff').addEventListener('click', signOff)
      function signOff() {
  
        firebase.auth().signOut()
          .then(function () {
            document.location.href = "/";
            
          })
          .catch(function (error) {
            console.log('error')
          });
      }

     
    //___________________CREAR POST___________________

    document.getElementById('postbutton').addEventListener('click', savePost)

    const db = firebase.firestore();


    function savePost() {
      let postTittle2 = document.getElementById('postTittle').value;
      let postText2 = document.getElementById('postText').value;

      db.collection("users").add({
          Titulo: postTittle2,
          Texto: postText2,
          like: [],
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          document.getElementById('postTittle').value = ''; // Una vez se haya generado el dato se dara un string limpio (reseteara la pag)
          document.getElementById('postText').value = '';

        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        })
    };

    //___________________Like Post___________________
    function likePost(id) {
      let user = firebase.auth().currentUser;
      db.collection('users').doc(id).get().then((resultado) => {

          let post = resultado.data();

          if (post.like == null || post.like == '') {
            post.like = [];
            console.log("entro al like vacio");
          }

          if (post.like.includes(user.uid)) {

            for (let i = 0; i < post.like.length; i++) {

              if (post.like[i] === user.uid) { //verifica si ya el usuario está en el array

                post.like.splice(i, 1); // sentencia para eliminar un elemento de un array

                db.collection('users').doc(id).update({ // para actualizar el array
                  like: post.like
                });

              }
            }
          } else {

            post.like.push(user.uid);
            db.collection('users').doc(id).update({
              like: post.like
            });

          }

          // document.getElementById(`cantidadlikes-${doc.id}`).value = post.like.length;
        })
        .catch(function (error) {

        });
    };
    //___________________IMPRIMIR POST CREADO___________________

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
        <button id="likePost"> Me gusta <i class="fa fa-heart" aria-hidden="true"></i></button>`
        
        document.getElementById('postDeleted').addEventListener('click', () => {
          postDeleted(doc.id);
        });
        
        document.getElementById('likePost').addEventListener('click', () => {
          likePost(doc.id);
        });
        //___________________Eliminar Post___________________

        function postDeleted(id) {
          db.collection("users").doc(id).delete().then(function () {
            console.log("Vaya, vaya, has eliminado el post correctamente!");
          }).catch(function (error) {
            console.error("Ups!, Ocurrio un error: ", error);
          });
        };


        //___________________Cerrar Sesión___________________

        document.getElementById('btnSignOff').addEventListener('click', signOff);

        function signOff() {

          firebase.auth().signOut()
            .then(function () {
              document.location.href = "/";

            })
            .catch(function (error) {
              console.log('error')
            });
        }

      });


    });

  }
}
export {showHome}