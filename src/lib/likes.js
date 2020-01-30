export let postLike = (id) => {

	let user = firebase.auth().currentUser;	
	
	// de la collection post traeme el documento con el ID, "id"
	db.collection('post').doc(id).get().then((respuesta) => {

		let post = respuesta.data();

		if (post.like == null || post.like == '') {
			post.like = [];
			console.log("entro al like vacio");
		}

		if (post.like.includes(user.uid)) {

			for (let i = 0; i < post.like.length; i++) {

				if (post.like[i] === user.uid) { //verifica si ya el usuario está en el array

					post.like.splice(i, 1); // sentencia para eliminar un elemento de un array
					
					db.collection('post').doc(id).update({ // para actualizar el array
						like: post.like
					}); 

				}
			}
		} else {

			post.like.push(user.uid);
			db.collection('post').doc(id).update({
				like: post.like
			});
			
		}

		document.getElementById(`numero-${doc.id}`).value = post.like.length;
	})
		.catch(function (error) {

		});	
};






// import { post } from './post.js';

// export const addLike = (userUid, userName, postId) => firebase.firestore().collection('post').doc(postId).collection('likes')
//   .doc(userUid)
//   .set({
//     idUser: userUid,
//     nameUser: userName,
//     idPost: postId,
//   });

// export const getAllLikes = (idPost, callback) => {
//   firebase.firestore().collection('post').doc(idPost).collection('likes')
//     .onSnapshot((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       callback(data);
//     });
// };

// export const deleteLike = (user, postId) => firebase.firestore().collection('post').doc(postId).collection('likes')
//   .doc(user)
//   .delete();  





// const likeBtn = document.getElementById("likeBtn");
//    likeBtn.addEventListener('click', () => {  
//     likesPost();
  
//     })

    
//     export const deleteLikePost = (postId) => {
//         const user = userCurrent().uid;
//         const buttonLike = document.getElementById(`like-${postId}`);
//         const buttonDislike = document.getElementById(`dislike-${postId}`);
//         deleteLikeFirebase(user, postId)
//           .then(() => {
//             buttonDislike.classList.add('hide');
//             buttonLike.classList.remove('hide');
//           });
//       };
//       export const addLike = (postId) => {
//         const buttonLike = document.getElementById(`like-${postId}`);
//         const buttonDislike = document.getElementById(`dislike-${postId}`);
//         const user = userCurrent();
//         const userUid = user.uid;
//         const userName = user.displayName;
//         addLikeFirebase(userUid, userName, postId)
//           .then(() => {
//             buttonDislike.classList.remove('hide');
//             buttonLike.classList.add('hide');
//           });
      
      
//     // })

    
