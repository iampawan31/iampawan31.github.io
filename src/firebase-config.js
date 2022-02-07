import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCG3SyEqP74vi1BH0kcfjXDIt_4hdiQR6M',
  authDomain: 'iampawan31githubio.firebaseapp.com',
  projectId: 'iampawan31githubio',
  storageBucket: 'iampawan31githubio.appspot.com',
  messagingSenderId: '115549273321',
  appId: '1:115549273321:web:a93c635827c6dbb5bd0478',
  measurementId: 'G-VFYJQS848C',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
