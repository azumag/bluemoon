import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
import Vue from 'vue'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
  })
  // if (process.env.DEV) {
  //   firebase.firestore().settings({
  //     host: location.hostname + ':8000',
  //     ssl: false
  //   })
  // }
}

Vue.prototype.$firestore = firebase.firestore()
Vue.prototype.$firestorage = firebase.storage

// export default (_context: any, inject: any) => {
//   inject('firestore')
//   inject('firestorage', firebase.storage)
// }
