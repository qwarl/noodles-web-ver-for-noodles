
// import { initializeApp } from 'firebase/app' // no compat for new SDK
// import { getDatabase, ref } from 'firebase/database'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
const Config = {
  apiKey: "AIzaSyAkP3OJsHDL38TdAS25ks0FTsNki5YckWo",
  authDomain: "fix-mi-ly-15-12.firebaseapp.com",
  databaseURL: "https://fix-mi-ly-15-12-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fix-mi-ly-15-12",
  storageBucket: "fix-mi-ly-15-12.appspot.com",
  messagingSenderId: "949024000852",
  appId: "1:949024000852:web:b278488da3e8675ca756c1",
  measurementId: "G-95GC8FM64D"
};
var firebaseConfig = firebase.initializeApp(Config)
console.log('firebase connected', firebaseConfig);

// firebase.initializeApp(Config);
export default firebaseConfig;

// const app = initializeApp(Config)
// console.log("dc hong day",app);

// const database = getDatabase(app)
// export const userNoodles = ref(database,'noodles')
// export default app