import firebase from 'firebase'
// import firestore from 'firebase/firestore'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDvgFHhnXauwtlmWhPVvItcU6HdhnVey5M",
    authDomain: "list-of-expense.firebaseapp.com",
    databaseURL: "https://list-of-expense.firebaseio.com",
    projectId: "list-of-expense",
    storageBucket: "list-of-expense.appspot.com",
    messagingSenderId: "836754476864",
    appId: "1:836754476864:web:1756778ab0e310b6d3b4a5",
    measurementId: "G-CXP20Y91VT"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({timestampInSnapshots: true})
firebase.analytics();

//export firestore database
const firebaseDb = fireBaseApp.database();
export default{
  firebaseApp ,
  firebaseDb,
  firebaseConfig
} 