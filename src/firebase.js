import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCeGkFnTlaT5MQ8mD57sowJrHGeVuKVpjg",
    authDomain: "react-project-17b4b.firebaseapp.com",
    projectId: "react-project-17b4b",
    storageBucket: "react-project-17b4b.appspot.com",
    messagingSenderId: "420232848168",
    appId: "1:420232848168:web:24af66d2147e126a98e61d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, storage, db }