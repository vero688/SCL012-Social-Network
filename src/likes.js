


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
  
          document.getElementById(`cantidadlikes-${doc.id}`).value = post.like.length;
      })
          .catch(function (error) {
  
          });	
  };