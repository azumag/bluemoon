// https://firebase.google.com/docs/functions/typescript
import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp();

const fireStore = admin.firestore();

exports.createUserData = functions.auth.user().onCreate(user => { 
  const userName = user.displayName ? user.displayName : null;
  return fireStore.collection('users').add({
    name: userName,
    uid: user.uid
  })
  .catch(error => {
    console.error("Error :", error);
  });
}); 

exports.deleteUserData = functions.auth.user().onDelete(user => { 
  return fireStore.collection("users").where('uid', '==', user.uid).get()
    .then(qSnap => {
      qSnap.forEach(async doc => {
        await doc.ref.delete();
      })
    })
    .catch(error => {
      console.error("Error removing document: ", error);
    });
});
