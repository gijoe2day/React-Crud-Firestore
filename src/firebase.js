import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCczs1oxQCiYWlFcwKPGTf-XVd49XWS2T0",
  authDomain: "fb-crud-b367a.firebaseapp.com",
  databaseURL: "https://fb-crud-b367a.firebaseio.com",
  projectId: "fb-crud-b367a",
  storageBucket: "fb-crud-b367a.appspot.com",
  messagingSenderId: "551780190983",
  appId: "1:551780190983:web:31d8e4e234ec25283a93a2",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
