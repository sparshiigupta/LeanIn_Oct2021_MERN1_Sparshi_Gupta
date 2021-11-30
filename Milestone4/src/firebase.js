// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD02cgbQUU6DFeczbVOhc9Ln7ZmxelS4ik",
  authDomain: "react-crud-30236.firebaseapp.com",
  databaseURL: "https://react-crud-30236-default-rtdb.firebaseio.com",
  projectId: "react-crud-30236",
  storageBucket: "react-crud-30236.appspot.com",
  messagingSenderId: "904022511461",
  appId: "1:904022511461:web:2b5bff624441a8c4201b8c",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
