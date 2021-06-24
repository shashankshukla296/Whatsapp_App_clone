// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDLsrNtTwq7SEaQSBB5rwnGmFOTl-RgvyA",
    authDomain: "whats-app-clone-be623.firebaseapp.com",
    projectId: "whats-app-clone-be623",
    storageBucket: "whats-app-clone-be623.appspot.com",
    messagingSenderId: "66497796134",
    appId: "1:66497796134:web:522a924b8d6b8d1963eee7",
    measurementId: "G-TMKZXYJPKR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;