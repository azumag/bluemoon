import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBe0ZGYl-6DnkvhKbRv1xmXqihPmzHiAzk',
  authDomain: 'bluemoon-212514.firebaseapp.com',
  databaseURL: 'https://bluemoon-212514.firebaseio.com',
  projectId: 'bluemoon-212514',
  storageBucket: 'bluemoon-212514.appspot.com',
  messagingSenderId: '529898517803'
}
firebase.initializeApp(config)
export default firebase
