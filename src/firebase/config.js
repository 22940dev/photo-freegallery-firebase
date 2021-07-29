import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDl_P7fFayTjDwOofjsSoekHDvUr0s0OdQ",
  authDomain: "photo-freegallery.firebaseapp.com",
  projectId: "photo-freegallery",
  storageBucket: "photo-freegallery.appspot.com",
  messagingSenderId: "606600198472",
  appId: "1:606600198472:web:1671ca2dbef18ed7be1b7d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
