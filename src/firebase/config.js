import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAxFTu1rfZt4F9KlJWoshL5qVEtkO5fNE0",
  authDomain: "ninja-firegram-2c273.firebaseapp.com",
  projectId: "ninja-firegram-2c273",
  storageBucket: "ninja-firegram-2c273.appspot.com",
  messagingSenderId: "380896073000",
  appId: "1:380896073000:web:23753630737f596fcaec1d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };