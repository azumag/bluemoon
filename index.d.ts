import 'firebase'
declare module 'vue/types/vue' {
  interface Vue {
    $firebase: any
    $firestore: firebase.firestore.Firestore
    $firestorage: firebase.storage.Storage
  }
}
