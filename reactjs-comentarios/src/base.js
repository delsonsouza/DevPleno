import Rebase from 're-base'
import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDPdr9eN4q2rqjYRJWWUoNX6bTanNu-PA4',
  authDomain: 'reactjs-comentarios.firebaseapp.com',
  databaseURL: 'https://reactjs-comentarios.firebaseio.com',
  projectId: 'reactjs-comentarios',
  storageBucket: 'reactjs-comentarios.appspot.com',
  messagingSenderId: '527808990655'
}
const firebaseApp = Firebase.initializeApp(config)
const db = Firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
  'facebook': new Firebase.auth.FacebookAuthProvider()
}

export const auth = Firebase.auth()
export default base
