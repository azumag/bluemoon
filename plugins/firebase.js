import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID
  })
  if (process.env.LOCAL) {
    firebase.firestore().settings({
      host: location.hostname + ":8000",
      ssl: false
    });
  }
}

export default (context, inject) => {
  inject('firestore', firebase.firestore())
}
