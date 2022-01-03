
// import * as firebase from 'firebase'
// declare var firebase: import('firebase');
// import firebase from 'firebase';
// import firebase from 'firebase/app';

// const { initializeApp } = require( 'firebase/app');
// const { getDatabase } = require("firebase/database");

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


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
// var firebaseConfig = initializeApp(Config)
// // firebase.initializeApp(Config);
// // console.log('dc chua v', firebaseConfig);
// export default getDatabase(firebaseConfig);
// export default firebaseConfig;

const app = initializeApp(Config);
console.log('connect firebase success', app);

export const firebase = getFirestore(app);
