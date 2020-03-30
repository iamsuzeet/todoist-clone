import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyBG6oycyyFul2CYUMEYMvJZJtIXoWLnJ68',
  authDomain: 'todoist-clone-79aa9.firebaseapp.com',
  databaseURL: 'https://todoist-clone-79aa9.firebaseio.com',
  projectId: 'todoist-clone-79aa9',
  storageBucket: 'todoist-clone-79aa9.appspot.com',
  messagingSenderId: '382983966226',
  appId: '1:382983966226:web:73906fd7b7685eaa1d12cb',
  measurementId: 'G-1Y5HEGHPH4',
});

export { firebaseConfig as firebase };
