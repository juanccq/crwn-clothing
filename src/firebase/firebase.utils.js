import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBbCVqyWnHvLAJzh8QWHznO9YsZMGVzNOA",
  authDomain: "crwn-db-43e01.firebaseapp.com",
  projectId: "crwn-db-43e01",
  storageBucket: "crwn-db-43e01.appspot.com",
  messagingSenderId: "419277685068",
  appId: "1:419277685068:web:657b4dafd1029ae1c74fe9",
  measurementId: "G-W2RSK66BP4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
