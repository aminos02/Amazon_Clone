import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCx6CyXqZ4D5bcLu275mikHkHPlEUTDwSE",
  authDomain: "clone-b7977.firebaseapp.com",
  projectId: "clone-b7977",
  storageBucket: "clone-b7977.appspot.com",
  messagingSenderId: "540364279914",
  appId: "1:540364279914:web:1b2f67ffbd76c18be7ba13",
  measurementId: "G-JCQP94KCZF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
