import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDXzyxvlOTcQx9aAE8yTyan8o2Gkuog9SM",
  authDomain: "todo-hexa.firebaseapp.com",
  databaseURL: "https://todo-hexa.firebaseio.com",
  projectId: "todo-hexa",
  storageBucket: "todo-hexa.appspot.com",
  messagingSenderId: "971881863779",
  appId: "1:971881863779:web:25dda77b59ef684e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export default db;
