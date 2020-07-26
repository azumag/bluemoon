import 'firebase'

interface Message {
  display: boolean
  text: string
  color: string
  timeout: number
  show: (
    message: string,
    option?: {
      color?: string
      timeout?: number
      top?: boolean
      bottom?: boolean
      right?: boolean
      left?: boolean
    }
  ) => void
}

declare module 'vue/types/vue' {
  interface Vue {
    $firebase: any
    $firestore: firebase.firestore.Firestore
    $firestorage: firebase.storage.Storage
    $message: Message
  }
}
