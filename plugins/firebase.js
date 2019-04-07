import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBbd3JR0KiWOiCIeh1TFVFRVv0gRzBPtC8',
  authDomain: 'bluemoon-82c0b.firebaseapp.com',
  databaseURL: 'https://bluemoon-82c0b.firebaseio.com',
  projectId: 'bluemoon-82c0b',
  storageBucket: 'bluemoon-82c0b.appspot.com',
  messagingSenderId: '520365310779'
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
export default firebase
