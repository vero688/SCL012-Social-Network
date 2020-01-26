// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyCJK1y95OD8KAEsm8rzYjeZLcwyJ6Hfa5A',
  authDomain: 'social-network-7c958.firebaseapp.com',
  projectId: 'social-network-7c958',
});

// eslint-disable-next-line vars-on-top
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