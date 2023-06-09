import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/firestore/dist/';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWxMEkCItyp74PKy6oUFUXfButIJ67ZrU",
    authDomain: "singhpublication-c6dd4.firebaseapp.com",
    projectId: "singhpublication-c6dd4",
    storageBucket: "singhpublication-c6dd4.appspot.com",
    messagingSenderId: "177432854050",
    appId: "1:177432854050:web:ff09b66b74aee628d6d47b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
