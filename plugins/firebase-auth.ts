import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default (_context, inject) =>
  new Promise((resolve) => {
    const observable = Vue.observable({
      currentUser: firebase.auth().currentUser,
      auth: firebase.auth
    })

    inject('firebase', observable)

    firebase.auth().onAuthStateChanged(() => {
      observable.currentUser = firebase.auth().currentUser
      if (process.env.DEV && observable.currentUser) {
        // Make user entry for local development
        // since emulator does not trigger onAuth event of firebase functions
        console.log(observable.currentUser.uid)
        // firebase
        //   .firestore()
        //   .collection('users')
        //   .doc(observable.currentUser.uid)
        //   .get()
        //   .then((user) => {
        //     if (!user.exists) {
        //       console.log('create')
        //       return firebase
        //         .firestore()
        //         .collection('users')
        //         .add({
        //           name: observable.currentUser.displayName,
        //           uid: observable.currentUser.uid
        //         })
        //     } else {
        //       console.log('user exists')
        //     }
        //   })
        //   .then((res) => {
        //     console.log(res)
        //   })
        //   .catch((e) => {
        //     console.log(e)
        //   })
      }
      resolve()
    })
  })
